import CssIcon from "./icon/CssIcon";
import HtmlIcon from "./icon/HtmlIcon";
import JavaIcon from "./icon/JavaIcon";
import JavaScriptIcon from "./icon/JavaScriptIcon";
import NextIcon from "./icon/NextIcon";
import ReactIcon from "./icon/ReactIcon";
import TypeScriptIcon from "./icon/TypeScriptIcon";

const SkillSection: React.FC = () => {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold text-center">Skills</h1>
      <div className="grid w-full gap-4 my-12 mt-10 grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
        <JavaIcon />
        <HtmlIcon />
        <CssIcon />
        <JavaScriptIcon />
        <TypeScriptIcon />
        <ReactIcon />
        <NextIcon />
      </div>
    </section>
  );
};

export default SkillSection;
