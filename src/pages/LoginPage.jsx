import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import css from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { apiLogim } from "../redux/auth/operations.js";
import { useNavigate } from "react-router-dom";


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
const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(apiLogim(values))
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
