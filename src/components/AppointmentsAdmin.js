import React from 'react'
import EditAppointment from './EditAppointment'
import ScheduleNewAppointment from './ScheduleNewAppointment'

const AppointmentsAdmin = () => {
    return (
        <div>
            <ScheduleNewAppointment text="Plan een nieuwe afspraak:" />
            <EditAppointment />
        </div>
    )
}

export default AppointmentsAdmin
