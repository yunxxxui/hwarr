import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Children = styled.div`
    display: flex;
    flex-direction: column;
`;



const Scene = ({ sceneHeight, currentScene, children }) => {
    return (
        <Container style={{height: `${sceneHeight*100}vh`,}}>
            <Children style={{display: currentScene ? "flex" : "none"}}>{children}</Children>
        </Container>
    )
};

export default Scene;