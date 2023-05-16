import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/deezer";

const ArtistDetails = () => {
  const { id } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ id });

  console.log(artistData);

  if (isFetchingArtistDetails) return <Loader title="Searching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col mt-10">
      <DetailsHeader artistData={artistData} />
    </div>
  );
};

export default ArtistDetails;
