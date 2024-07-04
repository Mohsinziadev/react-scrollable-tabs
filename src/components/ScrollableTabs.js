import React, { useRef } from "react";

import { leftArrow, rightArrow } from "../assets/img";

const ScrollableTabs = ({ tabs, activeTab, setActiveTab, className }) => {
    const tabsRef = useRef(null);

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
                {tabs.map((tab) => (
                    <li
                        key={tab.value}
                        className={`tab  ${className} ${
                            activeTab === tab.value ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(tab)}
                        data-tab={tab.value}
                    >
                        <div>{tab.icon}</div>
                        <div>{tab.label}</div>
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
