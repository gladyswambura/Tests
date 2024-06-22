import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
import BotStudio from "./views/admin/BotStudio";
import BotVisitors from "./views/admin/BotVisitors";
import ReportView from "./views/admin/ReportView";
import Messages from "./views/admin/Messages";
import UpgradeMe from "./views/admin/UpgradeMe";
import Profile from "./views/admin/profile";
import SignIn from "./views/auth/SignIn";

// Bot Studio Components
import AddBooking from "./views/admin/BotStudio/components/addBooking";
import AddConvo from "./views/admin/BotStudio/components/addConvo";
import Channel from "./views/admin/BotStudio/components/channel";
import CreateBookings from "./views/admin/BotStudio/components/createBookings";
import CustomForm from "./views/admin/BotStudio/components/customForm";
import DevelopmentTable from "./views/admin/BotStudio/components/DevelopmentTable";
import ReviewConvo from "./views/admin/BotStudio/components/reviewConvo";

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
    name: "Channel",
    layout: "/admin",
    path: "channel",
    icon: <MdHome className="h-6 w-6" />,
    component: <Channel />,
  },
  {
    name: "Bot Studio",
    layout: "/admin",
    path: "bot-studio/",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <BotStudio />,
    secondary: true,
    children: [
      {
        path: "add-booking",
        component: <AddBooking />,
      },
      {
        path: "add-convo",
        component: <AddConvo />,
      },
      {
        name: "channel",
        path: "/channel",
        component: <Channel />,
      },
      {
        path: "create-bookings",
        component: <CreateBookings />,
      },
      {
        path: "custom-form",
        component: <CustomForm />,
      },
      {
        path: "development-table",
        component: <DevelopmentTable />,
      },
      {
        path: "review-convo",
        component: <ReviewConvo />,
      },
    ],
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
    path: "upgrade-me",
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
];

export default routes;
