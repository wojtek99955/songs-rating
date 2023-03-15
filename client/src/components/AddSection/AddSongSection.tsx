import AddYourSong from "./AddYourSong/AddYourSong";
import styled from "styled-components";
import img from "../../assets/images/main.jpg";

const Wrapper = styled.div`
  width: 600px;
  margin: Auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 3rem;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.4);
`;

const AddSongSection = () => {
  return (
    <Section>
      <Wrapper>
        <AddYourSong />
      </Wrapper>
    </Section>
  );
};

export default AddSongSection;
