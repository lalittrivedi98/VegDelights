import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Order", "Recipes", "Gallery", "Contact", "About Us"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-black lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-black"
              >
                <Image
                  src="/img/Logo.png"
                  alt="N"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Veg Delights</span>
              </Link>
              <div 
                className="max-w-md mt-4 text-black">
                  Website template inspired by Nextly. More blah blah here idk what goes here but some disclaimer 
                  or whatever can go here. This &amp; that ifykyk.
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-black rounded-md hover:text-green-800 focus:text-green-800 focus:bg-green-200 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-black rounded-md hover:text-green-800 focus:text-green-800 focus:bg-green-200 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-black">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-black">
              <a
                href="https://www.youtube.com/@VegDelights"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Youtube</span>
                <Youtube />
              </a>
              <a
                href="https://www.instagram.com/vegdelightsbymamta/"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-black">
          Copyright © {new Date().getFullYear()}. Developed by{" "}
          <a href="https://web3templates.com/" target="_blank" rel="noopener">
            Veg Delights LLC.
          </a>{" "}
          All illustrations and images are property of {" "}
          <a href="https://www.glazestock.com/" target="_blank" rel="noopener ">
            Veg Delights YouTube Channel
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Youtube = ({ size = 39 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="-35.20005 9 305.0671 247.9995"
    fill="currentColor"
  >
    <path d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"/>
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute items-center flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
