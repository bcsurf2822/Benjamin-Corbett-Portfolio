"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col items-center justify-center scroll-mt-[80px] min-h-[100vh] bg-neutral-50 px-6 md:px-12 py-16 md:py-32"
    >
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            connect<span className="text-secondary">.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Lets collaborate on your next project or design a site to{" "}
            <span className="text-2xl md:text-3xl font-bold text-primary-dark">
              BUILD
            </span>{" "}
            your business!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <SocialLink
            link="https://www.linkedin.com/in/benjamin-corbett-84822424a"
            icon={faLinkedin}
            label="LinkedIn"
            color="bg-[#0077B5]"
          />
          <SocialLink
            link="https://github.com/bcsurf2822"
            icon={faSquareGithub}
            label="GitHub"
            color="bg-[#333]"
          />
          <SocialLink
            link="https://calendly.com/ben-corbett-44"
            icon={faCalendarDays}
            label="Schedule a Call"
            color="bg-primary"
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="relative group flex items-center gap-3 bg-gray-50 rounded-full py-3 px-6 border border-gray-200 hover:border-primary-light transition-colors duration-300">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-5 text-primary-dark"
            />
            <span className="text-gray-700">crystaledgedev22@gmail.com</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText("crystaledgedev22@gmail.com");
                document
                  .getElementById("copy-tooltip")
                  .classList.remove("opacity-0");
                setTimeout(() => {
                  document
                    .getElementById("copy-tooltip")
                    .classList.add("opacity-0");
                }, 2000);
              }}
              className="ml-2 text-sm text-primary-dark hover:text-primary transition-colors"
            >
              Copy
            </button>
            <div
              id="copy-tooltip"
              className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300"
            >
              Copied to clipboard!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SocialLink = ({ link, icon, label, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 group"
  >
    <div
      className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mb-3 text-white`}
    >
      <FontAwesomeIcon
        className="h-7 transition-transform duration-300 group-hover:scale-110"
        icon={icon}
      />
    </div>
    <span className="text-gray-600 font-medium group-hover:text-primary-dark">
      {label}
    </span>
  </a>
);
