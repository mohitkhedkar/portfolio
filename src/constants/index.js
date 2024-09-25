import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/gitAuto.png";
import project3 from "../assets/projects/studentAttendance.png";
import project4 from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2+ years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB.`;

// My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2+ years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  // Sample
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
    codeLink: "https://github.com/mohitkhedkar/portfolio",
    liveLink: "https://portfolio-mohitkhedkar.vercel.app/",
  },
  {
    title: " Git Project Initialization Automation ",
    image: project2,
    description:
      "A command line interface (CLI) for automation of new project git initialization",
    technologies: ["Python", "Github", "Github API", "Git"],
    codeLink: "https://github.com/mohitkhedkar/Git-Automation",
    liveLink: "https://github.com/mohitkhedkar/Git-Automation",
  },
  {
    title: "React Projects",
    image: project1,
    description: "Bunch of projects using react framework.",
    technologies: ["Javascript", "React", "Tailwind CSS"],
    codeLink: "https://react-mini-projects-one.vercel.app/",
    liveLink: "https://github.com/mohitkhedkar/react-projects",
  },
  {
    title: "Student Attendance Management system ",
    image: project3,
    description:
      "This project aims to ease out the manual attendance taking process in Schools/Colleges.An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["PHP", "CSS", "Javascript", "MySQL"],
    codeLink:
      "https://github.com/mohitkhedkar/Student-Attendance-Management-System",
    liveLink:
      "https://github.com/mohitkhedkar/Student-Attendance-Management-System",
  },
];

export const CONTACT = {
  phoneNo: "+91 9156804328",
  email: "mohitkhedkar521@gmail.com",
};
