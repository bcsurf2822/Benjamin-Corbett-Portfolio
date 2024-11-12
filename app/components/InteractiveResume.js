"use client";
import { resumeData as data } from "../data/resume";

import React from "react";

export default function InteractiveResume() {
  const { name, summary, title, contact, additionalInfo } = data.personalInfo;
  const education = data.education;
  const experience = data.experience;
  const techStack = data.techStack;
  const work = data.workExperience;

  return (
    <div>
      <header>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <h6>
          {contact.phone} {contact.email}
        </h6>
        <p>
          {contact.linkedin} {contact.github}
        </p>
      </header>
      <br />
      <section>
        <h3>Summary</h3>
        <p>{summary}</p>
        <br />
        <p>{additionalInfo}</p>
      </section>
      <br />
      <section>
        <h3>Tech</h3>
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
      <br />
      <section>
        <div>
          {experience.map((job, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-600 mb-2">
                <strong>Technologies:</strong> {job.technologies.join(", ")}
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
  );
}
