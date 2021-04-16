
import { patientData } from "./components/patientList";
import { v4 as uuid } from 'uuid';

const names = patientData;

const getRandomPatientObject = () => {
  const person = names[Math.floor(Math.random() * 250)];
  return {name:`${person.name} ${person.surname}`, id:person.id};
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  // patient: getRandomName(),
  // dentist: getRandomName(),
  // assistant: getRandomName(),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;

export const enhancedAppointments = (appointments) => {
  const betterAppointments = appointments.map((appointment) => {
    return { id: uuid()}
  })
  return betterAppointments
}
