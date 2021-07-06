import { useState, useEffect, useRef } from "react";
import styled, { css, Keyframes } from "styled-components";


//CSS
const Sticky = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const Container = styled.div`
    max-width: 832px;
    margin:0 auto;
    padding: 0 16px;
`;

const LocalContainer = styled.div`
    position: -webkit-sticky;
    position: sticky;
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

    margin-right: 32px;
    min-width: 240px;
    &:active {
        color: white;
    }
`;

const Contact = styled.a`
    font-size: 12px;
    background: #FE3078;

    margin-left: auto;
    padding: 4px 8px 4px 8px;
    border-radius: 24px;

    min-width: 64px;

    &:hover {
        background: white;
        color: #FE3078;
    }
`;

const ScrollSection = styled.div`
`;

const SceneA = styled.section`
    height: 500vh;
    border: 2px solid red;
`;

const SceneB = styled.section`
    height: 500vh;
    border: 2px solid red;
`;

const SceneC = styled.section`
    height: 500vh;
    border: 2px solid red;
`;

const MainImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    padding-top: 250px;
`;

const Messages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20vh;
    ${Sticky};
    opacity: 0;
`;

const H1 = styled.h1`
    font-family: Gmarket Sans;
    font-size: 80px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;

    @media only screen and(max-width: 700px) {
        font-size: 40px;
    }
`;

const H2 = styled.h2`
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
    text-align: center;

    color: #FE3078;
    margin-bottom: 32px;

    @media only screen and(max-width: 700px) {
        font-size: 16px;
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

//Scroll이벤트
const useScroll = () => {
    const [state, setState] = useState({ y: 0 });
    const onScroll = () => {
        setState({ y: parseInt(window.scrollY / 10) });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return state;
};



//HTML
const Home = () => {
    //Clikc시 ScrollTop
    const scrollTop = () => window.scrollTo(0, 0)
    const title = useClick(scrollTop);
    const { y } = useScroll();
    console.log(y)

    return (
        <>
            <LocalContainer style={{
                backdropFilter: y > 52 ? "saturate(180%) blur(20px)" : "",
                backgroundColor: y > 52 ? "rgba(29,29,31,0.72)" : "",
                borderBottom: y > 52 ? "1px solid rgba(255,255,255,0.1)" : "",
            }}>
                <LocalList>
                    <Item>
                        <span ref={title}>스토리 마케팅 전문 회사, 화르르</span>
                    </Item>
                    <Contact>
                        연락하기
                    </Contact>
                </LocalList>
            </LocalContainer>

            <Container>
                <ScrollSection>
                    <SceneA>
                        <MainImg src="/img/01_Hi.png" alt="charcter"></MainImg>
                        <Messages>
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
                    <SceneB id="chapterB">
                    </SceneB>
                    <SceneC id="chapterC">
                    </SceneC>
                </ScrollSection >
            </Container >
        </>
    );
};

export default Home;