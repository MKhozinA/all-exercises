import { Link } from "react-router-dom";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";

const Konten = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          All My Mini Project
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          This is a documentation of my simple exercises
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/calculator"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={img1}
              alt="Image Description"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Simple Calculator
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            January 20, 2024
          </p>
        </Link>

        <Link
          className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/colorgradient"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={img2}
              alt="Image Description"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Color Gradient
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            January 21, 2024
          </p>
        </Link>

        <Link
          className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/tictactoe"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={img3}
              alt="Image Description"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Tic Tac Toe
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            January 22, 2024
          </p>
        </Link>

        <Link
          className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/todo"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={img4}
              alt="Image Description"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Todo List
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            January 25, 2024
          </p>
        </Link>

        <Link
          className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/quiz"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={img5}
              alt="Image Description"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Simple Quiz
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            January 27, 2024
          </p>
        </Link>

        <Link
          className="group block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to="/books"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-xl border border-gray-300"
              src={img6}
              alt="Image Description"
            />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            Book List
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            January 29, 2024
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Konten;
