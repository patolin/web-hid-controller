import vgamepad as vg
import time
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.gamepad = vg.VX360Gamepad()
app.boton = False

BUTTONS = {
    '0': vg.XUSB_BUTTON.XUSB_GAMEPAD_DPAD_UP,
    '1': vg.XUSB_BUTTON.XUSB_GAMEPAD_DPAD_DOWN,
    '2': vg.XUSB_BUTTON.XUSB_GAMEPAD_DPAD_LEFT,
    '3': vg.XUSB_BUTTON.XUSB_GAMEPAD_DPAD_RIGHT,
    '4': vg.XUSB_BUTTON.XUSB_GAMEPAD_A,
    '5': vg.XUSB_BUTTON.XUSB_GAMEPAD_B,
    '6': vg.XUSB_BUTTON.XUSB_GAMEPAD_X,
    '7': vg.XUSB_BUTTON.XUSB_GAMEPAD_Y,
    '8': vg.XUSB_BUTTON.XUSB_GAMEPAD_BACK,
    '9': vg.XUSB_BUTTON.XUSB_GAMEPAD_START,
    '10': vg.XUSB_BUTTON.XUSB_GAMEPAD_LEFT_SHOULDER,
    '11': vg.XUSB_BUTTON.XUSB_GAMEPAD_LEFT_THUMB,
    '12': vg.XUSB_BUTTON.XUSB_GAMEPAD_RIGHT_SHOULDER,
    '13': vg.XUSB_BUTTON.XUSB_GAMEPAD_RIGHT_THUMB,
}

LEFT_STICK = {
    "x": -1.0,
    "y": -1.0,
}

RIGHT_STICK = {
    "x": -1.0,
    "y": -1.0,
}

def convert_joy_value(value, in_min=0, in_max=100, out_min=-1.0, out_max=1.0):
    value=int(value)
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/connect/")
async def root():
    return {"status": "ok"}


@app.get("/button-press-release/{btn_id}")
async def button_press_release(btn_id):
    print(BUTTONS)
    print(btn_id)
    app.gamepad.press_button(button=BUTTONS[btn_id])
    app.gamepad.update()
    
    time.sleep(0.25)
    app.gamepad.release_button(button=BUTTONS[btn_id])
    app.gamepad.update()
    
    return {"button-press-release": str(btn_id)}

@app.get("/switch-change/{btn_id}/{value}")
async def switch_change(btn_id, value):
    if value=="true":
        app.gamepad.press_button(button=BUTTONS[btn_id])
    else:
        app.gamepad.release_button(button=BUTTONS[btn_id])
    app.gamepad.update()
    
    return {"switch-change": str(btn_id), "value": value}


@app.get("/slider-change/{slider}/{value}")
async def slider_change(slider, value):
    mapped_value = convert_joy_value(value)
    if slider=="throtle":
        LEFT_STICK["x"]=mapped_value
    if slider=="mix":
        LEFT_STICK["y"]=mapped_value
    if slider=="flaps":
        RIGHT_STICK["x"]=mapped_value
    app.gamepad.left_joystick_float(LEFT_STICK["x"], LEFT_STICK["y"])
    app.gamepad.right_joystick_float(RIGHT_STICK["x"], RIGHT_STICK["y"])
    app.gamepad.update()
    return {"slider-change": slider, "value": value, "left_joystick": LEFT_STICK, "right_joystick": RIGHT_STICK}
