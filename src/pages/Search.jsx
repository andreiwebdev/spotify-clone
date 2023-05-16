import { useParams } from "react-router-dom";
import { useGetSongsBySearchQuery } from "../redux/services/deezer";
import { Error, Loader, SongCard } from "../components";
import { useSelector } from "react-redux";

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery({ searchTerm });
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  console.log(data.data);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.data?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
