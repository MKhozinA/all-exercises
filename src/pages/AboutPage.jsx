/* eslint-disable react/no-unescaped-entities */
import { useDocumentTitle } from "@/hooks";

const AboutPage = () => {
  useDocumentTitle("About");

  return (
    <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
      <h1 className="text-xl mb-2 font-semibold">About Page</h1>

      <p>
        Welcome to this website, where you'll find a compilation of all the
        exercises I've undertaken to master the fundamentals of programming.
        Here, I document a diverse range of projects and exercises, showcasing
        my journey in implementing foundational programming concepts. From
        simple calculators and color gradients to interactive to-do lists and
        more, this platform serves as a testament to my commitment to continuous
        learning and practical application of coding principles. Join me on this
        coding adventure as I explore and implement various programming
        challenges, refining my skills and sharing the process with you.
      </p>
    </div>
  );
};

export default AboutPage;
