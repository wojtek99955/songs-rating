import styled from "styled-components";
import { BsPlayCircle } from "react-icons/bs";

export const Section = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 3rem;

  h2 {
    margin-bottom: 3rem;
    text-align: center;
    color: #2e3840;
  }
`;

export const SongsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const Song = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-height: 100%;
  padding: 1rem;
  border-radius: 12px;

  h3 {
    margin-bottom: 0.5rem;
  }
  img {
    width: 8rem;
    margin-bottom: 1rem;
    border-radius: 12px;
  }
  a {
    text-decoration: none;
    margin-top: 0.5rem;
  }
  div {
    color: #65647c;
  }
`;

export const PlayIcon = styled(BsPlayCircle)`
  color: #61cd6d;
  font-size: 3rem;
  &:hover {
    color: #39b547;
  }
`;
