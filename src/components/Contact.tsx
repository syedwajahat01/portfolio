import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

// ✏️ Replace these with your real EmailJS IDs:
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
    setNameError(e.target.value.trim() === '');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(!validateEmail(e.target.value));
  };

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
    setMessageError(e.target.value.trim() === '');
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameValid = name.trim() !== '';
    const isEmailValid = validateEmail(email);
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      const templateParams = { name, email, message };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
          }
        );

      // reset form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
            sx={{
              // force input text, labels and outline to be visible
              '& .MuiInputBase-input': { color: '#000' },
              '& .MuiFormLabel-root': { color: '#000' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#1976d2',
              },
            }}
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={handleNameChange}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                aria-label="Your Name"
              />
              <TextField
                required
                id="outlined-required-email"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email' : ''}
                aria-label="Email"
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={handleMessageChange}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              aria-label="Message"
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={nameError || emailError || messageError}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
