import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const initialValues = {
  userName: "",
  userEmail: "",
  favColor: "",
};

const mailBoxSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "Too Short!")
    .required("enter your name, please"),

  userEmail: yup
    .string()
    .email("Must be a valid email!")
    .required("enter your email, please"),

  favColor: yup
    .string()
    .oneOf(["red", "green", "blue"], "enter your color, please")
    .required("enter your color, please"),
});

const MailBoxForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={mailBoxSchema}>
      <Form>
        <h2>Add new user</h2>
        <label>
          <span>user email:</span>
          <br />
          <Field type="email" name="userEmail" placeholder="your email" />
          <ErrorMessage name="userEmail" component="span" />
        </label>
        <br />
        <label>
          <span>user name:</span>
          <br />
          <Field type="text" name="userName" placeholder="your name" />
          <ErrorMessage name="userName" component="span" />
        </label>
        <br />
        <div>
          <span>favourite color:</span>
          <br />
          <label>
            <Field type="radio" name="favColor" value="red" />
            Red
          </label>
          <label>
            <Field type="radio" name="favColor" value="green" />
            Green
          </label>
          <label>
            <Field type="radio" name="favColor" value="blue" />
            Blue
          </label>
          <ErrorMessage name="favColor" component="span" />
        </div>
        <br />
        <button type="submit">Create new user</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;
