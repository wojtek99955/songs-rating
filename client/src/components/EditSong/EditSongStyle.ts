import styled from "styled-components";
import { MdMoreVert } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { motion } from "framer-motion";

export const MoreIcon = styled(MdMoreVert)`
  font-size: 1.6rem;
  cursor: pointer;
  color: #65647c;
  &:hover {
    background-color: #e9e9ed;
  }
`;

export const DeleteIcon = styled(AiFillDelete)`
  font-size: 1.2rem;
  color: #f16767;
`;
export const EditIcon = styled(AiFillEdit)`
  font-size: 1.2rem;
  color: #65647c;
`;
export const Tools = styled.div`
  position: relative;
`;
export const ToolsDropdown = styled(motion.div)`
  position: absolute;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  right: 0;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: #65647c;
  }
`;
