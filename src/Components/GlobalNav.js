import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "img/Logo.svg";
import MenuImg from "img/Menu.svg";

const NavContainer = styled.header`
    top: 0;
    position: absolute;
    width: 100%;
    font-weight: bold;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 832px;
    height: 48px;
    padding: 0 16px;

    @media only screen and (max-width: 700px){
        justify-content: space-between;
        padding: 0;
        padding: 0 16px;
    }
`;

const List = styled.ul`
    display: flex;
    margin-left: auto;
    z-index: 1000;

    @media only screen and (max-width: 700px){
        display: none;
    }
`;

const MobileList = styled.ul`
    flex-direction: column;
    background-color: black;
    width: 100%;
    position: fixed;
    top:0;
    right:0;
    height: 100vh;
    z-index: 99;
    padding-top: 52px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
`;


const Logo = styled.div`
    flex: none;
    z-index: 100;
    @media only screen and (max-width: 700px){
        display: block;
    }
`;

const Item = styled.li`
    margin-left: 32px;
    color: rgba(255, 255, 255, 0.7);
    transform: translate3d(5%, 0, 0);
    transition: all 0.3s ease-in-out;
    &:hover {
        color: white;
    }
    @media only screen and (max-width: 700px){
        margin: 0 16px;
        padding: 16px 0;
        border-bottom: 1px solid rgba(255,255,255,0.3);
    }
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
`;


const Menu = styled.button`
    display: none;
    background: none;
    border:none;

    @media only screen and (max-width: 700px){
        display: block;
        z-index: 100;
    }
`;



const GlobalNav = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    const closeNav = () => {
        setNav(false)
        window.scrollTo(0, 0)
    }

    return (
        <NavContainer>
            <Nav>
                <Logo style={{
                    position: isOpen ? "fixed" : "",
                    left: isOpen ? "16px" : "",
                }}>
                    <NavLink to="/" onClick={closeNav}><img src={ LogoImg } alt="Logo"></img></NavLink>
                </Logo>
                <List>
                    <Item>
                        <NavLink to="/About">회사 소개</NavLink>
                    </Item>
                    <Item>
                        <NavLink to="/Projects">프로젝트</NavLink>
                    </Item>
                    <Item>
                        <NavLink to="/FAQ">자주 묻는 질문</NavLink>
                    </Item>
                </List>
                <MobileList style={{
                    display: isOpen ? "flex" : "hidden",
                    opacity: isOpen ? "1" : "0",
                    right: isOpen ? "0" : "-100vh"
                }}>
                    <Item style={{
                        transform: isOpen ? "translate3d(0, 0, 0)" : "",
                        transitionDelay: "0.1s"
                    }}>
                        <NavLink to="/About" onClick={closeNav}>회사 소개</NavLink>
                    </Item>
                    <Item style={{
                        transform: isOpen ? "translate3d(0, 0, 0)" : "",
                        transitionDelay: "0.2s"
                    }}>
                        <NavLink to="/Projects" onClick={closeNav}>프로젝트</NavLink>
                    </Item>
                    <Item style={{
                        transform: isOpen ? "translate3d(0, 0, 0)" : "",
                        transitionDelay: "0.3s"
                    }}>
                        <NavLink to="/FAQ" onClick={closeNav}>자주 묻는 질문</NavLink>
                    </Item>
                </MobileList>
                <Menu onClick={toggleNav} style={{
                    position: isOpen ? "fixed" : "",
                    right: isOpen ? "16px" : ""
                }}><img src={MenuImg} alt="menu"></img></Menu>
            </Nav>
        </NavContainer >
    )
};

export default GlobalNav;