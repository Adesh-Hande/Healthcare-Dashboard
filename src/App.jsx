import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Sidebar from './componets/SideBar'
import Sidebar from './componets/Sidebar'
import Header from './componets/Header'
import DashboardMainContent from './componets/DashboardMainContent'
import Calendarview from './componets/calendarview'
import UpcomingSchedule from './componets/UpcomingSchedule'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main' style={{ width: "100%", margin: "auto", }}>
        <div style={{ display: "flex" }} >
          <Sidebar />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}>
            <Header />
            <div className="dash-board-containt" style={{ display: "flex" }}>
              <DashboardMainContent />
              <div className='caledar-box' style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Calendarview />
                <UpcomingSchedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
