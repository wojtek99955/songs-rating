import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 16px;
  background: radial-gradient(
      circle 8px at 8px center,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 8px at 8px center, #fff 100%, transparent 0);
  background-size: 16px 16px;
  background-repeat: no-repeat;
  position: relative;
  animation: ballX 1s linear infinite;

  &::before {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    inset: 0;
    margin: auto;
    animation: moveX 1s cubic-bezier(0.5, 300, 0.5, -300) infinite;
  }
  @keyframes ballX {
    0%,
    25%,
    50%,
    75%,
    100% {
      background-position: 25% 0, 75% 0;
    }
    40% {
      background-position: 25% 0, 85% 0;
    }
    90% {
      background-position: 15% 0, 75% 0;
    }
  }
  @keyframes moveX {
    100% {
      transform: translate(0.15px);
    }
  }
`;

const BtnLoader = () => {
  return <Container></Container>;
};

export default BtnLoader;
