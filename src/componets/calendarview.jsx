import React from "react";
import '../styles/calendarview.css';

const appointments = {
  "2021-10-25": ["10:00", "11:00", "12:00"],
  "2021-10-26": ["08:00", "09:00", "10:00"],
  "2021-10-27": ["12:00"],
  "2021-10-28": ["10:00", "11:00", "13:00"],
  "2021-10-29": ["14:00"],
  "2021-10-30": ["12:00", "14:00", "15:00"],
  "2021-10-31": ["09:00", "10:00", "11:00"]
};

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];

const Calendarview = () => {
  return (

    <div id="calendar-box" className="calendar-container">
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10px" }}>
        <h2 className="calendar-title">October 2021</h2>
        <div>
          <img style={{ width: "28px " }} src="/images/arrow-left.png" alt="arrow" />
          <img style={{ width: "28px" }} src="/images/arrow-right.png" alt="arrow" />
        </div>
      </div>
      <div className="calendar-grid">
        {days.map((day, i) => (
          <div key={i} className="calendar-day-label">{day}</div>
        ))}
        {dates.map((date, i) => {
          const key = `2021-10-${date.toString().padStart(2, '0')}`;
          return (
            <>
              <div className="highlight-column-box" style={{border:""}}>
                <div key={i} className={`calendar-date ${date === 26 ? 'highlight-column' : ''}`}>
                  <div className="calendar-date-number">{date}</div>
                  {appointments[key]?.map((time, j) => (
                    <div
                      key={j}
                      className={`calendar-time-slot ${date === 26 && time === '09:00' ? 'selected' : ''}`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </>);
        })}
      </div>

      <div className="appointments-section">
        <h3 className="appointments-title">Appointment Details</h3>
        <div className="appointments-list">
          <div className="appointment-card dentist ">
            <div style={{ display: "flex", justifyContent: "space-between", padding: " 4px 2px 6px" }}>
              <h4>Dentist</h4>
              <img style={{ width: "30px" }} src="/images/teeth.jpg " alt="" />
            </div>
            <p>09:00-11:00</p>
            <p>Dr.Cameron Williamson</p>
          </div>
          <div className="appointment-card physio">
            <div style={{ display: "flex", maxWidth: "250px",minWidth:"auto", justifyContent: "space-between", mixBlendMode: "multiply", padding: " 4px 2px" }}><h4>Physiotherapy Appoinment</h4>
              <img style={{ width: "20px" }} src="/images/hand.jpg" alt="" />
            </div>
            <p>11:00-12:00</p>
            <p>Dr.Kavin Djones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendarview;
