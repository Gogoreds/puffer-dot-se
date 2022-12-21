import {
  BanknotesIcon,
  CheckBadgeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export function Blog() {
  return (
    <div className="relative gap-5 px-4 pt-16 pb-20 lg:max-w-none lg:grid-cols-3">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute z-10 mx-auto mt-12 h-80 w-96 max-w-sm translate-x-2/4 -translate-y-1/3 rounded-[22px] border-2 border-dashed border-gray-900 bg-white text-center">
          <div class="mt-8 inline-block justify-center rounded-lg border-2 border-rose-900 bg-rose-600 p-3 text-white">
            <BanknotesIcon className="h-11 w-11" aria-hidden="true" />
          </div>

          <h2 className="text-bold  pt-4 text-xl tracking-tight text-gray-900">
            Ecommerce Owners
          </h2>
          <p className="py-4 text-lg leading-6 text-gray-700">
            Help us provide uncensored internet in Iran. Find your role to start
            helping. Help us provide uncensored internet in Iran. Find your role
            to start helping.
          </p>
        </div>

        <div className="absolute right-1/3 z-10 mx-auto mt-12 h-80 w-96 max-w-sm translate-x-2/4 -translate-y-1/4 gap-5 rounded-[22px] border-2 border-dashed border-gray-900 bg-white text-center">
          <div class="mt-8 inline-block justify-center rounded-lg border-2 border-rose-900 bg-rose-600 p-3 text-white">
            <CheckBadgeIcon className="h-11 w-11" aria-hidden="true" />
          </div>
          <h2 className="text-bold pt-4 text-xl tracking-tight text-gray-900">
            Manufacturers and Companies
          </h2>
          <p className="py-4 text-lg leading-6 text-gray-700">
            Help us provide uncensored internet in Iran. Find your role to start
            helping. Help us provide uncensored internet in Iran. Find your role
            to start helping.
          </p>
        </div>

        <div className="absolute z-20 mx-auto mt-20 h-80 w-96 max-w-sm translate-x-full translate-y-2/4 gap-5 rounded-[22px] border-2 border-dashed border-gray-900 bg-white text-center">
          <div class="mt-8 inline-block justify-center rounded-lg border-2 border-rose-900 bg-rose-600 p-3 text-white">
            <UsersIcon className="h-11 w-11" aria-hidden="true" />
          </div>
          <h2 className="text-bold pt-4 text-xl tracking-tight text-gray-900">
            Startups are Shutting Down!
          </h2>
          <p className="py-4 text-lg leading-6 text-gray-700">
            Help us provide uncensored internet in Iran. Find your role to start
            helping. Help us provide uncensored internet in Iran. Find your role
            to start helping.
          </p>
        </div>
      </div>
    </div>
  );
}
