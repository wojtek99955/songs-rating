import {
  FormContainer,
  CloseIcon,
  FormWrapper,
  Row,
  InputWrapper,
  StarIcon,
  Rating,
  ModalBackground,
} from "./UpdateSongStyle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRef, useState } from "react";
import { FormBtn } from "../../assets/FormBtn";
import ReactDOM from "react-dom";
import { useUpdateSongMutation } from "../../api/songsApi/songsApiSlice";
import BtnLoader from "../../assets/BtnLoader";
import { Song } from "../../types/Song";
import * as yup from "yup";
import ValidationError from "../../assets/ValidationError";

interface Props {
  setIsEditFormShown: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  prevSongData: Song;
}

const UpdateSongModal = ({ setIsEditFormShown, id, prevSongData }: Props) => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const handleHideForm = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setIsEditFormShown(false);
    e.stopPropagation();
  };

  const { title, artist, genre, year, rating: prevRating } = prevSongData;

  const initialValues = {
    title,
    artist,
    genre,
    year,
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Required"),
    artist: yup.string().required("Required"),
    genre: yup.string().required("Required"),
    year: yup.number().typeError("Only numbers").required("Required"),
  });

  const [rating, setRating] = useState(prevRating);
  const [hoverStar, setHoverStar] = useState(0);

  const [updateSong, { isLoading, isError }] = useUpdateSongMutation();

  const clickOutsideToClose = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === backgroundRef.current) {
      setIsEditFormShown(false);
    }
  };

  return ReactDOM.createPortal(
    <ModalBackground
      ref={backgroundRef}
      onClick={clickOutsideToClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FormContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CloseIcon onClick={handleHideForm} />
        <FormWrapper>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (val) => {
              await updateSong({
                title: val.title,
                artist: val.artist,
                genre: val.genre,
                year: +val.year,
                rating: rating,
                id: id,
              });
              if (!isLoading) setIsEditFormShown(false);
            }}
          >
            <Form>
              <Row>
                <InputWrapper>
                  <label htmlFor="title">title</label>
                  <Field name="title" placeholder="title" id="title" />
                  <ErrorMessage name="title" component={ValidationError} />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="artist">artist</label>
                  <Field name="artist" placeholder="artist" id="artist" />
                  <ErrorMessage name="artist" component={ValidationError} />
                </InputWrapper>
              </Row>
              <Row>
                <InputWrapper>
                  <label htmlFor="genre">genre</label>
                  <Field name="genre" placeholder="genre" id="genre" />
                  <ErrorMessage name="genre" component={ValidationError} />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="year">year</label>
                  <Field name="year" placeholder="year" id="year" />
                  <ErrorMessage name="year" component={ValidationError} />
                </InputWrapper>
              </Row>
              <Rating>
                <h3>rating</h3>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <StarIcon
                      key={index}
                      onClick={() => {
                        setRating(index);
                      }}
                      rating={index <= (rating || hoverStar) ? "on" : "off"}
                      onMouseEnter={() => {
                        setHoverStar(index);
                      }}
                      onMouseLeave={() => setHoverStar(rating)}
                    />
                  );
                })}
              </Rating>
              <FormBtn type="submit">
                {isLoading ? <BtnLoader /> : "Save changes"}
              </FormBtn>
            </Form>
          </Formik>
          {isError ? <p>An error has occurred</p> : null}
        </FormWrapper>
      </FormContainer>
    </ModalBackground>,
    document.getElementById("edit-song-modal")!
  );
};

export default UpdateSongModal;
