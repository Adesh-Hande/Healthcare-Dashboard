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
      <div id="app-main" className='main'>
        <div id="app-main-div" >
          <Sidebar />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "100%" }}>
            <Header />
            <div className="dash-board-containt" style={{ display: "flex" }}>
              <div>
              <DashboardMainContent />
              </div>
              <div className='caledar-box' style={{  }}>
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
