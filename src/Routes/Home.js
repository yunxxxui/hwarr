import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";


//CSS
const Sticky = css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding-top: 56px;
`;

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
    padding-top: 30vh;
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
    font-family: Gmarket Sans;
    font-size: 80px;
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
    line-height: 32px;
    text-align: center;

    color: #FE3078;
    padding-bottom: 32px;

    @media only screen and (max-width: 700px) {
        font-size: 16px;
        padding-bottom: 16px;
    }
`;

// const H3 = styled.h3`
//     font-size: 16px;
//     font-weight: bold;
//     text-align: center;

//     color: #FE3078;
//     margin-bottom: 16px;
// `;

// const Text = styled.p`
//     font-size: 24px;
//     font-weight: bold;
//     line-height: 36px;
//     text-align: center;
// `;

//sceneInfo
const sceneInfo = [{
    //all정보
    heightNum: 8,

}, {
    //A0
    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
}, {
    //B1

}]

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

//HTML
const Home = () => {
    //Clikc이벤트
    const title = useClick(scrollTop);
    //Scroll이벤트
    //scrollY는 현재 스클롤 위치
    //currentScene는 현재씬
    //totlaRatioY는 전체씬의 비율(=scrollRatio)
    const { scrollY, totlaRatioY, sceneHeight, currentScene } = useEvent();
    const currentRatioY = (totlaRatioY - (currentScene - 1));
    console.log({ currentRatioY, currentScene })

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
                        <Messages style={{
                            display: currentScene === 1 ? "flex" : "none",
                            opacity: `${currentRatioY}`,
                        }}>
                            <H2>캐릭터로 시작하는 마케팅</H2>
                            <H1>여러분 이야기의</H1>
                            <H1>불을 지펴요</H1>
                        </Messages>
                        {/* <Messages>
                            <H1>기계적, 반복적</H1>
                            <H1>광고가 아닌</H1>
                        </Messages>

                        <Messages>
                            <H1>단, 하나뿐인</H1>
                            <H1>당신의 이야기.</H1>
                        </Messages>
                        <Messages>
                            <H3>여러분의 이미지는 무엇인가요?</H3>
                            <Text>다른 곳과 달리</Text>
                            <Text>여러분의 이야기를</Text>
                            <Text>당신의 이미지로 만듭니다.</Text>
                        </Messages> */}
                    </SceneA>
                    <SceneB style={{ height: `${sceneHeight}px` }}>
                        <Messages style={{
                            display: currentScene === 2 ? "flex" : "none",
                            opacity: `${currentRatioY}`
                        }}>
                            <H1>sex</H1>
                        </Messages>
                    </SceneB>
                    <SceneC style={{ height: `${sceneHeight}px` }}>
                        <Messages style={{
                            display: currentScene === 3 ? "flex" : "none",
                            opacity: `${currentRatioY}`
                        }}>
                            <H1>fuck</H1>
                        </Messages>
                    </SceneC>
                    <SceneD style={{ height: `${sceneHeight}px` }}>
                    </SceneD>
                </ScrollSection >
            </Container >
        </>
    );
};

export default Home;