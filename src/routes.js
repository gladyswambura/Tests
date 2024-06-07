import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import BotStudio from "views/admin/BotStudio";
import BotVisitors from "views/admin/BotVisitors";
import ReportView from "views/admin/ReportView";
import Messages from "views/admin/Messages";
import UpgradeMe from "views/admin/UpgradeMe";
import Profile from "views/admin/profile";
import AddNodeForm from "./components/nodes/add-node"; 


// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdMessage,
  MdReportGmailerrorred,
  MdOutlineUpgrade,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Bot Studio",
    layout: "/admin",
    path: "bot-studio",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <BotStudio />,
    secondary: true,
  },
  {
    name: "Bot Visitors",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "bot-visitors",
    component: <BotVisitors />,
  },
  {
    name: "Report View",
    layout: "/admin",
    icon: <MdReportGmailerrorred className="h-6 w-6" />,
    path: "report-view",
    component: <ReportView />,
  },
  {
    name: "Messages",
    layout: "/admin",
    path: "messages",
    icon: <MdMessage className="h-6 w-6" />,
    component: <Messages />,
  },
  {
    name: "Upgrade Me",
    layout: "/admin",
    path: "upgrade me",
    icon: <MdOutlineUpgrade className="h-6 w-6" />,
    component: <UpgradeMe />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Add Node",
    layout: "/admin",
    path: "bot-studio/add-node",
    component: <AddNodeForm />, 
    hidden: true, 
  },
];
export default routes;
