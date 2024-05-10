import {Slider as NextUISlider} from "@nextui-org/react";
import { fetchAPI } from "@/modules/fetchAPI";
import { useContext } from 'react';
import { ControllerContext } from "@/context/ControllerContext";

export const Slider = ({label, dir}: {label?:string, dir?:"horizontal" | "vertical"}) => {
    const { apiConfig, setApiConfig } = useContext(ControllerContext);

    async function handleSliderChange(value: number) {
        const baseUrl = 'http://' + apiConfig.host + ':' + apiConfig.port + '/'
        const response  = await fetchAPI(baseUrl + 'slider-change/' + label?.toLowerCase() + '/' + value.toString())
        navigator.vibrate(500);
    }

    function handleChange(value: number) {
        navigator.vibrate(value*5);
    }

    return (
        <NextUISlider   
            size="lg"
            step={10} 
            showSteps={true} 
            maxValue={100} 
            minValue={0} 
            aria-label={label}
            defaultValue={0.0}
            className="max-w-md" 
            orientation={dir?dir:"vertical"}
            label={label}
            onChangeEnd={handleSliderChange}
            onChange={handleChange}
        />
    )
}