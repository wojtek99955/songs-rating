import { useGetTopSongsQuery } from "../../api/topSongsApi/topSongsApi";
import SongsSpinner from "../../assets/SongsSpinner";
import { Track } from "../../types/TopSong";
import { Section, SongsContainer, Song, PlayIcon } from "./TopSongsStyle";

const TopSongs = () => {
  const { data, isLoading, isError, isSuccess } = useGetTopSongsQuery(null);

  const songsList = data?.tracks?.track;

  let content;

  console.log(data?.tracks.track);

  if (isSuccess) {
    content = (
      <SongsContainer>
        {songsList?.map((song: Track) => {
          return (
            <Song>
              <img src={song.image[1]["#text"]} alt="" />
              <h3>{song.name}</h3>
              <div>{song.artist.name}</div>
              <a href={song.url}>
                <PlayIcon />
              </a>
            </Song>
          );
        })}
      </SongsContainer>
    );
  }

  if (isError) content = <p>An error has occurred</p>;

  if (isLoading) content = <SongsSpinner />;

  return (
    <Section>
      <h2>Global Top Three</h2>
      {content}
    </Section>
  );
};

export default TopSongs;
