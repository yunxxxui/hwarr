import React from "react";
import styled, {keyframes} from "styled-components";

//컴포넌트
import Video from "Components/Video"
import Scene from "Components/Scene"

//이미지
import HiImg from "img/01_Hi.png"


const blinkAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Container = styled.div`
    max-width: 832px;
    margin:0 auto;
    padding: 0 16px;
    height: 100%;
`;

const Messages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 56px;
`

const MainImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    padding-top: 15vh;
`;

const H1 = styled.h1`
    font-family: 'Spoqa Han Sans Neo';
    font-size: 64px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;

    
    @media only screen and (max-width: 700px) {
        font-size: 40px;
    }
`;

const H2 = styled.h2`
    font-size: 32px;
    font-weight: bold;
    text-align: center;

    color: #FE3078;

    @media only screen and (max-width: 700px) {
        font-size: 16px;
    }
`;

const H3 = styled.h3`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #FE3078;

    animation: ${blinkAnimation} 2s ease-in-out 0s infinite  alternate;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
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

//애니메이션 실행
const playAnimation = (y, s, videoInfo) => {
    let v = {};

    const i = {


        //01,02
        messageA_opacity_in: [
            0,
            1,
            {
                start: 0.05,
                end: 0.1
            }
        ],
        messageA_opacity_out: [
            1,
            0,
            {
                start: 0.25,
                end: 0.32
            }
        ],
        messageA_translateY_in: [
            5,
            0,
            {
                start: 0.1,
                end: 0.21
            }
        ],
        messageA_translateY_out: [
            0,
            -5,
            {
                start: 0.23,
                end: 0.32
            }
        ],


        //03,04
        messageB_opacity_in: [
            0,
            1,
            {
                start: 0.3,
                end: 0.35
            }
        ],
        messageB_opacity_out: [
            1,
            0,
            {
                start: 0.55,
                end: 0.62
            }
        ],
        messageB_translateY_in: [
            5,
            0,
            {
                start: 0.3,
                end: 0.51
            }
        ],
        messageB_translateY_out: [
            0,
            -5,
            {
                start: 0.53,
                end: 0.62
            }
        ],


        //05,06
        messageC_opacity_in: [
            0,
            1,
            {
                start: 0.6,
                end: 0.65
            }
        ],
        messageC_opacity_out: [
            1,
            0,
            {
                start: 0.85,
                end: 0.95
            }
        ],
        messageC_translateY_in: [
            5,
            0,
            {
                start: 0.6,
                end: 0.65
            }
        ],
        messageC_translateY_out: [
            0,
            -5,
            {
                start: 0.83,
                end: 0.95
            }
        ],
        
        //07
        messageD_matrix_in: [
            0,
            30,
            {
                start: 0.05,
                end: 0.5
                
            }
        ],
        messageD_opacity_in: [
            0,
            1,
            {
                start: 0,
                end: 0.05
            }
        ],
        messageD_opacity_out: [
            1,
            0,
            {
                start: 0.45,
                end: 0.5
            }
        ],
        video1_opacity_out: [
            1,
            0,
            {
                start: 0.9,
                end: 1
            }
        ],
        video2_opacity_in: [
            0,
            1,
            {
                start: 0,
                end: 0.1
            }
        ],
        video2_opacity_out: [
            1,
            0,
            {
                start: 0.9,
                end: 1
            }
        ],
    }
    switch (s) {
        case 1:

            //비디오
            v.sequence1 = Math.round(calc(videoInfo.video1.imageSequence, y));
            v.action0 = calc(i.video1_opacity_out, y);
            

            if (y < 0.22) {
                v.action1 = calc(i.messageA_opacity_in, y);
                v.action2 = calc(i.messageA_translateY_in, y);
            } else {
                v.action1 = calc(i.messageA_opacity_out, y);
                v.action2 = calc(i.messageA_translateY_out, y);
            }

            if (y < 0.52) {
                v.action3 = calc(i.messageB_opacity_in, y);
                v.action4 = calc(i.messageB_translateY_in, y);
            } else {
                v.action3 = calc(i.messageB_opacity_out, y);
                v.action4 = calc(i.messageB_translateY_out, y);
            }

            break;
        case 2:
                //비디오
                v.sequence2 = Math.round(calc(videoInfo.video2.imageSequence, y));

                if (y < 0.1) {
                    v.action9 = calc(i.video2_opacity_in, y);
                } else {
                    v.action9 = calc(i.video2_opacity_out, y);
                }

            break;
        case 3:

            if (y < 0.82) {
                v.action5 = calc(i.messageC_opacity_in, y);
                v.action6 = calc(i.messageC_translateY_in, y);
            } else {
                v.action5 = calc(i.messageC_opacity_out, y);
                v.action6 = calc(i.messageC_translateY_out, y);
            }
            
            v.action7 = calc(i.messageD_matrix_in, y);

            if (y < 0.22) {
                v.action8 = calc(i.messageD_opacity_in, y);
            } else {
                v.action8 = calc(i.messageD_opacity_out, y);
            }

            break;

        case 4:

            break;

        default:
            console.log("fucking not Any scene")
    }


    return v
}

//애니메이션값
let value={};

const HomePresenter = ({sceneHeight, currentScene, videoInfo, currentRatioY}) => {

    value = playAnimation(currentRatioY, currentScene, videoInfo);
    
    return (
        <>
            <Container>
                
                <Scene
                    currentScene={currentScene === 1 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    <Video 
                        videoImages={videoInfo.video1.videoImages}
                        value={value.sequence1}
                        style={{
                            display: currentScene === 1 ? "block" : "none",
                            opacity: `${value.action0}`,
                        }}
                    />
                    <MainImg src={HiImg} alt="charcter"></MainImg>
                    <H1>스튜디오 화르르</H1>
                    <H3 id="blink">↓ 스크롤을 해주세요. ↓</H3>

                    <Messages style={{
                            display: currentScene === 1 ? "flex" : "none",
                            opacity: `${value.action1}`,
                            transform: `translate3d(0,${value.action2}%,0)`
                    }}>
                        <H2>캐릭터로 시작하는 마케팅</H2>
                        <H1>여러분 이야기의</H1>
                        <H1>불을 지펴요</H1>
                    </Messages>

                    <Messages style={{
                        display: currentScene === 1 ? "flex" : "none",
                        opacity: `${value.action3}`,
                        transform: `translate3d(0,${value.action4}%,0)`
                    }}>
                        <Text>DJI</Text>
                        <H1>OSMO</H1>
                        <H2>POKET 2</H2>
                    </Messages>
                </Scene>
                <Scene
                    currentScene={currentScene === 2 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    <Video
                        videoImages={videoInfo.video2.videoImages}
                        value={value.sequence2}
                        style={{
                            display: currentScene === 2 ? "block" : "none",
                            opacity: `${value.action9}`,
                        }}
                    />
                </Scene>
                <Scene
                    currentScene={currentScene === 3 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    <Messages style={{
                        display: currentScene === 3 ? "flex" : "none",
                        opacity: `${value.action8}`,
                        transform: `scale(${value.action7}, ${value.action7}) translateY(-4%)`,
                    }}>
                        <H1>기계적, 반복적</H1>
                        <H1>광고가 아닌</H1>
                    </Messages>
                    <Messages style={{
                        display: currentScene === 3 ? "flex" : "none",
                        opacity: `${value.action5}`,
                        transform: `translate3d(0,${value.action6}%,0)`
                    }}>
                        <H1>단, 하나뿐인</H1>
                        <H1>당신의 이야기.</H1>
                    </Messages> 
                </Scene>
                <Scene
                    currentScene={currentScene === 4 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    Delete
                </Scene>
                
            </Container>
        </>
    )
};

export default HomePresenter;


