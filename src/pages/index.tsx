import { type NextPage } from "next";
import Head from "next/head";
import { Alert, AlertTitle, AlertDescription } from "npm/components/ui/alert";
import { Button } from "npm/components/ui/button";
import { Input } from "npm/components/ui/input";
import { useState } from "react";
import { AlertCircle, Copy } from "lucide-react";
import { useToast } from "npm/components/ui/use-toast";
import Link from "next/link";

const regex = /https:\/\/([a-zA-Z0-9-]+)\.github\.io\/([a-zA-Z0-9-]+)\/?/;

const Home: NextPage = () => {
  const { toast } = useToast();
  const [input, setInput] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [repo, setRepo] = useState<string>("");
  const [error, setError] = useState<string>("");
  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function buttonOnClick() {
    const match = input.match(regex);
    if (!match) {
      setError("Invalid URL");
      setUser("");
      setRepo("");
      return;
    }
    const user = match[1] || "";
    const repo = match[2] || "";
    if (user === "" || repo === "") {
      setError("Unexpected Error");
      setUser("");
      setRepo("");
      return;
    }
    setError("");
    toast({
      title: "Success",
      description: "URL converted successfully",
    });
    setUser(user);
    setRepo(repo);
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
        <div className="mx-4 my-2 flex w-full justify-center ">
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
        {error === "" ? null : (
          <Alert variant="destructive">
            <AlertCircle className="h-6 w-6" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {user === "" && repo === "" ? null : (
          <div className="mx-4 my-2 flex w-full items-center justify-center">
            <Link
              href={`https://github.com/${user}/${repo}`}
              className="mr-2 underline"
            >
              https://github.com/{user}/{repo}
            </Link>
            <Button
              variant="outline"
              onClick={
                void navigator.clipboard.writeText(
                  `https://github.com/${user}/${repo}`
                )
              }
            >
              <Copy />
            </Button>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
