import { Link, useParams, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { FaThumbsUp, FaDownload, FaImage, FaHeart } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";

function Preview() {
  const { id } = useParams();
  const [url, setUrl] = useState(
    `https://api.unsplash.com/photos/${id}?client_id=Y10kzoUx9LEV6l_qbi3DtAiSBb34HPZHPcZnpXtLitQ`
  );
  const { data: image, isPending, error, postNewDate } = useFetch(url);
  return (
    <>
      {image && (
        <section className=" flex items-center gap-4">
          <img
            className=" w-3/4 h-[520px] object-cover"
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className=" p-4 bg-slate-200 rounded-lg w-full h-[520px] flex flex-col justify-center gap-5">
            <div className=" flex  flex-col items-center gap-2 bg-white rounded-md p-4">
              <Link to={image.user.links.html}>
                <img
                  className=" rounded-[50%] w-full"
                  src={image.user.profile_image.large}
                  alt=""
                />
              </Link>
              <div className=" grid gap-2">
                <h1 className=" font-bold"> {image.user.name}</h1>
                <p>{image.user.bio}</p>
                <p>
                  <span className=" font-bold">Location:</span>{" "}
                  {image.user.location}
                </p>
                <div className="flex items-center justify-between ">
                  <span className="flex items-center gap-2">
                    <FaImage />
                    <p>
                      Total photos:{" "}
                      <span className=" font-bold">
                        {image.user.total_photos}
                      </span>
                    </p>
                  </span>
                  <span className="flex items-center gap-2">
                    <MdPhotoLibrary />
                    <p>
                      Album:
                      <span className=" font-bold">
                        {image.user.total_collections}
                      </span>
                    </p>
                  </span>
                  <span className="flex items-center gap-2">
                    <FaHeart />
                    <p>
                      Total likes:{" "}
                      <span className=" font-bold">
                        {image.user.total_likes}
                      </span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-4 text-3xl">
              <span className="flex gap-2 items-center">
                <FaThumbsUp />
                <p>{image.likes}</p>
              </span>

              <Link to={image.links.download}>
                <FaDownload />
              </Link>
            </div>
            <p>
              <span className=" font-bold"> Description:</span>{" "}
              {image.description}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Preview;
