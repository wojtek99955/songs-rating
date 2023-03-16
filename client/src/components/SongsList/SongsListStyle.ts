import styled from "styled-components";
import { SiAudioboom } from "react-icons/si";

export const Container = styled.section`
  max-width: 900px;
  margin: auto;
  margin-top: 6rem;
  padding-bottom: 1rem;
  h3 {
    margin-bottom: 2rem;
    color: #2e3840;
  }
`;

export const Rating = styled.div`
  margin-left: auto;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;

export const StyledSongsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
`;

export const DetailsWrapper = styled.div`
  strong {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    display: block;
    color: #2e3840;
  }
  div {
    color: #65647c;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  small {
    display: block;
    font-size: 0.8rem;
    color: #65647c;
  }
`;

export const AudioIcon = styled(SiAudioboom)`
  color: #61cd6d;
  font-size: 2rem;
`;
export const SongDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
