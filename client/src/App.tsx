import AddSongSection from "./components/AddSection/AddSongSection";
import Header from "./components/Header";
import styled from "styled-components";
import SongsList from "./components/SongsList/SongsList";
import TopSongs from "./components/TopSongs/TopSongs";

const AppContainer = styled.div`
  min-height: 100vh; ;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AddSongSection />
      <TopSongs />
      <SongsList />
    </AppContainer>
  );
}

export default App;
