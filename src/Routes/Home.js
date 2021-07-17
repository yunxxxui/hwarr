import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import LocaNav from "../Components/LocalNav"


import HiImg from "img/01_Hi.png"

const Container = styled.div`
max-width: 832px;
margin:0 auto;
padding: 0 16px;
height: 500vh;
`;

const Home = () => {

    return(
        <>
            <LocaNav scrollY="55"/>
            <Container>

            </Container>
        </>
    )

}

export default Home;