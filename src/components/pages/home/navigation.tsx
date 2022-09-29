import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineProject, AiOutlineTeam } from "react-icons/ai";
import { BsCalendarWeek } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const navigation = [
  {
    name: "Team",
    href: "#",
    icons: <AiOutlineTeam />,
  },
  {
    name: "Projects",
    href: "#",
    icons: < AiOutlineProject />,
  },
  {
    name: "Calendar",
    href: "#",
    icons: <BsCalendarWeek />,
  },
  {
    name: "Log Out",
    href: "#",
    icons: <FiLogOut />,
  },
];

export default navigation;
