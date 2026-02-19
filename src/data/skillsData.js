import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs, FaPhp, FaNodeJs, FaPython, FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiExpress, SiFlask, SiMysql, SiPostgresql, SiSqlite, SiMongodb } from 'react-icons/si';
import { HiOutlineCode, HiOutlineDatabase, HiOutlineTemplate } from 'react-icons/hi';

/**
 * Updated Skills Data with Font Awesome & Simple Icons
 */
export const skillsData = [
  {
    category: "Frontend Development",
    icon: HiOutlineTemplate,
    skills: [
      { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Bootstrap", level: 85, icon: FaBootstrap, color: "#7952B3" },
      { name: "TailwindCSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "jQuery", level: 75, icon: SiJquery, color: "#0769AD" },
      { name: "SCSS", level: 80, icon: FaSass, color: "#CC6699" }
    ]
  },
  {
    category: "Backend & Frameworks",
    icon: HiOutlineCode,
    skills: [
      { name: "PHP", level: 85, icon: FaPhp, color: "#777BB4" },
      { name: "NodeJS", level: 80, icon: FaNodeJs, color: "#339933" },
      { name: "ExpressJS", level: 75, icon: SiExpress, color: "#ffffff" },
      { name: "Python", level: 80, icon: FaPython, color: "#3776AB" },
      { name: "Flask", level: 70, icon: SiFlask, color: "#ffffff" }
    ]
  },
  {
    category: "Database & Tools",
    icon: HiOutlineDatabase,
    skills: [
      { name: "MySQL", level: 90, icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLite", level: 85, icon: SiSqlite, color: "#003B57" },
      { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" }
    ]
  }
];