// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from 'emailjs-com';

// ✏️ Replace these with your real EmailJS IDs:
const SERVICE_ID = 'service_ua11yxc';
const TEMPLATE_ID = 'template_m3xv4z9';
const USER_ID = 'lt62C_OmssLIsVa5g';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [successOpen, setSuccessOpen] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setName(v);
    setNameError(v.trim() === '');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setEmail(v);
    setEmailError(!validateEmail(v));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    setMessage(v);
    setMessageError(v.trim() === '');
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
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          { name, email, message },
          USER_ID
        )
        .then(
          () => {
            setSuccessOpen(true);
            setName(''); setEmail(''); setMessage('');
          },
          () => setErrorOpen(true)
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Ready to transform your vision into cutting-edge solutions? Let’s innovate together!</p>

          <Box
            component="form"
            ref={form}
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
            sx={{
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
            <div className="row g-3">
              <div className="col-md-6 col-sm-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                    id="floatingName"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <label className='customInput' htmlFor="floatingName">Name</label>
                  {nameError && <div className="invalid-feedback">Please enter your name</div>}
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="form-floating">
                  <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    id="floatingEmail"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label className='customInput' htmlFor="floatingEmail">Email</label>
                  {emailError && <div className="invalid-feedback">Please enter a valid email</div>}
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className={`form-control ${messageError ? 'is-invalid' : ''}`}
                    id="floatingMessage"
                    placeholder="Your Message"
                    style={{ height: '150px' }}
                    value={message}
                    onChange={handleMessageChange}
                  />
                  <label className='customInput' htmlFor="floatingMessage">Message</label>
                  {messageError && <div className="invalid-feedback">Please enter your message</div>}
                </div>
              </div>

              <div className="col-12 d-flex justify-content-end">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  disabled={nameError || emailError || messageError}
                >
                  Send
                </Button>
              </div>
            </div>
          </Box>

          <Snackbar
            open={successOpen}
            autoHideDuration={4000}
            onClose={() => setSuccessOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert
              onClose={() => setSuccessOpen(false)}
              severity="success"
              sx={{ width: '100%' }}
            >
              Your message has been sent successfully!
            </Alert>
          </Snackbar>

          <Snackbar
            open={errorOpen}
            autoHideDuration={4000}
            onClose={() => setErrorOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert
              onClose={() => setErrorOpen(false)}
              severity="error"
              sx={{ width: '100%' }}
            >
              Failed to send your message. Please try again later.
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default Contact;
