// // contact form with fields for
// // a name,
// // an email address, and
// // a message
// // WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
// // WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

// import React, { useState } from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import { validateEmail } from '../utils/helpers';
// // import Navigation from './components/Navigation';
// require('dotenv').config()


// function Contact() {
//   const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!errorMessage) {
//   //     console.log('Submit Form', formState);
//   //   }
//   // };

//   // function refreshPage() {
//   //   window.location.reload(true);
//   // }


//   if (state.succeeded) {
//     return (
//       <div>
//         <p>Thanks for reaching out!</p>
//         <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
//         {/* This form button is broken. It was supposed to refresh the page so you can submit a new form, but I'm changing this bug into a feature that takes you back to the about section. */}
//       </div>
//     );
// }


//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`A ${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <div>
//       <p className="content is-medium">Contact Me</p>
//       <hr />
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div className="field">
//           <label className="label" htmlFor="name">Name</label>
//           <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="email">Email Address</label>
//           <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="message">Message</label>
//           <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="is-danger">{errorMessage}</p>
//           </div>
//         )}
//         <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
import React, {FormEvent, useState} from 'react';
import axios from 'axios';


type FormState = {
  email: string;
  name: string;
  message: string;
}
// export default Contact;
function Contact () {
  const formId = 'Cs8W8aZI';
  const formSparkUrl= `https://submit-form.com/${formId}`;
  const initialFormState = {
    email: '',
    name: '',
    message: '',
  };
  const [formState, setFormState] = useState(initialFormState);
  const submitForm = async(event: FormEvent) => {
    event.preventDefault();
    await postSubmission()
  };
  const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value} = event.target;
    const formKey = id
    const updatedFormState = {...formState};
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  }
  const postSubmission = async () => {
    const payload = {
      ...formState
    };

    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result);
    } catch (error) {
      console.log(error)
    }


  };
  return(
    <div className="h-full flex justify-center flex-col">
      <div className="w-2/3 m-auto p-8 shadow-lg">
        <h1 className="text-4xl font-bold flex items-center">
          <span> Contact Me</span>
        </h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          onChange= {updateFormControl}
          type ="text" 
          id="name" 
          value={formState.name}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
          onChange= {updateFormControl}
          type ="text" 
          id="email" 
          value={formState.email}
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" onChange={updateFormControl} value ={formState.message}></textarea>
        </div>

        <button className="my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
          Submit
        </button>
      </form>
    </div>

  </div>
)}
export default Contact;