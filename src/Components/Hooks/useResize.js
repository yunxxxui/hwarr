/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";


//scroll 이벤트
const useResize = () => {
    const [state, setState] = useState({ windowHeight: 0 });
    let timer;

    const onEvent = () => {
        if(!timer) {
            timer = setTimeout(()=>{
                timer = null;
                setState({
                    windowHeight: window.innerHeight
                });
            }, 150);
        };
    };  

    useEffect(() => {
        onEvent();
        window.addEventListener("resize", onEvent);
        return () => window.removeEventListener("resize", onEvent)
    }, [])

    return state;
};

export default useResize;