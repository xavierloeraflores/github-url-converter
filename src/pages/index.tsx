import { type NextPage } from "next";
import Head from "next/head";
import { Button } from "npm/components/ui/button";
import { Input } from "npm/components/ui/input";
import { useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function buttonOnClick() {
    console.log(input);
  }

  return (
    <>
      <Head>
        <title>GitHub.io URL Converter</title>
        <meta
          name="description"
          content="Convert your GitHub.io links to GitHub code repositories with ease using our web app. Instantly generate GitHub code repository links and explore open-source projects effortlessly. Try it now and take the hassle out of GitHub navigation!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-2 flex flex-col items-center rounded-sm border border-blue-900 px-8 py-4 ">
        <h2 className="text-center text-4xl md:text-6xl">
          GitHub.io URL Converter
        </h2>
        <h3 className="mb-8 text-center text-2xl md:text-3xl">
          Convert links from GitHub.io to GitHub Repos
        </h3>
        <div className="mx-4  flex w-full justify-center ">
          <Input
            type="url"
            placeholder="https://example.github.io/example/"
            onChange={inputChange}
            className="max-w-lg"
          />
          <Button variant="outline" onClick={buttonOnClick}>
            Convert
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
