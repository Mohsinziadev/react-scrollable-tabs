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

function App() {
    let [activeTab, setActiveTab] = useState("IntractiveReports");
    // Your tab list
    const tabs = [
        {
            value: "IntractiveReports",
            label: "Intractive Reports ",
            icon: <TbReportSearch className="h-10 w-10" />,
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
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        className="flex flex-row gap-2  items-center justify-center"
                    />
                </div>
                <div className="flex items-center justify-center mt-10 text-lg ">
                    <span className="font-light  text-gray-400  pr-2">
                        Selected Item :
                    </span>
                    {activeTab}
                </div>
            </div>
        </div>
    );
}

export default App;
