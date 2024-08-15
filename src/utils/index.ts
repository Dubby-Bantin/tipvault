import pythonImg from "../../src/assets/4518857_python_icon.png";
import JavaImg from "../../src/assets/4373217_java_logo_logos_icon.png";
import reactImg from "../../src/assets/1174949_js_react js_logo_react_react native_icon.png";
import javascriptImg from "../../src/assets/652581_code_command_develop_javascript_language_icon.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";
type Categories = {
  name?: string;
  image?: string;
  title?: string;
  description?: string;
};

const categories: Categories[] = [
  { name: "Python", image: pythonImg },
  { name: "Java", image: JavaImg },
  { name: "React", image: reactImg },
  { name: "Javascript", image: javascriptImg },
];

const tipsData: Categories[] = [
  {
    title: "Optimize Python Loops",
    description:
      "Learn how to optimize loops in Python by using list comprehensions, which can significantly reduce execution time. Understand when and how to use them effectively in your code.",
    image: pythonImg,
  },
  {
    title: "React State Management",
    description:
      "Master the art of state management in React using hooks like useState and useReducer. Learn how to manage complex state logic efficiently in your components.",
    image: reactImg,
  },
  {
    title: "JavaScript Async Best Practices",
    description:
      "Explore best practices for handling asynchronous code in JavaScript, including Promises, async/await, and error handling techniques. Improve the reliability of your JavaScript applications.",
    image: javascriptImg,
  },
  {
    title: "Java Memory Management",
    description:
      "Understand the intricacies of Java memory management, including the use of garbage collection and memory leaks prevention. Learn how to write more efficient Java code.",
    image: JavaImg,
  },
];

const footerIcons: IconType[] = [
  FaFacebookF,
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
];

const footerLinks = [
  {
    header: "Categories",
    children: ["JavaScript", "Python", "Java", "C++"],
  },
  {
    header: "Resources",
    children: [
      "How-To Guides",
      "Best Practices",
      "Tool Reviews",
      "Community Tips",
    ],
  },
  {
    header: "Company",
    children: ["About Us", "Contact", "Careers", "Newsletter"],
  },
];

export { categories, tipsData, footerIcons, footerLinks };
