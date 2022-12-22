import Link from "next/link";
import Image from "next/image";

import Logo from "../images/puffer.png";

function BackgroundIllustration(props) {
  return (
    <svg
      viewBox="0 0 1090 1090"
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <circle cx={545} cy={545} r="544.5" />
      <circle cx={545} cy={545} r="480.5" />
      <circle cx={545} cy={545} r="416.5" />
      <circle cx={545} cy={545} r="352.5" />
    </svg>
  );
}

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex h-screen overflow-hidden bg-[#212240] pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-12 sm:mt-16">
          <BackgroundIllustration
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-cyan-400 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
          />
          <h1 className="text-center text-2xl font-medium tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-center text-lg text-gray-400">{subtitle}</p>
          )}
        </div>
        <div className="sm:rounded-5xl -mx-4 mt-10 flex-auto rounded-lg border border-none bg-[#30305d] py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24">
          {children}
        </div>
      </div>
    </main>
  );
}
