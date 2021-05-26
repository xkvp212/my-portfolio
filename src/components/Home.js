import React from "react";
import image from "../nz-fern-leaves.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="fern Leaves"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-10">
        <h1 className=" text-6xl font-bold text-white cursive leading-none lg: leading-snug">
          Kia Ora! I'm Kevin Pacis.
        </h1>
      </section>
    </main>
  );
}
