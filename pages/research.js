import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function Research() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>Research | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl px-5 sm:mx-auto pt-10 mt-10">
        <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          Research
        </h1>
        <hr />
        <p className="my-5 text-base">
          Describe research here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Research;
