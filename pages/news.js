import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import genetics from "../assets/genetics.jpg";
import rename from "../assets/rename.jpg";
import Image from "next/image";

function News() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>News | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl mx-auto pt-10 mt-10">
        <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          News
        </h1>
        <hr />
        <div className="md:flex my-9 h-full">
          <Image src={genetics} className="" />
          <div className="ml-4 w-11/12">
            <h1 className="font-semibold text-blue-800 text-xl">
              News Post Title
            </h1>
            <p className="my-1 font-normal italic text-gray-400">
              December 7, 2021
            </p>
            <p className="my-2 text-base font-normal text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <hr className="" />
        <div className="md:flex my-9 h-full">
          <Image src={rename} className="" />
          <div className="ml-4 w-11/12">
            <h1 className="font-semibold text-blue-800 text-xl">
              News Post Title
            </h1>
            <p className="my-1 font-normal italic text-gray-400">
              December 7, 2021
            </p>
            <p className="my-2 text-base font-normal text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
