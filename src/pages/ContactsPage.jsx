import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectContactsIsError,
  selectContactsIsLoading,
} from "../redux/contacts/selectors.js";
import { apiGetContacts } from "../redux/contacts/operations.js";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import AddNewContactForm from "../components/AddNewContactForm.jsx";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const isError = useSelector(selectContactsIsError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, []);
  return (
    <div>
    <h2>Phone Book</h2>
  <AddNewContactForm />
    {isLoading && <Loader />}
    {isError && <Error />}
  
    {Array.isArray(contacts) && contacts.length === 0 && (
      <p>No contacts yet. Add your first contact 📞</p>
    )}
    {Array.isArray(contacts) && (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <h3>Name: {contact.name}</h3>
            <p>Number: {contact.number}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default ContactsPage;
