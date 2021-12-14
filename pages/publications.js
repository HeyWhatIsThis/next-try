import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import publications from "../data/publication_data";

/*
make publications page closer to google scholar
*/

function Publications() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>Publications | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl px-5 sm:mx-auto pt-10 mt-10 text-base">
        <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          Publications
        </h1>
        <div className="my-5">
          <p className="font-semibold text-lg">
            Mohammed Aledhari's Publications:
          </p>
          <p className="text-gray-800 mt-5">2021</p>
          <hr />
          {publications.map((publication, index) => (
            <div key={index} className="my-3">
              {publication.year == 2021 ? (
                <div>
                  <a
                    className="font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href={publication.link}
                  >
                    {publication.title}
                  </a>
                  <p className="text-gray-500">{publication.authors}</p>
                  <p className="text-gray-500">{publication.citation}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <p className="text-gray-800 mt-5">2020</p>
          <hr />
          {publications.map((publication, index) => (
            <div key={index} className="my-3">
              {publication.year == 2020 ? (
                <div>
                  <a
                    className="font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href={publication.link}
                  >
                    {publication.title}
                  </a>
                  <p className="text-gray-500">{publication.authors}</p>
                  <p className="text-gray-500">{publication.citation}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <p className="text-gray-800 mt-5">2015-2019</p>
          <hr />
          {publications.map((publication, index) => (
            <div key={index} className="my-3">
              {publication.year !== 2021 && publication.year !== 2020 ? (
                <div>
                  <a
                    className="font-medium underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href={publication.link}
                  >
                    {publication.title}
                  </a>
                  <p className="text-gray-500">{publication.authors}</p>
                  <p className="text-gray-500">{publication.citation}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publications;
