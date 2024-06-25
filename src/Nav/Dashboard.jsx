import React from "react";
import "./home.css";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="h-full w-7/10 bg-gray-200 p-4 mb-4 p-4 shadow-lg">
        <img src="https://picsum.photos/800/400" alt="Random" />
        <b>My Name</b>
        <p>
          Just Me, Myself Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ad vitae porro voluptatibus voluptates unde animi, ullam minima!
          Vero ipsum aut molestiae sequi ducimus non dicta alias omnis itaque
          perspiciatis odio necessitatibus, voluptates quidem et ullam molestias
          sunt blanditiis aspernatur accusamus ut temporibus. Blanditiis maiores
          unde quam distinctio soluta reiciendis consequatur?
        </p>
      </div>
      <div className="h-full w-3/10 bg-gray-100 p-4 overflow-y-auto custom-scrollbar">
        <div className="mb-4 p-4 shadow-xl">
          <img src="https://picsum.photos/250" alt="Random" />
          <b>My Name</b>
          <p>
            Just Me, Myself Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ad vitae porro voluptatibus voluptates unde animi, ullam
            minima! Vero ipsum aut molestiae sequi ducimus non dicta alias omnis
            itaque perspiciatis odio necessitatibus, voluptates quidem et ullam
            molestias sunt blanditiis aspernatur accusamus ut temporibus.
          </p>
        </div>
        <div className="mb-4 p-4 shadow-xl">
          {" "}
          <img src="https://picsum.photos/250" alt="Random" />
          <b>My Name</b>
          <p>
            Just Me, Myself Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ad vitae porro voluptatibus voluptates unde animi, ullam
            minima! Vero ipsum aut molestiae sequi ducimus non dicta alias omnis
            itaque perspiciatis odio necessitatibus, voluptates quidem et ullam
            molestias sunt blanditiis aspernatur accusamus ut temporibus.
          </p>
        </div>
        <div className="mb-4 p-4 shadow-lg">
          {" "}
          <img src="https://picsum.photos/250" alt="Random" />
          <b>My Name</b>
          <p>
            Just Me, Myself Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ad vitae porro voluptatibus voluptates unde animi, ullam
            minima! Vero ipsum aut molestiae sequi ducimus non dicta alias omnis
            itaque perspiciatis odio necessitatibus, voluptates quidem et ullam
            molestias sunt blanditiis aspernatur accusamus ut temporibus.
          </p>
        </div>
      </div>
    </div>
  );
}
