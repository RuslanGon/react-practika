import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import css from "./RegistrationPage.module.css";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email!")
    .required("enter your email, please"),

  password: yup
    .string()
    .required("enter your password, please"),
});

const LoginPage = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}
      validationSchema={loginSchema}>
      <Form className={css.form}>
        <h2 className={css.title}>Login form</h2>
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
          login user
        </button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
