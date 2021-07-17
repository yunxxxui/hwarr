import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

//CSS
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





const LocalNav = (scrollY) => {
    //Clikc이벤트
    const title = useClick(scrollTop);
    //Click Event

    return(
        <>
            <LocalContainer style={{
                WebkitBackdropFilter: scrollY > 52 && "saturate(180%) blur(20px)",
                backdropFilter: scrollY > 52 && "saturate(180%) blur(20px)",
                backgroundColor: scrollY > 52 && "rgba(255,255,255,0.3)",
                borderBottom: scrollY > 52 && "1px solid rgba(255,255,255,0.1)",
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
        </>
    )

}

export default LocalNav;