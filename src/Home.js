import React from "react";
import "./App.css";
import ScheduleNewAppointment from "./ScheduleNewAppointment";

export default (props) => {
        return <>
                    <ScheduleNewAppointment 
                        dentists={props.dentists}
                        assistants={props.assistants}
                    />
                </>;
}
