import { categories } from "../utils";

const Categories = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center mb-10 text-[3rem] text-transparent font-bold bg-clip-text bg-gradient-to-r from-white from-40% via-sky-500 via-50% to-primary to-90%">
        Categories
      </h1>
      <div className="flex flex-wrap justify-center space-x-4">
        {categories.map(({ name, image }) => (
          <div key={name} className="flex flex-col items-center flex-wrap justify-center">
            <div className="p-4 bg-gray-800 rounded-full">
              <img src={image} alt={`${name} logo`} className="h-12 w-12" />
            </div>
            <h2 className="text-white mt-2 text-sm font-medium">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
