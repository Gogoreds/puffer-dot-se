import Image from "next/image";
import Link from "next/link";
import OmOss from "../images/OmOss.png";

export function AboutUs() {
  return (
    <div className="bg-[#212240]">
      <main>
        <div className="relative overflow-hidden pt-0 pb-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-4 bg-[#212240]"
          />
          {/* Pic left text right */}
          <div className="">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div className="-mt-20">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                      Puffer.se is a digital marketing agency that helps your
                      company reach through the noise. By offering several
                      different types of marketing services, we ensure that your
                      business reaches new relevant customers. In this way, you
                      let the customers find you, without you having to look for
                      them yourself.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#_"
                        class="group relative mt-6 inline-block text-lg"
                      >
                        <span class="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
                          <span class="absolute inset-0 h-full w-full rounded-lg bg-[#00b0c1] px-5 py-3"></span>
                          <span class="ease absolute left-0 -ml-2 h-48 w-60 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
                          <span class="relative">Get in Touch</span>
                        </span>
                        <span
                          class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="pr-4 sm:items-center md:mb-12 md:px-80 lg:relative lg:m-0 lg:h-96 lg:px-0">
                  <Image src={OmOss} alt="Om oss" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
