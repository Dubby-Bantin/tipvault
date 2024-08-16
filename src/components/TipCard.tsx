import { useState } from "react";
import { Link } from "react-router-dom";
import { TipCardProps } from "../utils/exports";

const TipCard = ({
  title,
  language,
  description,
  tags,
  created_at,
  category,
  getLanguageBadge,
  isNew,
}: TipCardProps) => {
  // State to handle modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-slate-900 border border-opacity-10 border-primary relative p-4 rounded-lg shadow-lg w-full max-w-[35rem]">
        {/* "New" Badge */}
        {isNew && (
          <span className="absolute bottom-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </span>
        )}

        <div className="flex justify-between items-center">
          <h2 className="text-blue-400 font-bold text-lg font-heading">
            {title}
          </h2>
          <img className="h-5" src={getLanguageBadge(language)} alt="" />
        </div>

        <button className="bg-gray-700 text-gray-100 text-xs font-semibold inline-block py-1 px-2 rounded">
          {language}
        </button>

        <p className="text-gray-200 mt-2 font-text">
          {description.slice(0, 50)}...
          {/* Trigger modal opening */}
          <button onClick={openModal} className="text-xs text-primary ml-1">
            read more
          </button>
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            {tags?.map((tag) => (
              <Link
                to={"/"}
                key={tag}
                className="text-white cursor-pointer hover:text-primary text-xs"
              >
                #{tag}
              </Link>
            ))}
          </div>
          <span className="text-gray-400 text-sm italic">{created_at}</span>
        </div>

        <div className="mt-2">
          <span className="text-gray-400 text-sm italic">
            Category: {category}
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-slate-900 border border-primary rounded-lg shadow-lg p-8 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-400 font-bold text-xl">{title}</h2>
              {/* Close modal button */}
              <button
                onClick={closeModal}
                className="text-white hover:text-primary"
              >
                X
              </button>
            </div>
            <p className="text-gray-200 mb-4">{description}</p>
            <div className="flex gap-4 mb-4">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 text-gray-100 text-xs font-semibold py-1 px-2 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-gray-400 text-sm italic">{created_at}</span>
            <div className="mt-2">
              <span className="text-gray-400 text-sm italic">
                Category: {category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TipCard;
