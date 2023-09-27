import React from "react";
import { constants } from "../common/constants";
import { sayHello } from "../common/svg";

export const Header = () => {
    const { headerLinks } = constants;
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <svg
              width="80"
              height="32"
              viewBox="0 0 80 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.522322 23.7151V0.351838H7.56063V18.2083H15.6091V23.7151H0.522322ZM36.4959 15.0801C36.4959 17.8933 35.6433 20.1036 33.938 21.7111C32.2436 23.3187 29.8703 24.1224 26.8182 24.1224C23.7878 24.1224 21.4254 23.3404 19.731 21.7763C18.0475 20.2014 17.2057 18.0345 17.2057 15.2757C17.2057 13.5052 17.6022 11.9683 18.3951 10.6649C19.188 9.36152 20.3176 8.36226 21.7839 7.66711C23.2502 6.97197 24.9392 6.6244 26.8508 6.6244C28.8276 6.6244 30.5383 6.98827 31.9829 7.71599C33.4383 8.44372 34.5517 9.45384 35.3228 10.7464C36.1049 12.0389 36.4959 13.4835 36.4959 15.0801ZM29.4576 15.1127C29.4576 12.8427 28.5887 11.7076 26.8508 11.7076C25.1129 11.7076 24.244 12.897 24.244 15.2757C24.244 17.7847 25.1238 19.0392 26.8834 19.0392C28.5995 19.0392 29.4576 17.7304 29.4576 15.1127ZM57.1709 21.3853C57.1709 24.5895 56.1608 27.0822 54.1405 28.8635C52.1311 30.6557 49.1931 31.5517 45.3264 31.5517C44.2836 31.5517 43.2735 31.4703 42.296 31.3073C41.3184 31.1444 40.6179 30.9598 40.1943 30.7534V25.3118C40.8894 25.7462 41.704 26.0938 42.6381 26.3545C43.5722 26.6151 44.4031 26.7455 45.1308 26.7455C46.6841 26.7455 47.9277 26.3708 48.8618 25.6213C49.7959 24.8719 50.2629 23.878 50.2629 22.6398V21.6134H50.1978C49.6981 22.3737 49.0084 22.9819 48.1286 23.4381C47.2597 23.8943 46.3256 24.1224 45.3264 24.1224C43.1758 24.1224 41.4759 23.3784 40.2268 21.8904C38.9778 20.3915 38.3532 18.3278 38.3532 15.6993C38.3532 13.8962 38.6791 12.305 39.3308 10.9256C39.9825 9.54617 40.8894 8.48716 42.0516 7.74858C43.2138 6.99913 44.4954 6.6244 45.8966 6.6244C47.8191 6.6244 49.2528 7.33584 50.1978 8.7587H50.2629V7.03171H57.1709V21.3853ZM50.377 14.9009C50.377 13.9234 50.1543 13.1468 49.709 12.5711C49.2745 11.9955 48.6934 11.7076 47.9657 11.7076C47.1837 11.7076 46.5591 12.0552 46.0921 12.7503C45.625 13.4455 45.3915 14.3741 45.3915 15.5363C45.3915 16.6116 45.587 17.4643 45.978 18.0942C46.3691 18.7242 46.9882 19.0392 47.8354 19.0392C48.6283 19.0392 49.2474 18.7188 49.6927 18.0779C50.1489 17.4262 50.377 16.5573 50.377 15.4712V14.9009ZM79.0842 15.0801C79.0842 17.8933 78.2315 20.1036 76.5263 21.7111C74.8318 23.3187 72.4586 24.1224 69.4065 24.1224C66.3761 24.1224 64.0137 23.3404 62.3193 21.7763C60.6358 20.2014 59.794 18.0345 59.794 15.2757C59.794 13.5052 60.1904 11.9683 60.9833 10.6649C61.7762 9.36152 62.9058 8.36226 64.3721 7.66711C65.8385 6.97197 67.5274 6.6244 69.4391 6.6244C71.4159 6.6244 73.1266 6.98827 74.5712 7.71599C76.0266 8.44372 77.1399 9.45384 77.9111 10.7464C78.6931 12.0389 79.0842 13.4835 79.0842 15.0801ZM72.0458 15.1127C72.0458 12.8427 71.1769 11.7076 69.4391 11.7076C67.7012 11.7076 66.8323 12.897 66.8323 15.2757C66.8323 17.7847 67.7121 19.0392 69.4717 19.0392C71.1878 19.0392 72.0458 17.7304 72.0458 15.1127Z"
                fill="#044FA5"
              />
            </svg>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/"
              className="text-gray-800 border-2 border-[#044FA5] hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <div className="flex">
                {sayHello()} <span className="text-[#044FA5]">{constants.sayHello}</span>
              </div>
            </a>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {headerLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
