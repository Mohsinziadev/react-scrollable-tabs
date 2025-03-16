import React, { useEffect, useRef, useState } from "react";

const ScrollableTabs = ({
    tabs,
    activeTab,
    setActiveTab,
    activeColor,
    lineColor,
    className,
    position,
    displayArrows,
    leftArrow,
    rightArrow,
}) => {
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
        <div
            className="mt-[12px] flex items-center"
            style={{
                borderColor: lineColor || "gray",
                borderBottomWidth: position === "Horizontal" ? "2px" : "0px",
            }}
        >
            {displayArrows && position === "Horizontal" && (
                <div className="cursor-pointer" onClick={handlePrevTab}>
                    <img
                        src={leftArrow}
                        className="h-10 w-10 mr-10"
                        alt="Left Arrow"
                    />
                </div>
            )}

            <ul
                className={`tabs  ${
                    position === "Horizontal"
                        ? "flex flex-row  "
                        : "flex flex-col"
                }`}
                ref={tabsRef}
            >
                {tabs.map((tab, index) => (
                    <li
                        key={tab.value}
                        className={`tab flex !justify-start ${className}`}
                        onClick={() => handleTabClick(tab)}
                        data-tab={tab.value}
                        style={{
                            fontWeight:
                                activeTab === tab.value ? 600 : "normal",
                            color:
                                activeTab === tab.value
                                    ? activeColor
                                    : "inherit",
                            borderBottom:
                                activeTab === tab.value
                                    ? `2px solid ${activeColor}`
                                    : "none",
                        }}
                    >
                        <div>{tab.icon}</div>
                        <div className="flex gap-2 items-center text-[12px] font-light ">
                            {tab.label}
                            {tab.qty && (
                                <span
                                    className="p-[2px] h-[16px] w-[16px] text-white rounded-full items-center justify-center flex text-[8px] font-light"
                                    style={{ backgroundColor: tab?.qty?.color }}
                                >
                                    {tab?.qty?.value}
                                </span>
                            )}
                        </div>
                    </li>
                ))}
                {position === "vertical" && (
                    <div className="flex gap-4">
                        <div
                            className="cursor-pointer border bg-green p-2 "
                            onClick={handlePrevTab}
                        >
                            <img
                                src={rightArrow}
                                className="h-6 w-6 -rotate-90"
                                alt="Left Arrow"
                            />
                        </div>
                        <div
                            className="cursor-pointer border bg-green p-2 "
                            onClick={handleNextTab}
                        >
                            <img
                                src={leftArrow}
                                className="h-6 w-6 -rotate-90"
                                alt="Left Arrow"
                            />
                        </div>
                    </div>
                )}
            </ul>

            {displayArrows && position === "Horizontal" && (
                <div className="cursor-pointer" onClick={handleNextTab}>
                    <img
                        src={rightArrow}
                        className="h-10 w-10 ml-6"
                        alt="Right Arrow"
                    />
                </div>
            )}
        </div>
    );
};

export default ScrollableTabs;
