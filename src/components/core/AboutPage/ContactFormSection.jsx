import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-[#020617] rounded-xl p-10 shadow-lg border border-gray-700">

      <h1 className="text-center text-4xl font-semibold text-white">
        Get in Touch
      </h1>

      <p className="text-center text-gray-400 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>

      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>

    </div>
  );
};

export default ContactFormSection;
