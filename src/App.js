import { useState } from "react";
import ScrollableTabs from "./components/ScrollableTabs";
import { CgDisplayGrid } from "react-icons/cg";
import { FaFileContract } from "react-icons/fa";
import { PiLineSegmentsDuotone } from "react-icons/pi";
import { IoDocumentAttach } from "react-icons/io5";
import { MdAutoStories } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GiRugbyConversion } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";
import leftArowIcon from "./assets/img/leftArrow.svg";
import rightArrowIcon from "./assets/img/RightArrow.svg";
import { TbReportSearch } from "react-icons/tb";
import ReportIcon from "./assets/img/HorizontalIcons/ReportIcon.svg";
import playgroundIcon from "./assets/img/HorizontalIcons/playground.svg";
import fileChangeIcon from "./assets/img/HorizontalIcons/fileChangeIcon.svg";
import segmentIcon from "./assets/img/HorizontalIcons/segmentIcon.svg";
import documentIcon from "./assets/img/HorizontalIcons/DocumentIcon.svg";
import storiesicon from "./assets/img/HorizontalIcons/storiesIcon.svg";
import revinueIcon from "./assets/img/HorizontalIcons/revinueIcon.svg";
import conversionIcon from "./assets/img/HorizontalIcons/conversionIcon.svg";
import portalIcon from "./assets/img/HorizontalIcons/portalIcon.svg";


