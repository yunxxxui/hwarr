import React from "react";
import styled, {keyframes} from "styled-components";

//컴포넌트
import Video from "Components/Video"
import Scene from "Components/Scene"
import Animation from "Components/Animation"

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

const HomePresenter = ({sceneHeight, currentScene, videoInfo, currentRatioY}) => {
    
    return (
        <>
            <Container>
                
                <Scene
                    currentScene={currentScene === 1 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    <Video 
                        videoInfo={videoInfo.video1}
                        videoImages={videoInfo.video1.videoImages}
                        currentScene = {currentScene === 1 ? true : false}
                        currentRatioY = {currentRatioY}
                        value = {{
                            opacity: {
                                IN: [0,1,{start:0, end:0.05}],
                                OUT: [1,0,{start:0.9, end:1}],
                                KEY: "opacity"
                            }
                        }}
                    />
                    <MainImg src={HiImg} alt="charcter"></MainImg>
                    <H1>스튜디오 화르르</H1>
                    <H3 id="blink">↓ 스크롤을 해주세요. ↓</H3>

                    <Animation
                        currentScene = {currentScene === 1 ? true : false}
                        currentRatioY = {currentRatioY}
                        value = {{
                            opacity: {
                                IN: [0,1,{start:0.05, end:0.1}],
                                OUT: [1,0,{start:0.25, end:0.32}],
                                KEY: "opacity"
                            },
                            translateY: {
                                IN: [10,0,{start:0.1, end:0.21}],
                                OUT: [0,-5,{start:0.23, end:0.32}],
                                KEY: "translateY"
                            }
                        }}
                    > 

                        <Messages>
                            <H2>캐릭터로 시작하는 마케팅</H2>
                            <H1>여러분 이야기의</H1>
                            <H1>불을 지펴요</H1>
                        </Messages>   

                    </Animation>
                        
                    
                    <Animation
                        currentScene = {currentScene === 1 ? true : false}
                        currentRatioY = {currentRatioY}
                        value = {{
                            opacity: {
                                IN: [0,1,{start:0.3, end:0.35}],
                                OUT: [1,0,{start:0.55, end:0.62}],
                                KEY: "opacity"
                            },
                            translateY: {
                                IN: [10,0,{start:0.3, end:0.51}],
                                OUT: [0,-5,{start:0.53, end:0.62}],
                                KEY: "translateY"
                            }
                        }}
                    >

                        <Messages>
                            <Text>DJI</Text>
                            <H1>OSMO</H1>
                            <H2>POKET 2</H2>
                        </Messages>

                    </Animation>
                    

                </Scene>

                <Scene
                    currentScene={currentScene === 2 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    <Video
                        videoInfo={videoInfo.video2}
                        videoImages={videoInfo.video2.videoImages}
                        currentScene = {currentScene === 2 ? true : false}
                        currentRatioY = {currentRatioY}
                        value = {{
                            opacity: {
                                IN: [0,1,{start:0, end:0.1}],
                                OUT: [1,0,{start:0.85, end:1}],
                                KEY: "opacity"
                            }
                        }}
                    />
                </Scene>

                <Scene
                    currentScene={currentScene === 3 ? true : false}
                    sceneHeight={sceneHeight}
                >
                    
                    <Animation
                        currentScene = {currentScene === 3 ? true : false}
                        currentRatioY = {currentRatioY}
                        value = {{
                            opacity: {
                                IN: [0,1,{start:0.1, end:0.15}],
                                OUT: [1,0,{start:0.35, end:0.45}],
                                KEY: "opacity"
                            },
                            translateY: {
                                IN: [10,0,{start:0.1, end:0.15}],
                                OUT: [0,-5,{start:0.33, end:0.5}],
                                KEY: "translateY"
                            }
                        }}
                    >

                        <Messages>
                            <H1>기계적, 반복적</H1>
                            <H1>광고가 아닌</H1>
                        </Messages>

                    </Animation>

                    <Animation
                        currentScene = {currentScene === 3 ? true : false}
                        currentRatioY = {currentRatioY}
                        value = {{
                            opacity: {
                                IN: [0,1,{start:0.5, end:0.55}],
                                OUT: [1,0,{start:0.95, end:1}],
                                KEY: "opacity"
                            },
                            transMatrix: {
                                IN: [0,3,{start:0.5, end:0.94}],
                                OUT: [3,30,{start:0.95, end:1}],
                                KEY: "transMatrix"
                            }
                        }}
                    >

                        <Messages>
                            <H1>단, 하나뿐인</H1>
                            <H1>당신의 이야기.</H1>
                        </Messages> 

                    </Animation>
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


