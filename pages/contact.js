import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function Contact() {
  return (
    <div className="bg-gray-50 text-gray-900 h-screen">
      <Head>
        <title>Contact | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl mx-auto pt-8">
        <div>
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            Location of the Lab
          </h1>
          <p className="my-5">College of Computing and Software Engineering</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;