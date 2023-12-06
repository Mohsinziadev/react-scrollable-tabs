import { useState } from "react";
import ScrollableTabs from "./components/ScrollableTabs";
import ActiveOrders from "./components/Active";
import CompletedOrders from "./components/Completed";
import CancelledOrders from "./components/Cancelled";

function App() {
    let [activeTab, setActiveTab] = useState("activeOrders");
    // Your tab list
    const tabs = [
        {
            value: "activeOrders",
            label: "Active Orders",
        },
        {
            value: "completedOrders",
            label: "Completed Orders",
        },
        {
            value: "cancelledOrders",
            label: "Cancelled Orders",
        },
        {
            value: "WaitingResponse",
            label: "Waiting Response",
        },
        {
            value: "PendingApproval",
            label: "Pending Approval",
        },
        {
            value: "Declined",
            label: "Declined",
        },
        {
            value: "RoutedOffers",
            label: "Routed Offers",
        },
        {
            value: "DisputedOrders",
            label: "Disputed Orders",
        },
        {
            value: "CounterOffers",
            label: "Counter Offers",
        },
    ];

    return (
        <div className="max-w-6xl w-[90%] px-12 mx-auto relative">
            <ScrollableTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {/* show your tabpane conditionaliy */}
            {activeTab === "activeOrders" ? (
                <ActiveOrders />
            ) : activeTab === "completedOrders" ? (
                <CompletedOrders />
            ) : (
                <CancelledOrders />
            )}
        </div>
    );
}

export default App;
