/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";


//scroll 이벤트
const useScroll = () => {
    const [state, setState] = useState({ scrollY: 0 });
    let timer;

    const onEvent = () => {
        if(!timer) {
            timer = setTimeout(()=>{
                timer = null;
                setState({
                    scrollY: window.scrollY
                });
            }, 150);
        };
    };

    useEffect(() => {
        onEvent();
        window.addEventListener("scroll", onEvent);
        return () => window.removeEventListener("scroll", onEvent)
    }, [])
    return state;
};

export default useScroll;