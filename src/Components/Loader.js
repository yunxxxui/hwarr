
import styled, {keyframes} from "styled-components";

const blinkAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 24px;
  animation: ${blinkAnimation} 2s ease-in-out 0s infinite  alternate;
`;

const Loader = () => (
    <Container>
      <span role="img" aria-label="loading">
        ⏰
      </span>
    </Container>
  );

export default Loader
