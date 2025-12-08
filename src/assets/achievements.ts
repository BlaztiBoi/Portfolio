export type Diploma = {
  type?: "diploma" | "degree"; 
  title: string;
  issuer: string;
  date: string;
  focus?: string;
  image?: string;
  zoomedImage?: string;
  courses?: string[];
  highlights?: string[];
  grades?: string;
};

export type AwardType = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  image?: string;
  zoomedImage?: string;
  highlights?: string[];
};

export const diplomas: Diploma[] = [
  {
    title: "Pearson BTEC Internation Level 3 Foundation Diploma",
    issuer: "GUSTO College",
    date: "2024",
    focus: "Information Technology",
    image: "achievements/leveldiploma.jpg",
    zoomedImage: "achievements/leveldiploma.jpg",
    courses: ["Information Technology Systems", "Website Development", "Using Social Media in Business","Programming" ,"Data Modeling", "Digital Animation and Effects", "Business Process Modeling Tools"],
    highlights: ["Presentations", "Group Projects", "IT Solid Foundation"],
    grades: "DISTINCTION",
  },
  {
    title: "HND Level 4 Computer System Engineering",
    issuer: "GUSTO College",
    date: "2026",
    focus: "More Advance Courses",
    image: "",
    zoomedImage: "",
    courses: ["Programming", "Networking", "Professional Practice", "Database Design and Development","Security","Planning a Computing Project","Software Development Life Cycles","Website Design and Development", "Business Process Support", "Applied Programming with Design Principles" , "Internet of Things", "Computing Research Project", "Data Structure & Algorithm" , "Cloud Computing" , "Information Security"],
    highlights: ["Process redesign workshop", "Stakeholder presentation"],
    grades: "9 Distinctions and 1 Merit 1 Pass ( 4 ungraded )",
  },
    {
    type: "degree",
    title: "BSc (Hons) Computer Systems Engineering",
    issuer: "Sunderland University",
    date: "2028",
    focus: "uk",
    image: "",
    zoomedImage: "",
    courses: [""],
    highlights: ["Coming Soon"],
    grades: "",
  },
];

export const awards: AwardType[] = [
  {
    title: "Level 3 First Prize",
    issuer: "GUSTO College",
    date: "2024",
    note: "Gotten the highest grade in the batch 22 of level 3 class in Gusto College",
    image: "achievements/level3firstplace.jpg",
    zoomedImage: "achievements/leveldiploma.jpg",
    highlights: ["All Distinctions"],
  },
  {
    title: "Website Design Contest",
    issuer: "GUSTO College",
    date: "2025",
    note: `Competed against 4 groups on website design.`,
    image: "achievements/award_webdesigncontestaward.jpg",
    zoomedImage: "achievements/webdesigncontestaward.jpg",
    highlights: ["SuWayYar Project", "UI Design", "Built in 3 Days"],
  },
    {
    title: "IoT People Choice Award",
    issuer: "GUSTO College",
    date: "2025",
    note: `A Group Project of 6 , Won with 50+ People Loving the Idea.`,
    image: "achievements/iotPeopleChoiceaward.jpg",
    zoomedImage: "achievements/AwardiotPeopleChoiceaward.jpg",
    highlights: ["Hygeine Box", "Arduino Cloud", "ESP32" , "AI Thinker ESP32", "Edge Impulse"],
  },

];
