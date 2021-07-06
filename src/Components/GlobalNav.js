import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.header`
    top: 0;
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

    @media only screen and (max-width: 700px){
        display: none;
    }
`;

const MobileList = styled.ul`
    display: none;
    flex-direction: column;
    background-color: black;
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    height: 100vh;
    z-index: 99;
    padding-top: 52px;
`;


const Logo = styled.div`
    flex: none;
    @media only screen and (max-width: 700px){
        display: block;
        z-index: 100;
    }
`;

const Item = styled.li`
    margin-left: 32px;
    color: rgba(255, 255, 255, 0.7);
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
    }

    return (
        <NavContainer>
            <Nav>
                <Logo>
                    <NavLink to="/" onClick={closeNav}><img src="img/Logo.svg" alt="Logo"></img></NavLink>
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
                    display: isOpen ? "flex" : "none",
                    opacity: isOpen ? "1" : "0"
                }}>
                    <Item>
                        <NavLink to="/About" onClick={closeNav}>회사 소개</NavLink>
                    </Item>
                    <Item>
                        <NavLink to="/Projects" onClick={closeNav}>프로젝트</NavLink>
                    </Item>
                    <Item>
                        <NavLink to="/FAQ" onClick={closeNav}>자주 묻는 질문</NavLink>
                    </Item>
                </MobileList>
                <Menu onClick={toggleNav} style={{
                    position: isOpen ? "fixed" : "",
                    right: isOpen ? "16px" : ""
                }}><img src="/img/Menu.svg" alt="menu"></img></Menu>
            </Nav>
        </NavContainer>
    )
};

export default GlobalNav;