import React, { useEffect, useRef, useState } from "react";

import { leftArrow, rightArrow } from "../assets/img";

const ScrollableTabs = ({ tabs, activeTab, setActiveTab, className  }) => {
    const tabsRef = useRef(null);
     const [colors, setColors] = useState([]);

     useEffect(() => {

         const predefinedColors = [
             "#FF5733",
             "#33FF57",
             "#3357FF",
             "#FF33A5",
             "#A533FF",
             "#FF8C33",
             "#33FFC5",
             "#8C33FF",
             "#FF3385",
             "#33FF95",
         ];
         const initialColors = tabs.map(
             (_, index) => predefinedColors[index % predefinedColors.length]
         );
         setColors(initialColors);
     }, [tabs]);


    const handleTabClick = (tab) => {
        const tabElement = tabsRef.current.querySelector(
            `[data-tab="${tab.value}"]`
        );
        tabElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });
        setActiveTab(tab.value);
    };


    const handleNextTab = () => {
        const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
        const nextTab = tabs[currentIndex + 1];

        if (nextTab) {
            const tabElement = tabsRef.current.querySelector(
                `[data-tab="${nextTab.value}"]`
            );
            tabElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
            setActiveTab(nextTab.value);
        }
    };


    const handlePrevTab = () => {
        const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
        const prevTab = tabs[currentIndex - 1];

        if (prevTab) {
            const tabElement = tabsRef.current.querySelector(
                `[data-tab="${prevTab.value}"]`
            );
            tabElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
            setActiveTab(prevTab.value);
        }
    };



    return (
        <div className="tabs-container">
            <div className="cursor-pointer" onClick={handlePrevTab}>
                <img
                    src={leftArrow}
                    className="h-8 w-6 mr-3"
                    alt="Left Arrow"
                />
            </div>
            <ul className="tabs" ref={tabsRef}>
                {tabs.map((tab, index) => (
                    <li
                        key={tab.value}
                        className={`tab  ${className} ${
                            activeTab === tab.value ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(tab)}
                        data-tab={tab.value}
                    >
                        <div>{tab.icon}</div>
                        <div className="flex gap-2 items-center ">
                            {tab.label}
                            {tab.qty &&
                                <span
                                    className="px-[4px] w-[22px] py-[2px] text-white rounded-lg text-xs font-light"
                                    style={{ backgroundColor: colors[index] }}
                                >
                                    {tab.qty}
                                </span>
                            }
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cursor-pointer" onClick={handleNextTab}>
                <img
                    src={rightArrow}
                    className="h-8 w-6 ml-3"
                    alt="Right Arrow"
                />
            </div>
        </div>
    );
};

export default ScrollableTabs;
