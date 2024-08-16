import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Define the type for the form data
interface TipFormData {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  created_at?: string; // Added optional created_at field
}

// Load initial tips from local storage or use an empty array if none exist
const loadTips = () => {
  const savedTips = localStorage.getItem("tips");
  return savedTips ? JSON.parse(savedTips) : [];
};

// Save tips to local storage
const saveTips = (tips: TipFormData[]) => {
  localStorage.setItem("tips", JSON.stringify(tips));
};

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);

  // Initialize the form state with explicit types
  const initialFormState: TipFormData = {
    id: (loadTips().length + 1).toString(),
    title: "",
    description: "",
    language: "",
    tags: [],
  };
  const [data, setData] = useState<TipFormData>(initialFormState);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTip: TipFormData = {
      ...data,
      created_at: formattedDate,
    };

    setIsloading(true);

    // Load tips from local storage
    const tips = loadTips();

    // Add the new tip to the array
    tips.push(newTip);

    // Save the updated array to local storage
    saveTips(tips);

    setTimeout(() => {
      toast("Tip has been created", {
        description: formattedDate,
        action: {
          label: "Go back to Tip Screen",
          onClick: () => navigate("/tips"),
        },
      });
      setData(initialFormState);
      setIsloading(false);
    }, 5000);
  };

  return (
    <div className="bg-slate-950 p-6 shadow-lg max-w-md mx-auto">
      <h1 className="text-primary text-2xl font-bold mb-4">Submit a New Tip</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-white text-sm font-semibold mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="w-full p-2 bg-slate-900 text-white border border-slate-700 focus:border-primary placeholder:text-sm focus:outline-none"
            placeholder="Enter tip title"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-white text-sm font-semibold mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className="w-full p-2 bg-slate-900 text-white border border-slate-700 focus:border-primary placeholder:text-sm focus:outline-none"
            placeholder="Enter tip description"
            rows={4}
            required
          />
        </div>
        <div>
          <label
            htmlFor="language"
            className="block text-white text-sm font-semibold mb-1"
          >
            Programming Language
          </label>
          <input
            type="text"
            id="language"
            value={data.language}
            onChange={(e) => setData({ ...data, language: e.target.value })}
            className="w-full p-2 bg-slate-900 text-white border border-slate-700 focus:border-primary placeholder:text-sm focus:outline-none"
            placeholder="Enter programming language"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-white text-sm font-semibold mb-1"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            value={data.tags.join(", ")}
            onChange={(e) =>
              setData({
                ...data,
                tags: e.target.value
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag.length > 0),
              })
            }
            className="w-full p-2 bg-slate-900 text-white border border-slate-700 focus:border-primary placeholder:text-sm focus:outline-none"
            placeholder="Enter tags"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center p-2 h-10 bg-primary text-white font-semibold transition-all duration-300"
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Create;
