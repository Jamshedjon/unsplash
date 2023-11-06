import { Link } from "react-router-dom";
import { addLikedPhotos } from "../redux/features/imgSlice";
import { useDispatch } from "react-redux";
import { removeLikedPhoto } from "../redux/features/imgSlice";

function PhotoList({ photos, removeLiked }) {
  const dispatch = useDispatch();
  return (
    <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {photos &&
        photos.map((photo) => {
          const { alt_description, urls, id } = photo;
          return (
            <li key={id}>
              <Link
                to={`/photo/${id}`}
                className=" shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="">
                  <img
                    className=" w-[450px] h-[320px] object-cover"
                    src={urls.regular}
                    alt={alt_description}
                  />
                </div>
              </Link>
              {removeLiked ? (
                <button
                  onClick={() => dispatch(removeLikedPhoto(photo))}
                  className="btn btn-secondary mt-3 font-bold "
                >
                  Remove Liked
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addLikedPhotos(photo))}
                  className="btn btn-secondary mt-3 font-bold mr-5"
                >
                  Liked
                </button>
              )}
            </li>
          );
        })}
    </ul>
  );
}

export default PhotoList;
