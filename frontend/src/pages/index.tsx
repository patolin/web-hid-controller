import { Switch } from "../components/Switch";
import { Slider } from "../components/Slider";
import { Button } from "../components/Button";
import { Connection } from "../components/Connnection";


export default function Home() {
  
  return (
      <main
        className={`className="dark text-foreground w-full h-screen`}
      >
        
        <div className="flex w-full h-3/4  ">
          <div className="w-1/3">
            {/* botonera trim */}
            <div className="flex w-full h-1/3 items-center justify-center">
              <div className="w-1/3"></div>
              <div className="w-1/3 text-center"><Button   joypadBtnNum={0}>Trim Down</Button></div>
              <div className="w-1/3"></div>
            </div>
            <div className="flex w-full h-1/3 items-center justify-center">
              <div className="w-1/3"></div>
              <div className="w-1/3 text-center"><Button   joypadBtnNum={1}>Trim Up</Button></div>
              <div className="w-1/3"></div>
            </div>
            <div className="flex w-full h-1/3 items-center justify-center">
              <div className="w-1/3 text-center"><Button   joypadBtnNum={2}>Trim Left</Button></div>
              <div className="w-1/3"></div>
              <div className="w-1/3 text-center"><Button   joypadBtnNum={3}>Trim Right</Button></div>
            </div>
            {/* /botonera trim */}

          </div>
          <div className="w-1/3 h-full">
              <div className="flex w-full h-full items-center justify-center">
                <div className="w-1/2 h-full text-center">
                  <Slider label="Throtle"/>
                </div>
                <div className="w-1/2 h-full text-center">
                  <Slider label="Mix"/>
                </div>

              </div>
              
          </div>
          <div className="w-1/3">
            {/* botonera lateral */}
            <div className="flex w-full  h-1/4 items-center justify-center">
              <div className="w-1/3 text-center"><Button   joypadBtnNum={4}>Button 1</Button></div>
              <div className="w-1/3"></div>
              <div className="w-1/3 text-center"><Button   joypadBtnNum={5}>Button 2</Button></div>
            </div>
            <div className="flex w-full h-1/4 items-center justify-center">
              <div className="w-1/3 text-center"><Button   joypadBtnNum={6}>Button 3</Button></div>
              <div className="w-1/3"></div>
              <div className="w-1/3 text-center"><Button   joypadBtnNum={7}>Button 4</Button></div>
            </div>
            <div className="flex w-full h-1/4 items-center justify-center">
              <div className="w-1/3 text-center"><Button   joypadBtnNum={8}>Button 5</Button></div>
              <div className="w-1/3"></div>
              <div className="w-1/3 text-center"><Button   joypadBtnNum={9}>Button 6</Button></div>
            </div>
            <div className="flex w-full h-1/4 items-center justify-center text-center">
              <Slider dir="horizontal" label="Flaps"/>
            </div>
            {/* /botonera lateral */}
            
          </div>
        </div>
        <div className="flex w-full h-1/4 items-center justify-center">
          <div className="w-1/4 text-center">
            <Switch color="success"  joypadBtnNum={10}>Park Brake</Switch>
          </div>
          <div className="w-1/4 text-center">
            <Switch color="danger"  joypadBtnNum={11}>Landing Gear</Switch>
          </div>
          <div className="w-1/4 text-center">
            <Switch color="primary"  joypadBtnNum={12}>Panel Lights</Switch>
          </div>
          <div className="w-1/4 text-center">
            <Switch color="success"  joypadBtnNum={13}>Strobe</Switch>
          </div>
          <div className="flex w-full h-1/4 items-center justify-center h-8">
            <Connection/>
          </div>
        </div>
      </main>
  );
}
