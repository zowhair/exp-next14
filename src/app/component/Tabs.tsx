'use client'
import { ConstructionOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function ScrollableTabsButtonAuto() {
    const [activeTab, setActiveTab] = useState(0)
    

    const tabsData = [
        {
            tabTitle: "Cause Based Tourism",
            contentTitle: "Community Development",
            contentDesc : "With travel and tourism we have a role to play in community. Expedition Asia dedicates 5% of its profit on community development specially on education, health and sanitation.",
            index: 0
        },
        {
            tabTitle: "Volunteer With Us",
            contentTitle: "Get a Complementary Tour",
            contentDesc : "Expedition Asia is offering an exciting opportunity to enthusiastic tourists, share your expertise with local community and get a complementary short destination trips in Pakistan. Write us now!",
            index:1
        },
        {
            tabTitle: "Responsible Team",
            contentTitle: "Our Green Initiatives",
            contentDesc : "Expedition Asia believes in responsible tourism we often conduct awareness activities against pollution. We want to make a positive impact on the environment by contributing to mother earth.",
            index:2
        }
    ]

    const [activeContentDesc, setActiveContentDesc] = useState(tabsData[0].contentDesc)
    const [activeContentTitle, setActiveContentTitle] = useState(tabsData[0].contentTitle)

    function handleClick(e) {
        setActiveContentTitle(tabsData[e.target.dataset.index].contentTitle)
        setActiveContentDesc(tabsData[e.target.dataset.index].contentDesc)
        document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'))
        e.target.classList.add('active')
        
    }
    
  return (
    <div className="tabs__container">
        <div className="tabs_wrapper">
            <div className="tabs">
                {
                    tabsData.length && tabsData.map((item, ind) => (
                        <div className="tab" key={ind} data-index={item.index} onClick={handleClick}>{item.tabTitle}</div>
                    ))

                }
            </div>

            <div className="tabs_contents">
                <div className="tabs__content">
                    <h3 className="activeTab">{activeContentTitle}</h3>
                    <p>{activeContentDesc}</p>
                </div>
            </div>
        </div>
    </div>
  );
}