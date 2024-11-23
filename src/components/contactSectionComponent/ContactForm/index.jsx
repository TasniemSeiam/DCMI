import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import style from "./style.module.css";

const ContactForm = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [alert, setAlert] = useState(true);

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim("Remove leading and trailing spaces")
      .required("Name is required"),
    email: Yup.string()
      .trim("Remove leading and trailing spaces")
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .trim("Remove leading and trailing spaces")
      .matches(/^[0-9]{10,15}$/, "Phone must be 10-15 digits")
      .required("Phone is required"),
    subject: Yup.string()
      .trim("Remove leading and trailing spaces")
      .required("Subject is required"),
    message: Yup.string()
      .trim("Remove leading and trailing spaces")
      .required("Message is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // sending email ( use your backend API)
      // await axios.post("https://your-api-endpoint.com/send-email", {
      //   to: "info@gmail.com",
      //   ...values,
      // });
      const emailData = {
        recipient: "tasniemseiam@gmail.com", // Send the email to this address
        sender: values.email,
        subject: values.subject,
        body: `Name: ${values.name}\nPhone: ${values.phone}\nMessage: ${values.message}`,
      };
      console.log(values);
      console.log("Email Sent:", emailData);

      setAlertMsg("Email sent successfully!");
      setAlert(true);
      resetForm();
    } catch (error) {
      setAlertMsg("Failed to send email. Please try again.");
      setAlert(false);
    }
  };

  return (
    <div className="container py-4 py-lg-0">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={`row g-3 ${style.form} `}>
            {/* Name Field */}
            <div
              className="col-md-6  "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <Field
                type="text"
                name="name"
                id="name"
                className={`${style.formControl} formControl  `}
                placeholder="Your Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Email Field */}
            <div
              className="col-md-6  "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <Field
                type="email"
                name="email"
                id="email"
                className={`${style.formControl} formControl `}
                placeholder="Your Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Phone Field */}
            <div
              className="col-md-6  "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <Field
                type="text"
                name="phone"
                id="phone"
                className={`${style.formControl} formControl `}
                placeholder="Your Phone"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Subject Field */}
            <div
              className="col-md-6  "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <Field
                type="text"
                name="subject"
                id="subject"
                className={`${style.formControl} formControl `}
                placeholder="Your Subject"
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Message Field */}
            <div
              className="col-12 "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <Field
                as="textarea"
                name="message"
                id="message"
                className={`${style.formControl} formControl `}
                rows="4"
                placeholder="Start writing message here "
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Submit Button */}
            <div
              className="col-12 ps-2 btns  "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              data-aos-delay="50"
            >
              <button
                type="submit"
                className="btn text-white fw-bold  px-5 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Now"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <p className={alert ? ` py-2 text-success` : ` py-2text-danger`}>
        {alertMsg}
      </p>
    </div>
  );
};

export default ContactForm;
