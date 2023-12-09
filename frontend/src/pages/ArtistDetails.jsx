import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, SongCard } from "../components";

import {
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} from "../redux/services/deezer";

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ id });

  const {
    data: artistSongsData,
    isFetching: isFetchingSongs,
    error: songsError,
  } = useGetSongsBySearchQuery({
    searchTerm: artistData?.name || "",
  });

  const songs = artistSongsData?.data?.slice(0, 10);

  if (isFetchingArtistDetails || isFetchingSongs)
    return <Loader title="Searching song details" />;

  if (error || songsError) return <Error />;

  return (
    <div className="flex flex-col mt-10">
      <DetailsHeader artistData={artistData} />

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={artistSongsData}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistDetails;
