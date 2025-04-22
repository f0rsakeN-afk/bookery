import React from "react";
import { about2Image, aboutImage } from "@/utils/ImageExports";

const About: React.FC = () => {
  return (
    <div className="">
      <section className=" overflow-hidden relative">
        <img
          src={aboutImage}
          alt="about image"
          className="object-cover h-[250px] w-full brightness-50"
        />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-white text-2xl font-bold capitalize">
          {" "}
          About US
        </h1>
      </section>
      <div className="container mx-auto max-w-6xl px-2 xl:px-0 grid lg:grid-cols-5 gap-4 py-6">
        <div className="lg:col-span-3 flex flex-col space-y-6">
          <section className="flex flex-col space-y-1">
            <h2 className="font-playfair text-2xl font-semibold">
              Our Mission
            </h2>
            <p className="font-inter font-extralight">
              Our mission is to ignite a passion for reading and learning by
              providing a diverse and curated selection of books to readers
              worldwide. We are dedicated to empowering knowledge, believing in
              the transformative power of books to inspire, educate, and
              entertain.
            </p>
          </section>
          <section className="flex flex-col space-y-1">
            <h2 className="font-playfair text-2xl font-semibold">
              What We Are
            </h2>
            <p className="font-inter font-extralight">
              we're not just an online book retailer; we're a vibrant literary
              community passionate about the written word. We believe that books
              have the power to inspire, educate, and transform lives.
            </p>
            <br />
            <p className="font-inter font-extralight">
              We take pride in curating a diverse collection of books that span
              genres and interests, ensuring there's something for everyone.
              Whether you're a seasoned bibliophile or just starting your
              reading journey, we're here to be your trusted companions. Join us
              in celebrating the joy of reading and the boundless possibilities
              that books bring to our lives. Welcome to My-Bookstore, where
              literature thrives, and readers unite.
            </p>
          </section>
        </div>
        <img
          src={about2Image}
          alt="about 2 image"
          className="order-first lg:order-last lg:col-span-2  border-8 border-primary  "
        />
      </div>
    </div>
  );
};

export default About;
