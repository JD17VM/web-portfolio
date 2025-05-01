const pageData = {

    job: "Full-Stack Developer",

    data: {
        dateBirth: "17 April 2002",
        country: "Peru",
        github: "github.com/JD17VM",
        gmail: "jdiegodiego4@gmail.com",
    },

    title: {
        about: "ABOUT ME",
        interests: "INTERESTS",
        experience: "Experience",
        education: "Education",
        courses: "Courses",
        languages: "Languages",
        tools: "Tools",
        projects: "PROJECTS"
    },

    about: "Since a young age, programming has been my passion. I've had the opportunity to dive into software development and teach programming. I specialize in both backend and frontend web development, working with a variety of technologies and quickly adapting to new tools. <br/> <br/> My versatility allows me to solve complex challenges and deliver highquality solutions. I'm driven by the constant evolution of the tech world, always eager to learn and implement innovations. Whether collaborating with teams or working independently, my goal is to grow both technically and professionally while contributing to meaningful projects.",

    interests: "I am seeking to join a company that challenges me with new opportunities, as I have the ability to tackle them effectively. I am committed to continuous learning and development, ensuring that I remain adaptable in a dynamic work environment and consistently deliver innovative solutions.",

    experience: [
        {
            startYear: "2023",
            startMonth: "Feb",
            endYear: "present",
            endMonth: "",
            roleCompany: "Full-Stack Job & Hybrid Work Mode - JPAWAJ SAC",
            description: [
            `Developed and implemented interactive, responsive user interfaces using HTML, CSS, and JavaScript, ensuring a smooth and efficient user experience.`,
            `Designed the user interface and user experience (UI/UX) from scratch, focusing on improving usability and overall visual appeal.`,
            `Developed and maintained backend functionality using PHP with the Laravel framework, handling server-side logic and database integration.`,
            `Designed and deployed the database, optimizing data queries.`,
            ],
            skills: ["JavaScript", "Node.js", "React", "JSX", "PHP", "Laravel", "MySQL", "Docker", "CSS", "HTML",  "Git", "Github"]
        },

        {
            startYear: "2021",
            startMonth: "Feb",
            endYear: "2023",
            endMonth: "Apr",
            roleCompany: "Back-End Developer & Hybrid Work Mode - JPAWAJ SAC",
            description: [
            `Developed and implemented interactive, responsive user interfaces using HTML, CSS, and JavaScript, ensuring a smooth and efficient user experience.`,
            `Designed the user interface and user experience (UI/UX) from scratch, focusing on improving usability and overall visual appeal.`,
            `Developed and maintained backend functionality using PHP with the Laravel framework, handling server-side logic and database integration.`,
            `Designed and deployed the database, optimizing data queries.`,
            ],
            skills: ["PHP", "Laravel", "PhpWord",  "MySQL", "Git", "Github"]
        },

        {
            startYear: "2024",
            startMonth: "Aug",
            endYear: "2024",
            endMonth: "Oct",
            roleCompany: "Full-Stack Job & Remote Work - Operaciones Topográficas y Agrimensuras (OTyM)",
            description: [
            `Developed and implemented interactive, responsive user interfaces using HTML, CSS, and JavaScript, ensuring a smooth and efficient user experience.`,
            `Designed the user interface and user experience (UI/UX) from scratch, focusing on improving usability and overall visual appeal.`,
            `Developed and maintained backend functionality using PHP with the Laravel framework, handling server-side logic and database integration.`,
            `Designed and deployed the database, optimizing data queries.`,
            ],
            skills: ["PHP", "Laravel", "PhpWord",  "MySQL", "Git", "Github"]
        },
    ],

    education: {
        career: "Computer Science",
        university: "San Agustin National University Arequipa",
        year: "fifth year",
    },

    courses: [
    {
        course: "Applications in Artificial Intelligence AI",
        institution: "Universidad Continental",
    },

    {
        course: "Cambridge English Entry Level Certificate in ESOL",
        institution: "International - University of Cambridge",
    },
    ],

    languages: [
        {
            language: "Spanish",
            level: "Native",
        },
        {
            language: "English",
            level: "Proficient",
        },
        {
            language: "Portuguese",
            level: "Intermediate",
        },
    ],

    projects : [
        {
            img : "./imgs/projects/moliplast_web.png", 
            date : "2025", 
            title : "Moliplast Web", 
            description : "Single Page Application (SPA) developed with React.js and SCSS for a dynamic frontend experience, seamlessly integrated with a Laravel REST API backend.", 
            skills : ["JavaScript", "Node.js", "React", "JSX", "PHP", "Laravel", "MySQL", "CSS", "HTML"],
            link: "https://github.com/JD17VM/moliplast-web"
        },
        {
            img : "./imgs/projects/dynamic_video_generator.png", 
            date : "2024", 
            title : "Dynamic Product Video Generator", 
            description : "Web application that converts product information into professional marketing videos using Remotion. Features an intuitive form interface to generate dynamic product showcase videos with custom transitions and overlays.", 
            skills : ["JavaScript", "Node.js", "React", "Remotion", "JSX"],
            link: "https://github.com/JD17VM/dynamic-product-video-generator"
        },
        {
            img : "./imgs/projects/ll_aa.png", 
            date : "2024", 
            title : "Launch Lab and Arrow Ascend Web", 
            description : "This website showcases two immersive VR projects and the development process behind them, with a focus on proper interface design.", 
            skills : ["JavaScript", "Node.js", "React", "Remotion", "JSX"],
            link: "https://github.com/JD17VM/launchlab-vr-arrowascend-web"
        },
        {
            img : "./imgs/projects/dbms_hdd.png", 
            date : "2024", 
            title : "DBMS Hard Disk Simulator", 
            description : "Simulation of a Database Management System (DBMS) interacting with a simulated Hard Disk Drive (HDD), including low-level details like platters, tracks, sectors, blocks, and a buffer manager.", 
            skills : ["C","C++", "Graphviz"],
            link: "https://github.com/JD17VM/dbms-hard-disk-simulator"
        },
        {
            img : "./imgs/projects/md_to_latex.png", 
            date : "2023", 
            title : "Markdown to Latex Converter", 
            description : "This project provides a tool designed to interpret text written in Markdown syntax like headers, lists, emphasis and links, then it generates well-structured LaTeX source code.", 
            skills : ["C","C++"],
            link: "https://github.com/JD17VM/markdown-to-latex-converter"
        },
    ],

    scale: {
        left_col_width: 0, //%
        right_col_row_gap: 0, //pt
    }
}

export default pageData;