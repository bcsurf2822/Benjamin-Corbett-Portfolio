export const resumeData = {
  personalInfo: {
    name: "Benjamin Corbett",
    title: "Full-Stack Web Developer",
    contact: {
      phone: "(609) 320-7586",
      email: "crystaledgedev22@gmail.com",
      linkedin: "https://www.linkedin.com/in/benjamin-corbett-84822424a/",
      github: "https://github.com/bcsurf2822",
    },
    summary: "Full-Stack Web Developer with hands-on experience in JavaScript technologies, including React, Redux, Redux Toolkit, REST APIs, Express.js, Node.js, and MongoDB. I have worked with WebSockets for real-time communication and used Jest for testing. My projects are styled using a mobile-first responsive approach with Tailwind CSS and Bootstrap. I am familiar with Agile and SCRUM methodologies, Git-flow, and pair programming. Currently, I am developing my skills in TypeScript and Amazon Web Services.",
    additionalInfo: "As a developer, my goal is to work on a team that supports and pushes each other to deliver a great end product. When I’m not coding, I enjoy staying current on trends in technology, practicing yoga, surfing, hiking, and spending time with my wife and dog."
  },
  techStack: [
    "MongoDB", "React", "Redux", "Next.js", "Redux Toolkit", "Node.js", 
    "Express", "WebSockets", "JavaScript", "REST API", "Jest", 
    "Mocha", "Chai", "Bootstrap", "Tailwind CSS", "PostgreSQL"
  ],
  experience: [
    {
      title: "Weather Station Repository Demo",
      technologies: ["React", "Redux Toolkit", "Bootstrap", "REST API"],
      description: [
        "Integrated the OpenWeather API to dynamically fetch real-time temperature, pressure, and humidity data for any city.",
        "Created a custom auto-complete input with Google Places API to provide search results based on user input.",
        "Implemented Redux Toolkit for state management and efficient handling of asynchronous API requests.",
        "Developed a 5-day weather forecast application using React and Redux Toolkit."
      ]
    },
    {
      title: "Contact List v2 Repository Demo",
      technologies: ["React", "Next.js", "Bootstrap"],
      description: [
        "Enables users to add, delete, and view contact profiles using pre-generated JSON database IDs.",
        "Utilized React’s Context API to efficiently manage state and functions across multiple components.",
        "Implemented PropTypes to ensure accurate prop validation.",
        "Employed Next.js features such as CSS Modules and Next.js routing for seamless navigation between pages."
      ]
    },
    {
      title: "Trello 2.0 Repository",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
      description: [
        "Includes a login page with a Local JWT strategy, securely authenticating users with pre-generated credentials stored in a MongoDB database.",
        "Maintained proper Git-flow for version control and leveraged Git collaboration techniques to minimize and resolve merge conflicts.",
        "Rebuilt a Trello clone to simulate real-world development, applying Agile methodologies and best practices for project management.",
        "Engaged in pair programming to practice collaboration and improve code quality.",
        "Conducted daily standups to maintain accountability."
      ]
    }
  ],
  education: [
    {
      institution: "Parsity",
      period: "February 2022 - June 2022",
      details: [
        "Online full-stack software engineering program covering JavaScript, React, Node.js, Express, Git-flow and Git-collaboration, Redux, MongoDB, MV Design Pattern, unit testing with Jest, and authentication.",
        "Engaged in team-based projects to mimic workplace best practices and Agile methodologies."
      ]
    },
    {
      institution: "Egg Harbor Township High School",
      period: "September 2004 - June 2008",
      details: [
        "Member of the swim team",
        "3.8 GPA"
      ]
    }
  ],
  workExperience: [
    {
      title: "Commercial Fisherman",
      period: "June 2011 - August 2024",
      description: [
        "Worked with various team members, learning to adapt to changing environments and situations.",
        "Held positions as deckhand and first mate, demonstrating leadership, responsibility, and the ability to manage critical operations under pressure.",
        "Navigated the boat from dock to fishing grounds using GPS and navigation software.",
        "Worked in locations including New Jersey, Massachusetts, California, and Alaska.",
        "Managed seafood processing and sanitation alongside a crew of 7 people.",
        "Certified safety drill instructor and CPR/First Aid certified.",
        "Experience in diesel mechanics."
      ]
    }
  ]
};