import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
const REGEX = {email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}

function App() {
    const [form, setForm] = useState({});
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!REGEX.email.test(values.email)) {
            errors.email = 'Invalid email';
        }
        if (!values.phone) {
            errors.phone = 'Required';
        }
        return errors;
    };
    const handleSubmit = (values) => {
        alert("Thêm liên hệ thành công")
    }
    return (
        <div>
            <h1>Contact Form</h1>
            <Formik
                initialValues={{name: '', email: '', phone: '', message: ''}}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <label>Name</label>
                            <Field type="text" name="name"/>
                            <ErrorMessage name="name" component="div" style={{color: 'red'}}/>
                        </div>

                        <div>
                            <label>Email</label>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="div" style={{color: 'red'}}/>
                        </div>

                        <div>
                            <label>Phone</label>
                            <Field type="text" name="phone"/>
                            <ErrorMessage name="phone" component="div" style={{color: 'red'}}/>
                        </div>

                        <div>
                            <label>Message</label>
                            <Field as="textarea" name="message"/>
                            <ErrorMessage name="message" component="div" style={{color: 'red'}}/>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default App;
