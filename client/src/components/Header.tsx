import styled from "styled-components";

const StyledHeader = styled.header`
  box-shadow: rgba(57, 76, 96, 0.15) 0px 2px 4px -1px;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid rgb(225, 228, 231);
  padding: 1rem;
  div {
    font-weight: 700;
    font-size: 1.2rem;
  }
  span {
    color: #61cd6d;
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        Songs<span>Rating</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
