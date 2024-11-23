import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";
const NewsletterForm = () => {
  // Validation Schema for the email input
  const validationSchema = Yup.object({
    email: Yup.string()
      .trim("Remove leading and trailing spaces")
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Example: Replace this with your newsletter subscription API
      //   await axios.post("https://your-api-endpoint.com/subscribe", {
      //     email: values.email,
      //   });
      console.log(values.email);
      alert("Successfully subscribed to the newsletter!");
      resetForm();
    } catch (error) {
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="">
            {/* Email Input */}
            <div className="row g-0 formControl ">
              <div className="col-11">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`${style.emailField} w-100`}
                  placeholder="Submit your email"
                />
              </div>

              {/* Submit Button */}
              <div className="col-1 d-flex align-items-end">
                              <button type="submit" className={`${style.send} bg-transparent p-0 `} disabled={isSubmitting}>
                  <i className="fa-regular fa-envelope"></i>
                </button>
              </div>
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewsletterForm;
