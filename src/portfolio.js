/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {getProfileInfo} from "./screpeScholar"
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abu Bakor Hayat Arnob",
  title: "Hi There, I am Arnob",
  subTitle: emoji(
    "An AI researcher. Over the years I have worked on robotics 🤖, Machine-learning UI, Machine Learning and Artificial Intelligence research and application that has an impact on our life. Currently my research focuses on self-supervision, zero/few shot learning and foundation models. I also work with llms."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/learner-codec",
  linkedin: "https://www.linkedin.com/in/ah-arnob-336610241/",
  gmail: "satcarnob@gmail.com",
  facebook: "https://www.facebook.com/satc.arnob/",
  googlescholar: "https://scholar.google.com/citations?user=bHBV5vYAAAAJ",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Interests and Skills",
  subTitle: "Artificial Intelligence (AI), Deep Learning, Machine Learning, Self-Supervision, Weakly-Supervised Learning, Few-Shot/Zero-Shot Learning, Vision Transformers, Computer Vision, Medical Image Analysis, Robotics,Multi-Modal Learning",
  skills: [
    emoji(
      "⚡ Develop highly professional AI software"
    ),
    emoji("⚡ ML research and application"),
    emoji(
      "⚡ Solve complex problem with programming"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};


let publicationInfo;

async function scrape() {
  publicationInfo = await getProfileInfo('2257000252');
  publicationInfo.display = true; 
  localStorage.setItem('publicationInfo', JSON.stringify(publicationInfo));
  localStorage.setItem('lastUpdated', JSON.stringify(new Date())); // Save the date of update
}

async function startServer() {
  await scrape();
  // Rest of your server start code here
}

// Check if data exists in local storage
let storedPublicationInfo = JSON.parse(localStorage.getItem('publicationInfo'));
let lastUpdated = new Date(JSON.parse(localStorage.getItem('lastUpdated')));

if (storedPublicationInfo) {
  // If data is older than a week, update it
  if ((new Date() - lastUpdated) > (24 * 60 * 60 * 1000)) {
    startServer();

  }
} else {
  // If no data in local storage, fetch it
  startServer();
}

// Then set the interval for a week
setInterval(startServer,24 * 60 * 60 * 1000);

// To get data from local storage
publicationInfo = JSON.parse(localStorage.getItem('publicationInfo'));
console.log("local storage", publicationInfo)

// Publication Info
// const publicationInfo = {
//   display: true, // Set false to hide this section, defaults to true
//   publications: [
//     {
//       "title": "publication title",
//       "abstract":"for abstract",
//       "year":"2023"
//     },
//     {
//       "title": "publication title2",
//       "abstract":"for abstract2",
//       "year":"20232"
//     },
//   ]
// };


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nanjing University of Information Science and Technology",
      logo: require("./assets/images/NUIST.png"),
      subHeader: "Master of Science Artificial Intelligence",
      duration: "September 2022 - June 2024",
      desc: "First in the class with an average score of 92%. Took course on Optimization Theory, Computer Vision, Machine Learning, NLP.Worked on Cutting Edge AI solution for pathological Image analysis. At the same time Published 3 papers.",
      descBullets: [
        "Chinese Government Scholarship for foreign students.",
        "Bronze Prize in National AI Innovation LINGANG Cup,Shanghai.",
        "Domestic Affairs Department Debate Champion.",
        "Project Leader for AIMUI.",
      ]
    },
    {
      schoolName: "Huaian Institute of Technology",
      logo: require("./assets/images/hyit.jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2018 - June 2022",
      desc: "Ranked Second in the class with an average score of 89%. Took courses about Software Engineering, Web Security, Operating Systems, C++ programming, Java Programming, Enterprise Software Design, Software Testing.",
      descBullets: ["Worked On robot manipulators(5DOF).",
                    "AI based Garbage Disposal.",
                    "Differential Drive Robot",
                    "Omni-directional robots",
                    "Ackermann steering robots.",
                    "Robot Sensors.",
                    "ROS, Simulation.",
                    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "English(IELTS-7)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Chinese(HSK-4)",
      progressPercentage: "60%"
    },
    {
      Stack: "Bengoli(Native)",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant and Project Leader",
      company: "AIM NUIST",
      companylogo: require("./assets/images/aim.png"),
      date: "Nov 2022– Present",
      desc: "I had the privilage to work under Prof. Jun Xu in his lab AIM-NUIST. AIM-NUIST applies AI to tackle disease detection and medication challenges. I contribute by researching self-supervision, multimodality, and transformers based networks. Additionally, I lead the AIM UI project, building an online framework (JavaScript, Python, Docker) for medical image analysis targeted at the Chinese market.",
      descBullets: [

      ]
    },
    {
      role: "AI algorithm Engineer",
      company: "Jiangshu Kesheng Xuanyi Technology CO,LTD",
      companylogo: require("./assets/images/kesheng.png"),
      date: "2021 – 2022",
      desc: "I have expertise in developing efficient object detection models for edge devices using YOLOv7 and Xception-Net. I optimized these models for speed and accuracy using TensorFlow 2 and ONNX, even for resource-constrained environments. Additionally, I possess Linux administration skills and have developed a C++ API for a Chinese development board for object detection tasks."
    },
    {
      role: "Research Assistant",
      company: "Robotics Research Lab",
      companylogo: require("./assets/images/robotics_research_lab.jpg"),
      date: "2019 – 2021",
      desc: "I worked on several robotics projects under Prof. Mokhtarzadeh. I developed a real-time garbage disposal system using YOLO on Jetson TX2, then built a coffee-making manipulator with ROS and a custom planner. Finally, I constructed a  three self-driving research platform with a differential drive robot controlled by Raspberry Pi and custom driver libraries."
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "A project that I belive has great potential.",
  projects: [
    {
      image: require("./assets/images/aimui.jpg"),
      projectName: "AIM-UI",
      projectDesc: "For AI based Pathological/Natural image training, storage, annotation and analysis platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/learner-codec/AIM_UI/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Only relevant achievents are listed here. Extra can be found inside CV.",

  achievementsCards: [
    {
      title: "Machine Learning Speacialization",
      subtitle:
        "First course on ML",
      image: require("./assets/images/mls.png"),
      imageAlt: "ML Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
      ]
    },
    {
      title: " National AI Innovation LINGANG Cup(Bronze) – Shanghai ",
      subtitle:
        "Artificial Intelligence Competetion. Theme: Detect bone age using 2d MRI image.",
      image: require("./assets/images/competetion.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Will be linked Soon",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "DISCUSS RESEARCH IDEAS OR OPPORTUNITIES? OR JUST SAY HI! MY INBOX IS ALWAYS OPEN FOR ALL",
  number: "+86-13222717990",
  email_address: "satcarnob@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ArnobSatc", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  publicationInfo
};
