import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/karanJ2212/AI-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAi GPT-4</span>{" "}
      </h1>
      <h2 className="desc">
        Streamline your reading experience with Summize, an open-source article
        summarization tool designed to condense extensive articles into succinct
        and comprehensible summaries.
      </h2>
    </header>
  );
};

export default Hero;
