import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
// import css from "./RegistrationPage.module.css";
import css from '../pages/RegistrationPage.module.css'
import { useDispatch } from "react-redux";
import { apiLogim } from "../redux/auth/operations.js";
import { apiAddNewContact } from "../redux/contacts/operations.js";



const initialValues = {
  name: "",
  number: "",
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("enter your name, please"),

  number: yup
    .string()
    .required("enter your number, please"),
});

const AddNewContactForm = () => {
const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(apiAddNewContact(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}
      validationSchema={contactSchema}>
      <Form className={css.form}>
        <h2 className={css.title}>Add new contact</h2>
        <label className={css.label}>
          <span>name:</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="your name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          <span>number:</span>
          <Field
            className={css.input}
            type="text"
            name="number"
            placeholder="your number"
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <button className={css.button} type="submit">
          add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddNewContactForm;
