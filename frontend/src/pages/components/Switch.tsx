import { ReactNode } from "react";
import {Switch as NextUISwitch} from "@nextui-org/react";
import { useContext } from 'react';
import { ControllerContext } from "@/context/ControllerContext";
import { fetchAPI } from "@/modules/fetchAPI";

export const Switch = ({children, color, joypadBtnNum}: {children:ReactNode, color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined,  joypadBtnNum: number}) => {
    const { apiConfig, setApiConfig } = useContext(ControllerContext);
    
    async function handleSwitchChange(e:any) {
        const value = e.target.checked;
        const baseUrl = 'http://' + apiConfig.host + ':' + apiConfig.port + '/'
        const response  = await fetchAPI(baseUrl + 'switch-change/' + joypadBtnNum.toString() + '/' + value.toString())
        navigator.vibrate(500);
        return 0;
    }

    return (
    <div className="w-auto">
        <div>
        <NextUISwitch  color={color}  size="lg" onChange={handleSwitchChange} rel={joypadBtnNum.toString()}>
        </NextUISwitch>
        </div>
        <div className="content-around">
        {children}
        </div>
    </div>
    );
}
    