function App() {
    let [activeTab, setActiveTab] = useState("IntractiveReports");
    let [activeTab1, setActiveTab1] = useState("UserManagement");
    let [selectedtab, setSelectedTab] = useState("Horizontal");

    let [activeTabQTY, setActiveTabQTY] = useState("UserManagement");

    const tabsWithoutQTY = [
        {
            value: "IntractiveReports",
            label: "Intractive Reports ",
            icon: <img src={ReportIcon} className="h-[1.5rem] w-[1.5rem]" />,
        },
        {
            value: "PlayGround",
            label: "PlayGround",
            icon: (
                <img src={playgroundIcon} className="h-[1.5rem] w-[1.5rem]" />
            ),
        },
        {
            value: "FileChanges",
            label: "File Changes",
            icon: (
                <img src={fileChangeIcon} className="h-[1.5rem] w-[1.5rem]" />
            ),
        },
        {
            value: "Segementation",
            label: "Segementation",
            icon: <img src={segmentIcon} className="h-[1.5rem] w-[1.5rem]" />,
        },
        {
            value: "Docunmentation",
            label: "Docunmentation",
            icon: <img src={documentIcon} className="h-[1.5rem] w-[1.5rem]" />,
        },
        {
            value: "CustomerStories",
            label: "Customer Stories",
            icon: <img src={storiesicon} className="h-[1.5rem] w-[1.5rem]" />,
        },
        {
            value: "GroupAnaytics",
            label: "Group Anaytics",
            icon: <img src={revinueIcon} className="h-[1.5rem] w-[1.5rem]" />,
        },
        {
            value: "Conversion",
            label: "Conversion",
            icon: (
                <img src={conversionIcon} className="h-[1.5rem] w-[1.5rem]" />
            ),
        },
        {
            value: "Portals",
            label: "Portals",
            icon: <img src={portalIcon} className="h-[1.5rem] w-[1.5rem]" />,
        },
    ];
    const tabs = [
        {
            value: "IntractiveReports",
            label: "Interactive Reports",
            icon: <TbReportSearch className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#66B3FF", value: "10" }, // Light Blue (this color works well with white text)
        },
        {
            value: "PlayGround",
            label: "PlayGround",
            icon: <CgDisplayGrid className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#FF4081", value: "10" }, 
        },
        {
            value: "FileChanges",
            label: "File Changes",
            icon: <FaFileContract className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#FF7043", value: "22" }, 
        },
        {
            value: "Segementation",
            label: "Segmentation",
            icon: <PiLineSegmentsDuotone className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#66BB6A", value: "34" },
        },
        {
            value: "Documentation",
            label: "Documentation",
            icon: <IoDocumentAttach className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#7B8D3C", value: "06" },
        },
        {
            value: "CustomerStories",
            label: "Customer Stories",
            icon: <MdAutoStories className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#FF9800", value: "11" },
        },
        {
            value: "GroupAnalytics",
            label: "Group Analytics",
            icon: <TbBrandGoogleAnalytics className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#26C6DA", value: "54" }, 
        },
        {
            value: "Conversion",
            label: "Conversion",
            icon: <GiRugbyConversion className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#FBC02D", value: "62" }, 
        },
        {
            value: "Portals",
            label: "Portals",
            icon: <AiFillCustomerService className="h-[1.8rem] w-[1.8rem]" />,
            qty: { color: "#81D4FA", value: "12" },
        },
    ];

    return (
        <div className="flex w-full justify-center items-center pb-20 ">
            <div className="flex flex-col max-w-[1200px] gap-0">
                <div className="flex py-10 gap-4 items-center justify-center ">
                    <h3 className="font-normal text-[14px] ">
                        Set the Position of React-Smooth-Tabs:
                    </h3>
                    <div className="flex  border rounded-md">
                        <button
                            onClick={() => setSelectedTab("Horizontal")}
                            className={`flex px-4 py-2 rounded-tl-md rounded-bl-md shadow-lg font-normal items-center text-[12px] ${
                                selectedtab === "Horizontal"
                                    ? "bg-[#dd7973] text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            Horizontal
                        </button>
                        <button
                            onClick={() => setSelectedTab("vertical")}
                            className={`flex px-4 py-2 rounded-tr-md rounded-br-md shadow-lg  items-center text-[12px] ${
                                selectedtab === "vertical"
                                    ? "bg-[#dd7973] text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            Vertical
                        </button>
                    </div>
                </div>
                {selectedtab === "Horizontal" ? (
                    <div className="flex flex-col">
                        <div>
                            <div className="flex justify-between px-16">
                                <div className="flex items-center justify-center mt-10 text-lg text-[14px] ">
                                    <span className="font-light text-[16px]   pr-2">
                                        Horizontal Tabs without Quantity
                                    </span>
                                </div>
                                <div className="flex items-center justify-center mt-10  text-[14px] ">
                                    <span className="font-light  pr-2">
                                        Selected Item :
                                    </span>
                                    <div className="text-gray-400">
                                        {activeTab}
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-6xl w-[90%] px-12 mx-auto relative mt-2 border rounded-xs ">
                                <ScrollableTabs
                                    tabs={tabsWithoutQTY}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    activeColor="#008080"
                                    // lineColor="#008080"
                                    position="Horizontal"
                                    displayArrows={true}
                                    leftArrow={leftArowIcon}
                                    rightArrow={rightArrowIcon}
                                    className="flex flex-col gap-2  items-center justify-center"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between px-16 mt-10">
                                <div className="flex items-center justify-center mt-10 text-lg text-[14px] ">
                                    <span className="font-light text-[16px] pr-2">
                                        Horizontal Tabs with Quantity
                                    </span>
                                </div>
                                <div className="flex items-center justify-center mt-10 text-[14px] ">
                                    <span className="font-light     pr-2">
                                        Selected Item :
                                    </span>
                                    <div className="text-gray-400">
                                        {activeTabQTY}
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-6xl w-[90%] px-12 mx-auto relative mt-2 border rounded-xs ">
                                <ScrollableTabs
                                    tabs={tabs}
                                    activeTab={activeTabQTY}
                                    setActiveTab={setActiveTabQTY}
                                    activeColor="#6A67BF"
                                    // lineColor="#6A67BF"
                                    position="Horizontal"
                                    displayArrows={true}
                                    leftArrow={leftArowIcon}
                                    rightArrow={rightArrowIcon}
                                    className="flex flex-col gap-2  items-center justify-center"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4">
                        <div className="max-w-6xl  px-12 mx-auto relative mt-2 border rounded-xs ">
                            <ScrollableTabs
                                tabs={tabsWithoutQTY}
                                activeTab={activeTab1}
                                setActiveTab={setActiveTab1}
                                activeColor="#008080"
                                lineColor="#008080"
                                displayArrows={true}
                                leftArrow={leftArowIcon}
                                rightArrow={rightArrowIcon}
                                position="vertical"
                                className="flex flex-row gap-2  items-center justify-center"
                            />
                        </div>
                        <div className="flex w-[20rem] items-center justify-center mt-10 text-[14px] ">
                            <span className="font-light min-w-fit text-gray-400  pr-2">
                                Selected Item :
                            </span>
                            {activeTab1}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
