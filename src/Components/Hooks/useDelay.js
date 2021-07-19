//부드럽게 처리

//부드럽게 처리


/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";

let rafId = 0;
let delayY = 0;

//scroll 이벤트
const useScroll = (scrollY) => {
    const [state, setState] = useState({ delayY: 0 });

    useEffect(() => {
        function loop () {
            cancelAnimationFrame(rafId);
            
            delayY = delayY + (scrollY -  delayY) * 0.1;
            rafId = requestAnimationFrame(loop);
            setState({
                delayY: delayY
            })
        
            if( Math.abs(scrollY - delayY) < 1 ) {
                cancelAnimationFrame(rafId);
            }
        }
        requestAnimationFrame(loop);
    }, [scrollY])


    return state;
};

export default useScroll;