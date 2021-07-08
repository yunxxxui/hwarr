import { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";


//CSS
const Sticky = css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 56px;
`;

const fuck = keyframes`
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
`;

const LocalContainer = styled.div`
    position: -webkit-sticky;
    position: sticky;
    margin-top: 44px;
    top:-1px;
    z-index: 1;
    transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;
`;

const LocalList = styled.ul`
    max-width: 832px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    align-items: center;
    height: 56px;
`;

const Item = styled.li`
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin-right: 32px;
    &:active {
        color: white;
    }
`;

const Contact = styled.a`
    font-size: 12px;
    background: #FE3078;

    margin-left: auto;
    padding: 4px 12px;
    border-radius: 24px;

    min-width: 72px;
    min-height: 24px;

    &:hover {
        background: white;
        color: #FE3078;
    }
`;

const ScrollSection = styled.div`
    margin-top: -48px;
`;

const SceneA = styled.section`
    padding-top: 48px;
`;

const SceneB = styled.section`
`;

const SceneC = styled.section`
`;

const SceneD = styled.section`
`;

const MainImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    padding-top: 15vh;
`;

const Messages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    ${Sticky};
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

    animation: ${fuck} 2s ease-in-out 0s infinite  alternate;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
`;

//Click Event
const useClick = onClick => {
    const element = useRef();
    useEffect(() => {
        const elementRef = element.current
        if (elementRef) {
            elementRef.addEventListener("click", onClick)
        }
        return () => {
            if (elementRef) {
                elementRef.removeEventListener("click", onClick)
            }
        };
    }, [onClick])
    return element;
}

//Clikc시 ScrollTop
const scrollTop = () => window.scrollTo(0, 0)

//all이벤트
const useEvent = () => {
    const [state, setState] = useState({ scrollY: 0, totlaRatioY: 0, sceneHeight: 0, currentScene: 1 });
    const onEvent = () => {
        setState({
            scrollY: window.scrollY,
            sceneHeight: (sceneInfo[0].heightNum * window.innerHeight),
            totlaRatioY: (window.scrollY / (sceneInfo[0].heightNum * window.innerHeight)),
            currentScene: parseInt((window.scrollY / (sceneInfo[0].heightNum * window.innerHeight)) + 1)
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onEvent);
        return () => window.removeEventListener("scroll", onEvent)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", onEvent);
        return () => window.removeEventListener("resize", onEvent)
    }, [])

    useEffect(() => {
        onEvent();
        return () => onEvent();
    }, [])

    return state;
};

//sceneInfo
const sceneInfo = [{
    //화면 높이 * heightNum = 씬 높이(=애니메이션 총 길이)
    heightNum: 5,
}]

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
const playAnimation = (y, s) => {
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
                start: 0.05,
                end: 0.1
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

    }
    switch (s) {
        case 1:

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

            if (y < 0.82) {
                v.action5 = calc(i.messageC_opacity_in, y);
                v.action6 = calc(i.messageC_translateY_in, y);
            } else {
                v.action5 = calc(i.messageC_opacity_out, y);
                v.action6 = calc(i.messageC_translateY_out, y);
            }

            break;
        case 2:

                v.action7 = calc(i.messageD_matrix_in, y);

                if (y < 0.22) {
                    v.action8 = calc(i.messageD_opacity_in, y);
                } else {
                    v.action8 = calc(i.messageD_opacity_out, y);
                }

            break;
        case 3:
            break;

        default:
            console.log("fucking not Any scene")
    }


    return v
}

//HTML
const Home = () => {
    //Clikc이벤트
    const title = useClick(scrollTop);

    //Scroll이벤트
    //scrollY는 현재 스클롤 위치
    //currentScene는 현재씬
    //totlaRatioY는 전체씬의 진행비율(=scrollRatio)
    const { scrollY, totlaRatioY, sceneHeight, currentScene } = useEvent();
    //currnetRatioY는 현재씬의 진행비율
    const currentRatioY = (totlaRatioY - (currentScene - 1));
    //animation
    const value = playAnimation(currentRatioY, currentScene);
    console.log(value);

    return (
        <>
            <LocalContainer keyframe={sceneInfo.messageA_opacity_in} style={{
                backdropFilter: scrollY > 52 ? "saturate(180%) blur(20px)" : "",
                backgroundColor: scrollY > 52 ? "rgba(29,29,31,0.72)" : "",
                borderBottom: scrollY > 52 ? "1px solid rgba(255,255,255,0.1)" : "",
            }}>
                <LocalList>
                    <Item>
                        <span ref={title}>스토리 마케팅 회사, 화르르</span>
                    </Item>
                    <Contact>
                        연락하기
                    </Contact>
                </LocalList>
            </LocalContainer>

            <Container>
                <ScrollSection>
                    <SceneA style={{ height: `${sceneHeight}px`, }}>
                        <MainImg src="/img/01_Hi.png" alt="charcter"></MainImg>
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
                            <H1>기계적, 반복적</H1>
                            <H1>광고가 아닌</H1>
                        </Messages>

                        <Messages style={{
                            display: currentScene === 1 ? "flex" : "none",
                            opacity: `${value.action5}`,
                            transform: `translate3d(0,${value.action6}%,0)`
                        }}>
                            <H1>단, 하나뿐인</H1>
                            <H1>당신의 이야기.</H1>
                        </Messages>

                    </SceneA>
                    <SceneB style={{ height: `${sceneHeight}px` }}>
                        <Messages style={{
                            display: currentScene === 2 ? "flex" : "none",
                            opacity: `${value.action8}`,
                            transform: `scale(${value.action7}, ${value.action7}) translateY(-4%)`,
                        }}>
                            <H1>SEX</H1>
                            <H1>On the Beach</H1>
                        </Messages>
                    </SceneB>
                    <SceneC style={{ height: `${sceneHeight}px` }}>

                    </SceneC>
                    <SceneD style={{ height: `${sceneHeight}px` }}>
                    </SceneD>
                </ScrollSection >
            </Container >
        </>
    );
};

export default Home;