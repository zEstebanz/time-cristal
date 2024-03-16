import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (

        <div className='flex justify-center' style={{ backgroundColor: '#222' }}>
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
    );
}

export default MyCalendar;
