import React, { useEffect, useRef, useState } from "react";

const ScrollableTabs = ({
    tabs,
    activeTab,
    setActiveTab,
    className,
    position,
    displayArrows,
    leftArrow,
    rightArrow,
}) => {
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
        <div
            className={`mt-[12px] flex items-center ${
                position === "Horizontal"
                    ? "border-b border-gray-500"
                    : "border-none"
            }`}
        >
            {displayArrows && position === "Horizontal" && (
                <div className="cursor-pointer" onClick={handlePrevTab}>
                    <img
                        src={leftArrow}
                        className="h-10 w-10 mr-10 rotate-180"
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
                        className={`tab flex !justify-start ${className} ${
                            activeTab === tab.value ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(tab)}
                        data-tab={tab.value}
                    >
                        <div>{tab.icon}</div>
                        <div className="flex gap-2 items-center ">
                            {tab.label}
                            {tab.qty && (
                                <span
                                    className="px-[4px] w-fit py-[2px] text-white rounded-lg text-xs font-light"
                                    style={{ backgroundColor: colors[index] }}
                                >
                                    {tab.qty}
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
                                className="h-10 w-10 -rotate-90"
                                alt="Left Arrow"
                            />
                        </div>
                        <div
                            className="cursor-pointer border bg-green p-2 "
                            onClick={handleNextTab}
                        >
                            <img
                                src={leftArrow}
                                className="h-10 w-10 rotate-90"
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
