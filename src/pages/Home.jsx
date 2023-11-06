import { useEffect, useState } from "react";
import PhotoList from "../components/PhotoList";
import { useFetch } from "../hooks/useFetch";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  updatePage,
  updateQuery,
  updateTotal,
} from "../redux/features/imgSlice";

function Home() {
  const { query, total, page } = useSelector((data) => data.img);
  const [pageNum, setPageNum] = useState(page);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(
    `https://api.unsplash.com/search/photos?client_id=Y10kzoUx9LEV6l_qbi3DtAiSBb34HPZHPcZnpXtLitQ&page=1&query=${query}`
  );
  const { data: photoData, isPending, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    Array.from(e.target).forEach((e) => (e.value = ""));
    dispatch(updateQuery(input));
  };
  useEffect(() => {
    setUrl(
      `https://api.unsplash.com/search/photos?client_id=Y10kzoUx9LEV6l_qbi3DtAiSBb34HPZHPcZnpXtLitQ&page=${page}&query=${query}`
    );
  }, [query, page]);
  useEffect(() => {
    if (photoData) dispatch(updateTotal(photoData.total));
    dispatch(updatePage(pageNum));
  }, [photoData, pageNum]);

  const [numerik, setNumerik] = useState([
    page,
    page + 1,
    page + 2,
    page + 3,
    page + 4,
  ]);

  const setPagenation = (val) => {
    let arr = [];
    if (val) {
      for (let i = numerik[4] + 1; i <= numerik[4] + 5; i++) {
        arr.push(i);
      }
    } else {
      for (let i = numerik[0] - 5; i <= numerik[0] - 1; i++) {
        arr.push(i);
      }
    }
    setNumerik(arr);
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className=" font-bold mb-5">Search Any Image:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mr-2"
          />
          <button>Search</button>
        </form>
      </div>
      {photoData && (
        <div className=" flex flex-col items-center gap-4">
          <PhotoList photos={photoData.results} />

          <div className="join">
            <button
              onClick={() =>
                setPageNum((prev) => {
                  if (page == numerik[0] && prev != 1) {
                    setPagenation("");
                  }
                  if (prev != 1) {
                    return +prev - 1;
                  }
                  return prev;
                })
              }
              className="join-item btn"
            >
              ⇦
            </button>
            {numerik.map((number) => {
              if (number >= 1)
                return (
                  <button
                    onClick={(e) => setPageNum(+e.target.innerText)}
                    className={
                      page !== number ? "join-item btn" : "join-item btn active"
                    }
                    key={number}
                  >
                    {number}
                  </button>
                );
            })}

            <button className="join-item btn">...</button>
            <button
              onClick={() => {
                if (pageNum == numerik[4]) {
                  setPagenation("next");
                }
                setPageNum((prev) => {
                  return +prev + 1;
                });
              }}
              className="join-item btn"
            >
              ⇨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
