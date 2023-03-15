export interface Tracks {
  tracks: {
    track: Track[];
  };
}

export interface Track {
  artist: Artist;
  name: string;
  image: Image[];
  url: string;
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
}

export interface Image {
  "#text": string;
  size: string;
}
