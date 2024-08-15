import React, { useState } from "react";
import tips from "C:\\Users\\hp\\Documents\\reactjs👾\\tipvault\\db.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
  const navigate = useNavigate();
  interface TipData {
    id: string;
    title: string;
    description: string;
    language: string;
    tags: string[];
    created_at: string;
  }
  const [data, setData] = useState<Omit<TipData, "created_at">>({
    id: (tips.tips.length + 1).toString(),
    title: "",
    description: "",
    language: "",
    tags: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const newTip: TipData = {
      ...data,
      created_at: formattedDate,
    };

    axios
      .post("http://localhost:3000/tips", newTip)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/tips");
  };

  return (
    <div className="bg-slate-950 p-6 rounded-lg shadow-lg max-w-md mx-auto">
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
            className="w-full p-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-primary focus:outline-none"
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
            className="w-full p-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-primary focus:outline-none"
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
            className="w-full p-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-primary focus:outline-none"
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
            className="w-full p-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-primary focus:outline-none"
            placeholder="Enter tags"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
