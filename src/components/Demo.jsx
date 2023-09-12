import { useState } from "react";
import { linkIcon, loader, tick, copy } from "../assets";

import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../services/article"; // Replace with your action file

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summaary: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventdefault();
    dispatch(fetchArticle(article.url));
  };
  return (
    <section className="w-full flex flex-col mt-16 max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={() => {
            handleSubmit;
          }}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter your URL here..."
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            className="url_input peer"
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            onClick={handleSubmit}
          >
            <p>↵</p>
          </button>
        </form>

        {/* url history */}
      </div>

      {/* results */}
      <div>
        <p>{}</p>
      </div>
    </section>
  );
};

export default Demo;
