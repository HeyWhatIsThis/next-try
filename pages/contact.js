import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

{
  /*
  TODO: ask if we need to add any more directions here
  */
}
function Contact() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>Contact | KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container w-full md:max-w-5xl mx-auto pt-10 mt-10">
        <div>
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            Location of the Lab
          </h1>
          <hr />
          <div className="overflow-hidden md:flex content-start text-base">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.157545647305!2d-84.52191994870782!3d33.93707583114171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5115510312027%3A0x81ce76f9703afb9c!2sKennesaw%20State%20University%20-%20Marietta%20Campus!5e0!3m2!1sen!2sus!4v1638740161753!5m2!1sen!2sus"
              width="480"
              height="360"
              allowfullscreen=""
              loading="lazy"
              className="border-2 mt-8"
            ></iframe>
            <div className="py-8 pl-4">
              <p className="py-1">Kennesaw State University, Marietta Campus</p>
              <p className="py-1">
                College of Computing and Software Engineering
              </p>
              <p className="py-1">Atrium Building, J-number</p>
              <p className="py-1">Marietta, GA 30060 </p>
              <p className="py-1">Phone: </p>
              <p className="py-1">Email:</p>
            </div>
          </div>
          {/* if we need more directions to the lab, you can put them here*/}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
