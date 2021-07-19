import {useEffect, useRef} from "react";
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


function Video({ videoImages, value, style }) {

    let canvasRef = useRef(null);

    useEffect(()=>{
        let canvas = canvasRef.current;
        let context = canvas.getContext(`2d`);
        if(videoImages.length > 0) {
            context.drawImage(videoImages[value], 0, 0);
        }
    },[value, videoImages])

    return (
        <>
            <CanvasContainer style={style}>
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
    value: 0
}

export default Video;
