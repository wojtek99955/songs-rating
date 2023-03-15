import styled from "styled-components";

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  display: block;
  position: relative;
  margin: auto;

  &::after,
  ::before {
    content: "";
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #61cd6d;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: animloader 2s ease-in-out infinite;
  }
  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0%,
    100% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
const SongsSpinner = () => {
  return <Spinner></Spinner>;
};

export default SongsSpinner;
