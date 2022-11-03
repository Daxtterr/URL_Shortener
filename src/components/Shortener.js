import { useState, useEffect } from "react";

const Shortener = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  const updateLink = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonText("Copied!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Input is empty");
    } else {
      const shortenLink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${text}`
        );
        const data = await response.json();
        console.log(data.result);
        setLinks(data.result);
        const solution = document.getElementById("answer");
        solution.style.display = "flex";
      };
      shortenLink();
    }
  };

  return (
    <div className="mt-20 w-10/12 mx-auto text-center lg:text-left">
      <div className=" bg-violet-900 py-8 rounded-md mt-10  lg:pl-16 ">
        <form
          className=" space-y-4 lg:space-y-0 lg:space-x-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="px-2  w-10/12 h-10 rounded-md outline-none lg:px-8"
            onChange={updateLink}
          ></input>
          <button
            className="w-10/12  rounded-md py-2 px-2 bg-cyan-400 text-white lg:w-auto"
            onClick={handleSubmit}
          >
            Shorten it!
          </button>
        </form>
      </div>
      <div
        id="answer"
        className="hidden text-left border-2 border-green-600 my-4 flex justify-between flex-col  p-2 bg-white rounded-md lg:items-center  lg:flex-row"
      >
        <div>
          <h6>{links.original_link}</h6>
        </div>
        <hr className="  border-green-600 border-3 w-full my-2 lg:hidden" />
        <div className="flex flex-col  lg:items-center lg:space-x-4 lg:flex-row">
          <h6 className="text-cyan-400">{links.full_short_link}</h6>
          <button
            className="w-full mx-auto bg-cyan-400 rounded-md text-white py-1 px-2 focus:bg-slate-800 lg:w-auto "
            onClick={handleCopy}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shortener;
