import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";

import { useGetSongDetailsQuery } from "../redux/services/deezer";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails) return <Loader title="Searching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col mt-10">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Info: </h2>

        <div className="mt-5">
          <p className="text-md text-white">
            <span className="text-base text-gray-400 mt-2">Duration:</span>{" "}
            {songData?.duration}s
          </p>
          <p className="text-md text-white">
            <span className="text-base text-gray-400 mt-2">Release Date:</span>{" "}
            {songData?.release_date}
          </p>
          <p className="text-md text-white">
            <span className="text-base text-gray-400 mt-2">Album:</span>{" "}
            {songData?.album?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
