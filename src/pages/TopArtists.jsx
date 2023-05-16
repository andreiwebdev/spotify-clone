import { Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/deezer";
import { Link } from "react-router-dom";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  console.log(data.artists.data);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Top Artists</h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.artists.data?.map((artist, i) => (
          <div
            key={artist?.id}
            className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2"
          >
            <h3 className="font-bold text-base text-white mr-3">
              {artist?.position}.
            </h3>
            <div className="flex-1 flex flex-row justify-between items-center">
              <img
                className="w-14 h-14 rounded-lg"
                src={artist?.picture_medium}
                alt="cover art"
              />
              <div className="flex-1 flex flex-col justify-center mx-3">
                <Link to={`/artists/${artist?.id}`}>
                  <p className="text-md font-bold text-white">{artist?.name}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
