import {
  BanknotesIcon,
  CheckBadgeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SEOCard from "../images/SEOCard.png";
import InboundMarketing from "../images/InboundMarketing.png";
import CloudMarketing from "../images/CloudMarketing.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Services() {
  return (
    <div className="-mt-16 bg-[#212240] py-8 pb-32">
      <main>
        <div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 hidden h-6 w-full bg-[#212240] lg:block"
            />
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Our Services</span>
            </h2>
            {/* Cards */}
            <div className="relative mx-auto max-w-2xl justify-center px-4 pb-8 text-center sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-0">
              <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                <div className="mx-5 flex flex-col rounded-2xl bg-[#30305d] shadow-xl">
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <Image
                      src={SEOCard}
                      alt="SEO"
                      className="top-0 inline-block justify-center"
                    />
                    <h3 className="pt-8 text-center text-xl font-medium text-white">
                      Search Engine Optimization
                    </h3>
                  </div>
                </div>
                <div className="mx-5 flex flex-col rounded-2xl bg-[#30305d] shadow-xl">
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <Image
                      src={InboundMarketing}
                      alt="InboundMarketing"
                      className="top-0 inline-block justify-center"
                    />
                    <h3 className="pt-8 text-center text-xl font-medium text-white">
                      Inbound Marketing
                    </h3>
                  </div>
                </div>
                <div className="mx-5 flex flex-col rounded-2xl bg-[#30305d] shadow-xl">
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <Image
                      src={CloudMarketing}
                      alt="CloudMarketing"
                      className="top-0 inline-block justify-center"
                    />
                    <h3 className="pt-8 text-center text-xl font-medium text-white">
                      Cloud Marketing
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
