import React from 'react';
import "./Calendar.scss"
import PageBox from './Components/Pagebox';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


class ServiceCalendar extends React.Component {
    render() {
        return <PageBox>
            <p>click to sign up for listed events! (not implemented yet)</p>
            <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
            </PageBox>
    }
}

export default ServiceCalendar;