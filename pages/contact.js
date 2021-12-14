import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

{
  /*
  TODO: ask if we need to add any more directions here
  TODO: change location url
  TODO: add directions for marietta campus and link to map
  TODO: add contact form
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.155524081898!2d-84.52237214870784!3d33.93712783113908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f511548ff4b20f%3A0x47785ab11e0d0e02!2sKennesaw%20State%20University%20Atrium%20Building!5e0!3m2!1sen!2sus!4v1639507529731!5m2!1sen!2sus"
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
              <p className="py-1">
                1100 South Marietta Pkwy SE, Marietta, GA 30060
              </p>
              <p className="py-1">
                Lab Building: Atrium Building (J) Room J106, MD 9047
              </p>
              <p className="py-1">680 Arntson Drive</p>
              <p className="py-1">Phone: 470-578-3934</p>
              <p className="py-1">Fax: 470-578-9032</p>
              <p className="py-1">Email: maledhari@kennesaw.edu</p>
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
