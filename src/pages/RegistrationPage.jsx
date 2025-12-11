import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import css from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { apiRegister } from "../redux/auth/operations.js";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .required("enter your name, please"),

  email: yup
    .string()
    .email("Must be a valid email!")
    .required("enter your email, please"),

  password: yup
    .string()
    .required("enter your password, please"),
});

const RegistrationPage = () => {
const dispatch = useDispatch()


  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}
      validationSchema={registerSchema}>
      <Form className={css.form}>
        <h2 className={css.title}>Register form</h2>
        <label className={css.label}>
          <span>user name:</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="your name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>

        <label className={css.label}>
          <span>user email:</span>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="your email"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>

        <label className={css.label}>
          <span>password:</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="your password"
          />
          <ErrorMessage name="password" component="span" className={css.error} />
        </label>

        <button className={css.button} type="submit">
          Register new user
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
