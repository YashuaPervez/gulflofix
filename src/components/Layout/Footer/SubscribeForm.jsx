import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const subscribeFromSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const SubscribeForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscribeFromSchema),
  });

  const subscribeHandler = async (data) => {
    // Create the new request
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.hsforms.com/submissions/v3/integration/submit/8384385/fb7364ac-d008-4c12-a82a-9b73a5a65b0e";

    // Example request JSON:
    var data = {
      fields: [
        {
          name: "email",
          value: data.email,
        },
      ],
      context: {
        pageUri: "https://www.gulflogix.ae/",
        pageName: "Gulflogix",
      },
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    };

    var final_data = JSON.stringify(data);

    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        setSubmitted(true);
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request

    xhr.send(final_data);
  };

  const emailError = errors?.email?.message;

  if (submitted) {
    return <p className="text">Thanks for submitting</p>;
  }

  return (
    <form className="footer-form" onSubmit={handleSubmit(subscribeHandler)}>
      {emailError && <p className="error">{emailError}</p>}
      <div className="footer-element">
        <input
          className="footer-input"
          placeholder="example@mail.com"
          {...register("email")}
          name="email"
          id="email"
          autoComplete="off"
        />
      </div>
      <div className="footer-element">
        <button className="footer-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
