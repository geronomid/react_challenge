import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit = {handleSubmit} >
      <input 
        type  = 'title' 
        value = {title} 
        onChange = {(e) => setTitle(e.target.value)}
        placeholder="Appointment title"
      />
      <ContactPicker 
        contacts={getContactNames()} 
        value ={contact}
        name = 'contact'
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment with:"
      />
      <input 
        type = 'date' 
        value = {date} 
        onChange ={(e) => setDate(e.target.value)}
        placeholder="Appointment Date"
        min = {getTodayString}
      />
      <input 
        type = 'time' 
        value = {time} 
        onChange ={(e) => setTime(e.target.value)}
        placeholder="Appointment time"
      />
      <input type= 'submit' value="Add Appointment" />
      
    </form>
  );
};
