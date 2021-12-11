import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import genetics from "../assets/genetics.jpg";
import rename from "../assets/rename.jpg";
import Image from "next/image";

{
  /*
    TODO: add real news posts
  */
}

const newsPosts = [
  {
    img: require("../assets/genetics.jpg"),
    title: "News Post Title",
    date: "Caption",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: require("../assets/rename.jpg"),
    title: "News Post Title",
    date: "Caption",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function News() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>News | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl px-5 sm:mx-auto pt-10 mt-10">
        <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          News
        </h1>
        <hr />
        {newsPosts.map((newsPost, index) => (
          <>
            <div className="md:flex my-9 h-full" key={index}>
              <Image
                src={newsPost.img}
                objectFit="cover"
                width={900}
                height={500}
                className=""
              />
              <div className="md:ml-4 ">
                <h1 className="font-semibold text-blue-800 text-xl">
                  {newsPost.title}
                </h1>
                <p className="my-1 font-normal italic text-gray-400">
                  {newsPost.date}
                </p>
                <p className="my-2 text-base font-normal text-gray-900">
                  {newsPost.content}
                </p>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default News;
