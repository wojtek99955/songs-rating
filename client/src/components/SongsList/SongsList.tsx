import EditSong from "../EditSong/EditSong";
import { useGetSongsQuery } from "../../api/songsApi/songsApiSlice";
import { StarIcon } from "../AddSection/AddYourSong/AddYourSongStyle";
import {
  Container,
  Rating,
  StyledSongsList,
  SongContainer,
  DetailsWrapper,
  AudioIcon,
  SongDetails,
} from "./SongsListStyle";
import SongsSpinner from "../../assets/SongsSpinner";

const SongsList = () => {
  const { data, isLoading, isSuccess, isError } = useGetSongsQuery();

  let content;

  if (isLoading) content = <SongsSpinner />;

  if (isSuccess)
    content = data?.map((song) => {
      return (
        <SongContainer key={song._id}>
          <SongDetails>
            <AudioIcon />
            <DetailsWrapper>
              <strong>{song.title}</strong>
              <div>{song.artist}</div>
              <div>{song.genre}</div>
              <small>{song.year}</small>
            </DetailsWrapper>
          </SongDetails>
          <Rating>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <StarIcon
                  key={index}
                  rating={index <= song.rating ? "on" : "off"}
                />
              );
            })}
          </Rating>
          <EditSong id={song._id} prevSongData={song} />
        </SongContainer>
      );
    });

  if (isError) content = <h2>Sorry, an error has occurred...</h2>;

  return (
    <Container>
      <h3>Rated songs</h3>
      <StyledSongsList>{content}</StyledSongsList>
    </Container>
  );
};

export default SongsList;
