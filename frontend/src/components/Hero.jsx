import React from "react";
import Image from "next/image";
import Link from "next/link";
import SEOBanner from "../images/SEOHero.png";

export function Hero() {
  return (
    <div className="w-full bg-[#212240] pt-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-visible bg-transparent lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#877afd] sm:text-4xl">
                <span className="block">
                  Our company specializes in Search Engine Optimization (SEO)
                  and Digital Marketing
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white">
                Right now we offer a free analysis of your digital marketing
              </p>
              <a href="#_" class="group relative mt-6 inline-block text-lg">
                <span class="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
                  <span class="absolute inset-0 h-full w-full rounded-lg bg-[#00b0c1] px-5 py-3"></span>
                  <span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
                  <span class="relative">Get Started Now</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 overflow-visible md:aspect-w-2 md:aspect-h-1">
            <Link
              href="/"
              className="translate-x-6 translate-y-6 transform object-left-top sm:translate-x-16 lg:translate-y-20"
              alt="SEO Banner"
            >
              <Image
                src={SEOBanner}
                alt="SEO Banner"
                width={600}
                height={500}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <img
              src="https://iili.io/yX7622.png"
              alt="Free Internet Banner"
              width={600}
            /> */
}
{
  /* <a href="#_" class="group relative inline-block text-lg">
            <span class="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
              <span class="absolute inset-0 h-full w-full rounded-lg bg-amber-300 px-5 py-3"></span>
              <span class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
              <span class="relative">Find your role</span>
            </span>
            <span
              class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a> */
}
