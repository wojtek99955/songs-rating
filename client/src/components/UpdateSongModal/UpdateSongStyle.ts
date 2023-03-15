import styled from "styled-components";
import { RiAddCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const AddIcon = styled(RiAddCircleFill)`
  color: #61cd6d;
  font-size: 3rem;
  cursor: pointer;

  &:hover {
    color: #39b547;
  }
`;
export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
  }
`;

export const FormContainer = styled(motion.div)`
  background-color: white;
  position: absolute;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 700px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const Row = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    display: inline-block;
    font-size: 1rem;
    padding: 0.2rem;
    border: none;
    border-bottom: 2px solid grey;
    outline: none;
    transition: all 1s;
    &:focus {
      border-bottom: 2px solid #39b547;
    }
  }
`;

export const CloseIcon = styled(GrFormClose)`
  color: grey;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  padding-top: 1rem;
`;

interface StarStyle {
  rating: string;
}

export const StarIcon = styled(AiFillStar)<StarStyle>`
  transition: color 300ms ease-in;
  color: ${({ rating }) => (rating === "on" ? "#ffb851" : "#b5b8b1")};
  font-size: 2rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Rating = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ModalBackground = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
