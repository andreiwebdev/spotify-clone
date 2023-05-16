import { Link } from "react-router-dom";

const DetailsHeader = ({ songData, artistData }) => {
  return (
    <div className="relative w-full flex flex-col mb-10">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"></div>

      <div className="absolute inset-0 flex items-center">
        <img
          src={songData ? songData?.artist.picture : artistData?.picture}
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {songData ? songData?.title : artistData?.name}
          </p>
          <Link
            to={`/artists/${songData?.artist.id}`}
            className="text-base text-gray-400 mt-2"
          >
            {songData?.artist.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
