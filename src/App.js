import { useState } from "react";
import ScrollableTabs from "./components/ScrollableTabs";
import { TbReportSearch } from "react-icons/tb";
import { CgDisplayGrid } from "react-icons/cg";
import { FaFileContract } from "react-icons/fa";
import { PiLineSegmentsDuotone } from "react-icons/pi";
import { IoDocumentAttach } from "react-icons/io5";
import { MdAutoStories } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GiRugbyConversion } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";

import { FiUserCheck, FiSettings } from "react-icons/fi";
import { FaChartLine, FaProjectDiagram } from "react-icons/fa";
import { BiTask, BiSupport } from "react-icons/bi";
import { MdDashboard, MdNotificationsActive } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";

import {
    GiTreasureMap,
    GiArtificialIntelligence,
    GiRadarSweep,
} from "react-icons/gi";

function App() {
    let [activeTab, setActiveTab] = useState("IntractiveReports");
        let [activeTab1, setActiveTab1] = useState("UserManagement");
    // Your tab list


const tabsList = [
    {
        value: "UserManagement",
        label: "User Management",
        icon: <FiUserCheck className="h-10 w-10" />,
    },
    {
        value: "Settings",
        label: "Settings",
        icon: <FiSettings className="h-10 w-10" />,
    },
    {
        value: "Exploration",
        label: "Exploration",
        icon: <GiArtificialIntelligence className="h-10 w-10" />,
    },
    {
        value: "Projects",
        label: "Projects",
        icon: <FaProjectDiagram className="h-10 w-10" />,
    },
    {
        value: "Tasks",
        label: "Tasks",
        icon: <BiTask className="h-10 w-10" />,
    },
    {
        value: "Support",
        label: "Support",
        icon: <BiSupport className="h-10 w-10" />,
    },
    {
        value: "Dashboard",
        label: "Dashboard",
        icon: <MdDashboard className="h-10 w-10" />,
    },
    {
        value: "Notifications",
        label: "Notifications",
        icon: <MdNotificationsActive className="h-10 w-10" />,
    },
    {
        value: "Chat",
        label: "Chat",
        icon: <IoMdChatbubbles className="h-10 w-10" />,
    },
];
    const tabs = [
        {
            value: "IntractiveReports",
            label: "Intractive Reports ",
            icon: <TbReportSearch className="h-10 w-10" />,
            qty: 14,
        },
        {
            value: "PlayGround",
            label: "PlayGround",
            icon: <CgDisplayGrid className="h-10 w-10" />,
        },
        {
            value: "FileChanges",
            label: "File Changes",
            icon: <FaFileContract className="h-10 w-10" />,
            qty: 10,
        },
        {
            value: "LimitLessSegementation",
            label: "LimitLess Segementation",
            icon: <PiLineSegmentsDuotone className="h-10 w-10" />,
        },
        {
            value: "Docunmentation",
            label: "Docunmentation",
            icon: <IoDocumentAttach className="h-10 w-10" />,
        },
        {
            value: "CustomerStories",
            label: "Customer Stories",
            icon: <MdAutoStories className="h-10 w-10" />,
        },
        {
            value: "GroupAnaytics",
            label: "Group Anaytics",
            icon: <TbBrandGoogleAnalytics className="h-10 w-10" />,
        },
        {
            value: "Conversion",
            label: "Conversion",
            icon: <GiRugbyConversion className="h-10 w-10" />,
        },
        {
            value: "Portals",
            label: "Portals",
            icon: <AiFillCustomerService className="h-10 w-10" />,
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="max-w-6xl w-[90%] px-12 mx-auto relative mt-20 border rounded-xs ">
                    <ScrollableTabs
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        className="flex flex-col gap-2  items-center justify-center"
                    />
                </div>
                <div className="flex items-center justify-center mt-10 text-lg ">
                    <span className="font-light  text-gray-400  pr-2">
                        Selected Item :
                    </span>
                    {activeTab}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="max-w-6xl w-[90%] px-12 mx-auto relative mt-20 border rounded-xs ">
                    <ScrollableTabs
                        tabs={tabsList}
                        activeTab={activeTab1}
                        setActiveTab={setActiveTab1}
                        className="flex flex-row gap-2  items-center justify-center"
                    />
                </div>
                <div className="flex items-center justify-center mt-10 text-lg ">
                    <span className="font-light  text-gray-400  pr-2">
                        Selected Item :
                    </span>
                    {activeTab1}
                </div>
            </div>
        </div>
    );
}

export default App;
