import Image from "next/image";

import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";

export function Customers() {
  return (
    <div className="bg-[#212240] py-32">
      <p className="pb-8 text-center text-2xl font-bold tracking-tight text-white sm:text-4xl">
        Customers who cannot just get enough
      </p>
      <ul
        role="list"
        className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {[
          [
            { name: "Transistor", logo: logoTransistor },
            { name: "Tuple", logo: logoTuple },
            { name: "StaticKit", logo: logoStaticKit },
          ],
          [
            { name: "Mirage", logo: logoMirage },
            { name: "Laravel", logo: logoLaravel },
            { name: "Statamic", logo: logoStatamic },
          ],
        ].map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 py-4 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} unoptimized />
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 py-4 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} unoptimized />
                </li>
              ))}
            </ul>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 py-4 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} unoptimized />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
