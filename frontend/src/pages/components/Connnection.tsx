import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import { createContext, useContext, useState } from 'react';
import { ControllerContext, ControllerAPIValue } from "@/context/ControllerContext";

// const handleClick = (setAPIConfig:any, host: string, port: string) => (e:any) => {
//     ControllerAPIValue.host = host;
//     ControllerAPIValue.port = port;
//     setAPIConfig(ControllerAPIValue);
//     console.log(host, port);
//     console.log('new context: ', ControllerAPIValue);

// }

export const Connection = () => {
    const { apiConfig, setApiConfig } = useContext(ControllerContext);

    const [host, setHost] = useState('localhost');
    const [port, setPort] = useState('8000');

    const updateHost = (e:any) => {
        setHost(e.target.value);
    }
    const updatePort = (e:any) => {
        setPort(e.target.value);
    }
    const updateConfig = () => {
        ControllerAPIValue.host = host;
        ControllerAPIValue.port = port;
        setApiConfig(ControllerAPIValue);
        console.log(host, port);
        console.log('new context: ', ControllerAPIValue);
    }

    return (
        <div className="w-full h-8">
            <div className="flex">
                <div className="w-1/3">
                    <Input
                         color='success'
                         label="API Host"
                         placeholder="API Server host"
                         defaultValue={host}
                         className="w-full"
                         onChange={updateHost}
                    />
                </div>
                <div className="w-1/3">
                    <Input
                         color='danger'
                         label="API Port"
                         placeholder="API Server Port"
                         defaultValue={port}
                         className="w-full"
                         onChange={updatePort}
                    />
                </div>
                <div className="w-1/3">
                    <Button size="lg" color="warning" onClick={updateConfig}>Connect</Button>
                </div>
            </div>
        </div>
    )
} 