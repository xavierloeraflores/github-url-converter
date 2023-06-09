import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitHub.io URL Converter</title>
        <meta
          name="description"
          content="Discover the story behind our GitHub.io to GitHub Code Converter App. Learn how our user-friendly web app, designed to make navigating open-source projects easier, was developed and how it can benefit you. Find out more about our app now!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <article className="flex flex-col space-y-2 rounded-sm border border-blue-900 px-8 py-4 text-lg">
          <h2 className=" text-center text-4xl md:text-6xl">About</h2>
          <h3 className=" text-center text-2xl md:text-3xl">
            Introducing our GitHub.io to GitHub Code Converter App
          </h3>
          <p>
            Are you tired of manually converting GitHub.io links to their
            corresponding GitHub code repository links? Look no further! This
            web app, developed using Next.js, TypeScript, TailwindCSS, and
            hosted on Vercel, takes care of that for you.
          </p>
          <p>
            GitHub Pages is a great way to showcase your work online, whether
            it&apos;s a personal blog, a portfolio, or a project you&apos;re
            working on. However, sometimes you may want to view the code behind
            a GitHub.io website to learn from it or contribute to it.
            That&apos;s where this app comes in.
          </p>
          <p>
            Using this app is simple. Just paste the GitHub.io link into the
            text field and voila! You&apos;ll get a link to the corresponding
            GitHub code repository. You can then click on the link to view the
            code.
          </p>
          <p>
            This app is built with modern web technologies to ensure a smooth
            and user-friendly experience. Next.js provides server-side rendering
            for fast page load times, TypeScript adds strong typing to the
            codebase for easier maintenance, and TailwindCSS provides a
            customizable design system that makes the app look great. Hosting
            the app on Vercel ensures high availability and scalability, so you
            can use this app with confidence.
          </p>
          <p>
            I hope this app makes it easier for you to explore and contribute to
            the open-source community on GitHub. If you have any feedback or
            suggestions, please don&apos;t hesitate to reach out to me. Thank
            you for using this app!
          </p>
        </article>
      </main>
    </>
  );
};

export default Home;
