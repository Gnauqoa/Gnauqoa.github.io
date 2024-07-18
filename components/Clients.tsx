"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> skills </span>
        and
        <span className="text-purple"> knowledge </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap pt-24   items-center justify-center gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <a href={company.href} target="_blank">
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="max-h-[60px] w-auto"
                  />
                  {company.nameImg && (
                    <img
                      src={company.nameImg}
                      alt={company.name}
                      width={company.id === 4 || company.id === 5 ? 100 : 150}
                      className="md:w-24 w-20"
                    />
                  )}
                </div>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
