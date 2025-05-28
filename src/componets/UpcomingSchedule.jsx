import '../styles/UpcomingSchedule.css'
import React from 'react';
// import SimpleAppointmentCard from './componets/UpcomingSchedule'
// import SimpleAppointmentCard from './DashboardMainContent/UpcomingSchedule'

// import SimpleAppointmentCard from '../SimpleAppointmentCard';
const SimpleAppointmentCard = ({ title, time, icon }) => (
    <div className="simple-appointment-card" >
        <div className="card-title" style={{display:"flex",justifyContent:"space-between"}}>
            {title} <span className="emoji">{icon}</span>
        </div>
        <div className="card-time">{time}</div>
    </div>
);

const UpcomingSchedule = () => {
    return (
        <div className="upcoming-schedule">
            <h2 className="schedule-title">The Upcoming Schedule</h2>

            <div className="schedule-day">
                <div className="day-label">On Thursday</div>
                <div className="card-row">
                    <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" icon="💉" />
                    <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" icon="👁️" />
                </div>
            </div>

            <div className="schedule-day">
                <div className="day-label">On Saturday</div>
                <div className="card-row">
                    <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" icon="❤️" />
                    <SimpleAppointmentCard title="Neurologist" time="16:00 PM" icon="👨🏻‍⚕️" />
                </div>
            </div>
        </div>
    );
};

export default UpcomingSchedule;
