import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const plans = [
  {
    title: "Starter",
    featured: false,
    description: "All your essential business finances, taken care of.",
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
    ],
  },
  {
    title: "Scale",
    featured: true,
    description: "The best financial services for your thriving business.",
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "Advanced invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
      { id: 5, value: "VAT & VATMOSS filing" },
      { id: 6, value: "Free bank transfers" },
    ],
  },
  {
    title: "Growth",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Pricing() {
  return (
    <div className="bg-[#212240]">
      <div className="relative bg-[#212240]">
        {/* Overlapping background */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 hidden h-6 w-full bg-gray-50 lg:block"
        />

        <div className="relative  mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Simple pricing,</span>
            <span className="block lg:inline">no commitment.</span>
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Everything you need, nothing you don't. Pick a plan that best suits
            your business.
          </p>
        </div>

        <h2 className="sr-only">Plans</h2>

        {/* Toggle */}
        <div className="relative mt-12 flex justify-center sm:mt-16">
          <div className="flex rounded-lg bg-[#30305d] p-0.5">
            <button
              type="button"
              className="relative whitespace-nowrap rounded-md border-[#30305d] bg-white py-2 px-6 text-sm font-medium text-[#30305d] shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="relative ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-white hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            >
              Yearly billing
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mx-auto mt-8 max-w-2xl bg-[#212240] px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-lg bg-[#30305d] lg:block"
          />

          <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured
                    ? "bg-white shadow-md ring-2 ring-[#30305d]"
                    : "bg-[#30305d] lg:bg-transparent",
                  "rounded-lg px-6 pt-6 pb-3 lg:px-8 lg:pt-12"
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? "text-[#30305d]" : "text-white",
                      "text-base font-semibold"
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p
                        className={classNames(
                          plan.featured ? "text-[#30305d]" : "text-white",
                          "text-4xl font-bold tracking-tight"
                        )}
                      >
                        ${plan.priceMonthly}
                      </p>
                      <div className="ml-4">
                        <p
                          className={classNames(
                            plan.featured ? "text-gray-700" : "text-white",
                            "text-sm"
                          )}
                        >
                          USD / mo
                        </p>
                        <p
                          className={classNames(
                            plan.featured ? "text-gray-500" : "text-indigo-200",
                            "text-sm"
                          )}
                        >
                          Billed yearly (${plan.priceYearly})
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className={classNames(
                        plan.featured
                          ? "bg-[#30305d] text-white hover:bg-indigo-700"
                          : "bg-white text-[#30305d] hover:bg-indigo-50",
                        "mt-6 inline-block w-full rounded-md border border-transparent py-2 px-8 text-center text-sm font-medium shadow-sm sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                      )}
                    >
                      Buy {plan.title}
                    </a>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? "divide-gray-200 border-gray-200"
                      : "divide-indigo-500 divide-opacity-75 border-indigo-500",
                    "mt-7 divide-y border-t lg:border-t-0"
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="flex items-center py-3">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? "text-indigo-500" : "text-indigo-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? "text-gray-600" : "text-white",
                          "ml-3 text-sm font-medium"
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
