import { FiArrowRight } from "react-icons/fi";

const CVButton = () => {
  return (
    <button
      onClick={() => window.open("./docs/benjaminCorbett.pdf")}
      className="group flex h-8 items-center gap-2 rounded-full bg-white/40 backdrop-blur-sm border border-blue-200/50 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:pl-2 hover:text-white active:bg-blue-700"
    >
      <span className="rounded-full bg-blue-600 p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-blue-600 group-active:-rotate-45" />
      </span>

      <span className="text-sm text-blue-600 font-bold group-hover:text-white transition-colors duration-300">CV</span>
    </button>
  );
};

export default CVButton;
