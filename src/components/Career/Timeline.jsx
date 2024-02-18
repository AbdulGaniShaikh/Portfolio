const Timeline = ({ title, subtitle, description, date }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="grid grid-cols-2 lg:col-span-2 h-full">
        <div className="h-full flex justify-center items-center max-lg:hidden">
          <p className="">{date}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-800 w-px h-full"></div>
          <div className="border-4 border-blue-500 rounded-full">
            <img src="" alt="" className="bg-gray-800 aspect-square object-cover rounded-full size-2" />
          </div>
          <div className="bg-gray-800 w-px h-full"></div>
        </div>
      </div>

      <div className="flex flex-col lg:col-span-4 col-span-5 my-10 p-5 shadow-lg shadow-gray-300 rounded-md">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="text-lg text-gray-900">
          <span>{subtitle}</span>
          <span className="lg:hidden font-medium">{` (${date})`}</span>
        </h1>
        <p className="text-lg text-gray-700 pt-2">{description}</p>
      </div>
    </div>
  );
};

export default Timeline;
