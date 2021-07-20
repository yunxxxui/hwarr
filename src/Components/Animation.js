import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 56px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


//애니메이션 값 계산
const calc = (v, y) => {
    let rv = []

    const trigger = v[2]

    if (trigger.start <= y && y <= trigger.end) {
        rv = (y - trigger.start) / (trigger.end - trigger.start) * (v[1] - v[0]) + v[0]
    } else if (y < trigger.start) {
        rv = v[0]
    } else if (trigger.end < y) {
        rv = v[1]
    }
    
    return rv
}

const playAnimation = (currentScene, y, value) => {
    let v = {}
        
        for (let i = 0; i < Object.keys(value).length; i++){

            let returnObj = value[Object.keys(value)[i]];
            let key = returnObj.KEY;
            let q = (returnObj.IN[2].end + returnObj.OUT[2].start) / 2
            if(currentScene) {
                if  ( y < q ){
                    v[key] = calc(returnObj.IN, y);
                } else {
                    v[key] = calc(returnObj.OUT, y);
                }
            }
        }
        
    return v
}

const Animation = ({ currentScene, currentRatioY, value,  children }) => {

    let v

    v = playAnimation(currentScene, currentRatioY, value)

    return (
        <Container style={{
            display: currentScene ? "flex" : "none",
            opacity: v.opacity && v.opacity,
            transform: v.transMatrix ? `scale(${v.transMatrix}, ${v.transMatrix}) translateY(-4%)`
                : v.translateY ? `translate3d(0,${v.translateY}%,0)`
                : "",
        }}>
            {children}
        </Container>
    )
};

export default Animation;