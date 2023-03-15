import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useDeleteSongMutation } from "../../api/songsApi/songsApiSlice";
import {
  MoreIcon,
  DeleteIcon,
  EditIcon,
  Tools,
  ToolsDropdown,
} from "./EditSongStyle";
import UpdateSongModal from "../UpdateSongModal/UpdateSongModal";
import { Song } from "../../types/Song";

interface Props {
  id: string;
  prevSongData: Song;
}
const EditSong = ({ id, prevSongData }: Props) => {
  const [showTools, setShowTools] = useState(false);

  const handleToggleTools = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setShowTools((prev) => !prev);
    e.stopPropagation();
  };

  const [deleteSong, { isLoading }] = useDeleteSongMutation();

  const handleDeleteSong = () => {
    deleteSong(id);
    setShowTools(false);
  };

  const toolsDropdownRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = ({ target }: MouseEvent) => {
      if (showTools && !toolsDropdownRef.current?.contains(target as Node)) {
        setShowTools(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [showTools]);

  const [isEditFormShown, setIsEditFormShown] = useState(false);

  const handleOpenEditSongForm = () => {
    setIsEditFormShown(true);
    setShowTools(false);
  };
  return (
    <Tools>
      <MoreIcon onClick={handleToggleTools} />
      <AnimatePresence>
        {showTools ? (
          <ToolsDropdown
            ref={toolsDropdownRef}
            initial={{ top: 5, opacity: 0 }}
            animate={{ top: 25, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            exit={{ top: 5, opacity: 0 }}
          >
            <div onClick={handleDeleteSong}>
              <DeleteIcon /> delete
            </div>
            <div onClick={handleOpenEditSongForm}>
              <EditIcon /> update
            </div>
          </ToolsDropdown>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {isEditFormShown ? (
          <UpdateSongModal
            setIsEditFormShown={setIsEditFormShown}
            id={id}
            prevSongData={prevSongData}
          />
        ) : null}
      </AnimatePresence>
    </Tools>
  );
};

export default EditSong;
