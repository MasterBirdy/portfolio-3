import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaSass,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMaterialUi,
  SiGatsby,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiNginx } from "react-icons/di";

const technologyArray = [
  { className: "html5", component: FaHtml5 },
  { className: "css3", component: FaCss3Alt },
  { className: "javascript", component: SiJavascript },
  { className: "sass", component: FaSass },
  { className: "vue", component: FaVuejs },
  { className: "react", component: FaReact },
  { className: "node", component: FaNodeJs },
  { className: "python", component: FaPython },
  { className: "material", component: SiMaterialUi },
  { className: "mysql", component: GrMysql },
  { className: "mongodb", component: SiMongodb },
  { className: "nginx", component: DiNginx },
  { className: "git", component: FaGitAlt },
  { className: "gatsby", component: SiGatsby },
];

export default technologyArray;
