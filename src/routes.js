import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default";
import BotStudio from "./views/admin/BotStudio";
import BotVisitors from "./views/admin/BotVisitors";
import ReportView from "./views/admin/ReportView";
import Messages from "./views/admin/Messages";
import UpgradeMe from "./views/admin/UpgradeMe";
import Profile from "./views/admin/profile";
import SignIn from "./layouts/auth/index";

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
import Admin from "layouts/admin";


const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: (
      <Admin>
        <MainDashboard />
      </Admin>
    ),
  },

  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/channel",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: (
      <Admin>
        <Channel />
      </Admin>
    ),
  },
  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/add-booking",
    component: (
      <Admin>
        <AddBooking />
      </Admin>
    ),
  },
  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/add-convo",
    component: (
      <Admin>
        <AddConvo />
      </Admin>
    ),
  },

  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/create-bookings",
    component: (
      <Admin>
        <CreateBookings />
      </Admin>
    ),
  },
  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/custom-form",
    component: (
      <Admin>
        <CustomForm />
      </Admin>
    ),
  },
  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/development-table",
    component: (
      <Admin>
        <DevelopmentTable />
      </Admin>
    ),
  },
  {
    name: "channel",
    layout: "/admin",
    show: true,
    path: "bot-studio/review-convo",
    component: (
      <Admin>
        <ReviewConvo />
      </Admin>
    ),
  },
  {
    name: "Bot Studio",
    layout: "/admin",
    path: "bot-studio",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: (
      <Admin>
        <BotStudio />
      </Admin>
    ),
    secondary: true,
    children: [
      // {
      //   path: "add-booking",
      //   component: (
      //     <Admin>
      //       <AddBooking />
      //     </Admin>
      //   ),
      // },
      // {
      //   path: "add-convo",
      //   component: (
      //     <Admin>
      //       <AddConvo />
      //     </Admin>
      //   ),
      // },
      // // {
      // //   name: "channel",
      // //   path: "channel",
      // //   component: (
      // //     <Admin>
      // //       <Channel />
      // //     </Admin>
      // //   ),
      // // },
      // {
      //   path: "create-bookings",
      //   component: (
      //     <Admin>
      //       <CreateBookings />
      //     </Admin>
      //   ),
      // },
      // {
      //   path: "custom-form",
      //   component: (
      //     <Admin>
      //       <CustomForm />
      //     </Admin>
      //   ),
      // },
      // {
      //   path: "development-table",
      //   component: (
      //     <Admin>
      //       <DevelopmentTable />
      //     </Admin>
      //   ),
      // },
      // {
      //   path: "review-convo",
      //   component: (
      //     <Admin>
      //       <ReviewConvo />
      //     </Admin>
      //   ),
      // },
    ],
  },
  {
    name: "Bot Visitors",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "bot-visitors",
    component: (
      <Admin>
        <BotVisitors />
      </Admin>
    ),
  },
  {
    name: "Report View",
    layout: "/admin",
    icon: <MdReportGmailerrorred className="h-6 w-6" />,
    path: "report-view",
    component: (
      <Admin>
        <ReportView />
      </Admin>
    ),
  },
  {
    name: "Messages",
    layout: "/admin",
    path: "messages",
    icon: <MdMessage className="h-6 w-6" />,
    component: (
      <Admin>
        <Messages />
      </Admin>
    ),
  },
  {
    name: "Upgrade Me",
    layout: "/admin",
    path: "upgrade-me",
    icon: <MdOutlineUpgrade className="h-6 w-6" />,
    component: (
      <Admin>
        <UpgradeMe />
      </Admin>
    ),
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: (
      <Admin>
        <Profile />
      </Admin>
    ),
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "signin",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];

export default routes;
