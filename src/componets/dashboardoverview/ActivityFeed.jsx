import React from "react";
import '../../styles/ActivityFeed.css';
// import '../../../styles/ActivityFeed.css';
// import '../styles/ActivityFeed.css';
// import '../../../styles/ActivityFeed.css';


const data = [
  { day: 'Mon', bars: [45, 34, 50] },
  { day: 'Tue', bars: [30, 35, 20] },
  { day: 'Wed', bars: [60, 30, 10] },
  { day: 'Thus', bars: [35, 25, 20] },
  { day: 'Fri', bars: [30, 60, 45] },
  { day: 'Sat', bars: [45, 20, 25] },
  { day: 'Sun', bars: [25, 30, 60] },
];


const colors = ['#ffffff', '#2ed8f2', '#6B4DE6'];
const ActivityFeed = () => {
  return (
    <>
      

      <div style={{width:"auto",overflow:"scroll"}} className="chart-container">
        <h3>Activity</h3>
        <div className="chart">
          {data.map((dayData, i) => (
            <div className="day-column" key={i}>
              <div className="bars">
                  <div className="bar-color-divide"></div>
                {dayData.bars.map((height, j) => (
                  <div
                    key={j}
                    className="bar-color"
                    style={{
                      height: `${height}px`,
                      backgroundColor: colors[j],
                    }}
                  />
                ))}
                <div className="bar-color-divide"></div>
              </div>
              <span className="day-label">{dayData.day}</span>

            </div>
          ))}
        </div>
      </div>
    </>);
};

export default ActivityFeed;
