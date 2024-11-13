"use client";
import Link from "next/link";
import { resumeData as data } from "../data/resume";

import React from "react";

export default function InteractiveResume() {
  const { name, summary, title, contact, additionalInfo } = data.personalInfo;
  const education = data.education;
  const experience = data.experience;
  const techStack = data.techStack;
  const work = data.workExperience;

  return (
    <div className="w-2/3 bg-gradient-to-tl from-slate-300 via-slate-200 to-slate-100 p-3 max-w-5xl border-2 border-slate-900">
      <header className="bg-slate-600 text-slate-50 flex flex-col gap-2 p-2 text-lg  ">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-xl italic">{title}</h2>
        <h6>
          {contact.phone} | {contact.email}
        </h6>
        <div className="flex gap-3 text-blue-400 font-bold">
          <p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </header>
      <br />

      {/* start main content */}
      <main className="flex gap-3 ">
        <div className="bg-slate-600 text-slate-50 p-2 h-min">
          <section className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold underline">Tech</h3>
            <ul>
              {techStack.map((tech, index) => (
                <li className="mt-1" key={index}>{tech}</li>
              ))}
            </ul>
          </section>
        </div>

        <div>
          <section>
            <h3 className="text-3xl font-bold text-slate-800 underline mb-2">Summary</h3>
            <p>{summary}</p>
            <br />
            <p>{additionalInfo}</p>
          </section>
          <br />

          <section>
            <div>
            <h3 className="text-3xl font-bold text-slate-800 underline mb-2">Experience</h3>
              {experience.map((job, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-600 mb-2">
                    <span>Technologies:</span> {job.technologies.join(", ")}
                  </p>
                  <ul className="list-disc pl-5">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div>
            <h3 className="text-3xl font-bold text-slate-800 underline mb-2">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-gray-600 mb-2">
                    <strong></strong> {edu.period}
                  </p>
                  <ul className="list-disc pl-5">
                    {edu.details.map((det, i) => (
                      <li key={i}>{det}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div>
            <h3 className="text-3xl font-bold text-slate-800 underline mb-2">Work Experience</h3>
              {work.map((job, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-600 mb-2">{job.period}</p>
                  <ul className="list-disc pl-5">
                    {job.description.map((det, i) => (
                      <li key={i}>{det}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
