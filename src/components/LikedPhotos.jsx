import React from "react";
import PhotoList from "./PhotoList";
import { useSelector } from "react-redux";

function LikedPhotos() {
  const { likedPhotos } = useSelector((store) => store.img);

  return (
    <div>
      {likedPhotos.length ? (
        <PhotoList photos={likedPhotos} removeLiked={likedPhotos} />
      ) : (
        <h1 className=" text-5xl">You don't have any liked photos!</h1>
      )}
    </div>
  );
}

export default LikedPhotos;
