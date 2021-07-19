import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

//CSS
const LocalContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    margin-top: 48px;
    top:0px;
    z-index: 1;
    transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;

    ${(props) => props.isOn &&
        css`
            position: fixed;
            margin-top: 0;
            width: 100%;
            --webkit-backdrop-filter: saturate(180%) blur(20px);
            backdrop-filter: saturate(180%) blur(20px);
            background-color: rgba(255,255,255,0.3);
            border-bottom: 1px solid rgba(255,255,255,0.1);
        `
    } 
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


//클릭 이벤트
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


//HTML
const LocalNav = ({scrollY}) => {
    const title = useClick(scrollTop);
    const [isOn,setIsOn] = useState();

    useEffect(()=>{
        scrollY > 160 ? setIsOn(true) : setIsOn(false);
    },[scrollY])

    return(
        <>
            <LocalContainer isOn={isOn}>
                <LocalList>
                    <Item>
                        <span ref={title}>스토리 마케팅 회사, 화르르</span>
                    </Item>
                    <Contact>
                        연락하기
                    </Contact>
                </LocalList>
            </LocalContainer>
        </>
    )

}

export default LocalNav;