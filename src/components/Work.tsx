export default function Work() {
  return (
    <div className="border-b border-gray-200 dark:border-zinc-800 text-center">
      <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 dark:bg-black">
        {/* Left */}
        <div className="lg:w-1/3 py-6 text-left pl-6">
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet.
          </p>
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet.
          </span>
        </div>

        {/* Right */}
        <div className="relative flex-1 flex flex-col gap-3 items-start justify-center py-6 pl-6 border-l border-dashed border-gray-200 dark:border-zinc-800">

          {/* circle on the border */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse" />
          <div className="text-lg font-semibold dark:text-purple-500 text-cyan-500">
            1001 Lorem ipsum dolor sit amet.
          </div>
        </div>

      </div>
    </div>
  );
}