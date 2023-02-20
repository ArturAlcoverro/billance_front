import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";
import ChartBarSquareIcon from "@heroicons/react/24/outline/ChartBarSquareIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import ObjectiveIcon from "../assets/icons/ObjectiveIcon";

export default [
  {
    href: "/",
    label: "Dashboard",
    icon: ChartBarSquareIcon,
  },
  {
    href: "/records",
    label: "Records",
    icon: ListBulletIcon,
  },
  {
    href: "/categories",
    label: "Categories",
    icon: Squares2X2Icon,
  },
  {
    href: "/objectives",
    label: "Objectives",
    icon: ObjectiveIcon,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Cog6ToothIcon,
  },

];
