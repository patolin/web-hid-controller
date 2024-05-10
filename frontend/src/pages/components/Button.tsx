import {Button as NextUIButton} from "@nextui-org/react";
import { ReactNode } from "react";
import { createContext, useContext, useState } from 'react';
import { ControllerContext, ControllerAPIValue } from "@/context/ControllerContext";
import { fetchAPI } from "@/modules/fetchAPI";
    

export const Button = ({children, joypadBtnNum, color="primary"}: {children:ReactNode, joypadBtnNum: number, color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined }) => {
    const { apiConfig, setApiConfig } = useContext(ControllerContext);
    
    async function handleClick(e:any) {
        const btnId = e.target.value; //getAttribute('rel')
        const baseUrl = 'http://' + apiConfig.host + ':' + apiConfig.port + '/'
        const response  = await fetchAPI(baseUrl + 'button-press-release/' + btnId.toString())
        navigator.vibrate(200);
        return 0;
    }
    
    return (
    <NextUIButton color={color} size="lg" onClick={handleClick} rel={joypadBtnNum.toString()} value={joypadBtnNum}>
        {children}
    </NextUIButton> 
)
}