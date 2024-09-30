import React from 'react';

const SingleService = ({ name, Icon, description, cta }) => {
  return (
    <div className=" px-3 py-3 flex flex-col gap-5 w-full max-w-[380px] rounded  shadow cursor-default transition-transform duration-100  hover:scale-[1.02] hover:bg-pink-50  ">
      <div className="flex items-center gap-6">
        <Icon />
        <h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
      </div>
      <p className="text-sm text-gray-600 leading-6 tracking-wide">
        {description}
      </p>

      <button className=" px-2 py-1 rounded w-fit border-2 border-primary hover:bg-primary hover:text-white text-sm active:scale-95">
        {cta}
      </button>
    </div>
  );
};

export default SingleService;
