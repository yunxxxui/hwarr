import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 이미지 로드
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
        flex-direction: column;
        background-color: black;
        width: 100%;
        position: fixed;
        top:0;
        right:0;
        height: 100vh;
        z-index: 99;
        padding-top: 52px;
        transition: all 0.2s ease-in-out;
        opacity: ${(props) => props.isOpen ? "1" : "0"};
        display: ${(props) => props.isOpen ? "flex" : "hidden"};
        right: ${(props) => props.isOpen ? "0" : "-100vh"};
    }
`;


const Logo = styled.div`
    flex: none;
    z-index: 100;
    @media only screen and (max-width: 700px){
        display: block;
        position: ${(props) => props.isOpen && "fixed"};
        left: ${(props) => props.isOpen && "16px"};
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
        -webkit-trasition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        transform: ${(props) => props.isOpen ? "translate3d(0, 0, 0)" : "translate3d(5%, 0, 0)"};
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
        position:${(props) => props.isOpen && "fixed"};
        right: ${(props) => props.isOpen && "16px"};
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
                <Logo isOpen={isOpen}>
                    <NavLink to="/" onClick={closeNav}><img src={ LogoImg } alt="Logo"></img></NavLink>
                </Logo>
                <List isOpen={isOpen} style={{ transitionDelay: isOpen && "0.1s", WebkitTransitionDelay: isOpen &&"0.1s"}}>
                    <Item isOpen={isOpen}>
                        <NavLink to="/About">회사소개</NavLink>
                    </Item>
                    <Item isOpen={isOpen} style={{transitionDelay: isOpen && "0.2s", WebkitTransitionDelay: isOpen &&"0.2s"}}>
                        <NavLink to="/Projects">요금안내</NavLink>
                    </Item>
                    <Item isOpen={isOpen} style={{transitionDelay: isOpen && "0.3s", WebkitTransitionDelay: isOpen && "0.3s"}}>
                        <NavLink to="/FAQ">연락문의</NavLink>
                    </Item>
                </List>
                <Menu onClick={toggleNav} isOpen={isOpen} style={{
                    
                }}><img src={MenuImg} alt="menu"></img></Menu>
            </Nav>
        </NavContainer >
    )
};

export default GlobalNav;