import {useState, useEffect, useRef} from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Canvas = styled.canvas`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

//애니메이션 계산
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

const playAnimation = (currentScene, y, value, imageSequence) => {
    let v = {}
        if (currentScene && value){
            for (let i = 0; i < Object.keys(value).length; i++){
                let returnObj = value[Object.keys(value)[i]];
                let key = returnObj.KEY;
                let q = (returnObj.IN[2].end + returnObj.OUT[2].start) / 2
    
                if  ( y < q ){
                    v[key] = calc(returnObj.IN, y);
                } else {
                    v[key] = calc(returnObj.OUT, y);
                }
            }
        }
        
        if (currentScene && imageSequence) {
            v.sequence = Math.round(calc(imageSequence, y));
        }
        
    return v
}



function Video({ videoInfo, currentScene, currentRatioY, value }) {
    const canvasRef = useRef(null);
    const [context, setContext] = useState();
    let v

    v = playAnimation(currentScene, currentRatioY, value, videoInfo.imageSequence)

    useEffect(()=>{
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext('2d');
            if (renderCtx) {
              setContext(renderCtx);
            }
          }
    }, [context]);

    useEffect(()=>{
        if (context && videoInfo.videoImages.length > 0 && v.sequence) {
            context.drawImage(videoInfo.videoImages[v.sequence], 0, 0);
            console.log("이미지 렌더")
        } else if (context && videoInfo.videoImages.length > 0){
            context.drawImage(videoInfo.videoImages[0], 0, 0);
            console.log("첫 이미지 렌더")
            console.log(videoInfo.videoImages[0])
        }
    },[context, v.sequence, videoInfo.videoImages])

    
    return (
        <>
            <CanvasContainer style={{
                display: currentScene ? "flex" : "none",
                opacity: v.opacity && v.opacity,
            }}>
                <Canvas
                    ref={canvasRef}
                    width={1920}
                    height={1080}
                ></Canvas>
            </CanvasContainer>
        </>
    );
}

Video.defaultProps = {
    V: 0
}

export default Video;
