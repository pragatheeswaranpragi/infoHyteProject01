import React from "react";
import { constants } from "../common/constants";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white p-4">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/about" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {constants.quickLinksTitle}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {constants.quickLinks.map((item, index) => (
                <li className="mb-4" key={index}>
                  <a href={item.link} className="hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {constants.ourServicesTitle}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {constants.ourServices.map((item, index) => (
                <li className="mb-4" key={index}> 
                  <a href={item.link} className="hover:underline">
                    {item.name} 
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {constants.address.map((item, index) => (
                <li className="mb-4" key={index}>
                <a href="/" className="hover:underline">
                  {item.name}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </div> 
      </div>
    </footer>
  );
};
