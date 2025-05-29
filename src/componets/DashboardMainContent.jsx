import React from "react";
import '../styles/DashboardMainContent.css'
import AnatomySection from "./dashboardoverview/AnatomySection";
import ActivityFeed from "./dashboardoverview/ActivityFeed";
// import AnatomySection from "./AnatomySection";

const DashboardMainContent = () => {
    const ShowHide = () => {
        let meanu = document.getElementById("side-bar")
        //  alert(menu);
        console.log(meanu)
        meanu.style.left = "0"

    }

    return (
        <>
            <main id="main-dash-box" style={{ width: "100%" }}>
                <header >
                    <div id="menu-box" >
                        <img onClick={ShowHide} src="/images/svgs/menu.svg" alt="error" />
                        <h1>Dashboard</h1></div>
                    <span >This week <img style={{width: "20px" ,paddingRight:"24px"}} src="/images/down.png" alt="error" />
                    </span>

                </header>

                <AnatomySection />
                <ActivityFeed />
            </main>


        </>
    )
}

export default DashboardMainContent