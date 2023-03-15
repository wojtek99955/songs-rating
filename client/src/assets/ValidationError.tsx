import styled from "styled-components";

const Container = styled.span`
  font-size: 0.9rem;
  color: red;
  display: block;
  width: 100%;
  padding-top: 0.5rem;
`;

interface Props {
  children?: React.ReactNode;
}

const ValidationError = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ValidationError;
