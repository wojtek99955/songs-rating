import { Formik, Form, Field, ErrorMessage } from "formik";
import { AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Container,
  Rating,
  AddIcon,
  HeadingWrapper,
  FormContainer,
  Row,
  InputWrapper,
  CloseIcon,
  StarIcon,
  FormWrapper,
} from "./AddYourSongStyle";
import { useAddSongMutation } from "../../../api/songsApi/songsApiSlice";
import BtnLoader from "../../../assets/BtnLoader";
import { FormBtn } from "../../../assets/FormBtn";
import * as yup from "yup";
import ValidationError from "../../../assets/ValidationError";

const AddYourSong = () => {
  const initialValues = {
    title: "",
    artist: "",
    genre: "",
    year: "",
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Required"),
    artist: yup.string().required("Required"),
    genre: yup.string().required("Required"),
    year: yup.number().typeError("Only numbers").required("Required"),
  });

  const [isFormShown, setIsFormShown] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);

  const handleShowForm = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setIsFormShown((prev) => !prev);
    e.stopPropagation();
  };

  const handleHideForm = () => {
    setIsFormShown(false);
  };

  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfClickedOutside = ({ target }: MouseEvent) => {
      if (isFormShown && !formRef.current?.contains(target as Node)) {
        setIsFormShown(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isFormShown]);

  useEffect(() => {
    if (!isFormShown) {
      setRating(0);
      setHoverStar(0);
    }
  }, [isFormShown]);

  const [addSong, { isLoading, isError }] = useAddSongMutation();

  return (
    <Container>
      <HeadingWrapper>
        <h2>Add your song</h2>
        <AddIcon onClick={handleShowForm} />
      </HeadingWrapper>
      <AnimatePresence>
        {isFormShown ? (
          <FormContainer
            ref={formRef}
            initial={{ opacity: 0, top: 20 }}
            animate={{ opacity: 1, top: 80 }}
            exit={{ opacity: 0, top: 20 }}
          >
            <CloseIcon onClick={handleHideForm} />
            <FormWrapper>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (val) => {
                  await addSong({
                    title: val.title,
                    artist: val.artist,
                    genre: val.genre,
                    year: +val.year,
                    rating: rating,
                  });
                  if (!isLoading) {
                    setIsFormShown(false);
                  }
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
                    {isLoading ? <BtnLoader /> : "Add song"}
                  </FormBtn>
                </Form>
              </Formik>
              {isError ? <p>An error has occurred</p> : null}
            </FormWrapper>
          </FormContainer>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default AddYourSong;
