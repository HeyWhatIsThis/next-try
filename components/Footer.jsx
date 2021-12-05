import React from "react";
/* fixed inset-x-0 bottom-0 p-2	 */
export const Footer = () => {
  return (
    <footer className="mt-auto p-4">
      <hr />
      <body className="flex justify-center m-5 text-gray-600 text-sm">
        <a
          href="https://www.kennesaw.edu/"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          KSU
        </a>
        &nbsp;BioInformatics Lab, 1100 South Marietta Pkwy SE, Marietta, GA
        30060
      </body>
    </footer>
  );
};
