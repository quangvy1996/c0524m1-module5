import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

function App() {
  const SEX_LIST = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' }
  ];

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
    });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.idNumber) {
      errors.idNumber = 'Required';
    }
    if (!values.birthYear) {
      errors.birthYear = 'Required';
    }
    if (!values.nationality) {
      errors.nationality = 'Required';
    }
    if (!values.company) {
      errors.company = 'Required';
    }
    if (!values.department) {
      errors.department = 'Required';
    }
    if (!values.city) {
      errors.city = 'Required';
    }
    if (!values.district) {
      errors.district = 'Required';
    }
    if (!values.ward) {
      errors.ward = 'Required';
    }
    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  const handleSubmit = (values) => {
    alert('Form submitted successfully!');
    console.log(values);
  };

  return (
      <Formik
          initialValues={{
            name: '',
            idNumber: '',
            birthYear: '',
            sex: '',
            nationality: '',
            company: '',
            department: '',
            hasInsurance: false,
            city: '',
            district: '',
            ward: '',
            address: '',
            phone: '',
            email: ''
          }}
          validate={handleValidate}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            idNumber: Yup.string().required('Required'),
            birthYear: Yup.string().required('Required'),
            nationality: Yup.string().required('Required'),
            company: Yup.string().required('Required'),
            department: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            district: Yup.string().required('Required'),
            ward: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            phone: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email format').required('Required')
          })}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur
          }) => (
            <form onSubmit={handleSubmit}>
              <h1>Tờ khai y tế</h1>
              <div>
                <label>Họ tên:</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.name && touched.name && <div className="error">{errors.name}</div>}
              </div>
              <div>
                <label>Số hộ chiếu/CMND:</label>
                <input
                    type="text"
                    name="idNumber"
                    value={values.idNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.idNumber && touched.idNumber && <div className="error">{errors.idNumber}</div>}
              </div>
              <div>
                <label>Năm sinh:</label>
                <input
                    type="text"
                    name="birthYear"
                    value={values.birthYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.birthYear && touched.birthYear && <div className="error">{errors.birthYear}</div>}
              </div>
              <div>
                <label>Giới tính:</label>
                {SEX_LIST.map((sex) => (
                    <label key={sex.value}>
                      <input
                          type="radio"
                          name="sex"
                          value={sex.value}
                          onChange={handleChange}
                          onBlur={handleBlur}
                      />
                      {sex.label}
                    </label>
                ))}
                {errors.sex && touched.sex && <div>{errors.sex}</div>}
              </div>
              <div>
                <label>Quốc tịch:</label>
                <input
                    type="text"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.nationality && touched.nationality && <div className="error">{errors.nationality}</div>}
              </div>
              <div>
                <label>Công ty làm việc:</label>
                <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.company && touched.company && <div className="error">{errors.company}</div>}
              </div>
              <div>
                <label>Bộ phận làm việc:</label>
                <input
                    type="text"
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.department && touched.department && <div className="error">{errors.department}</div>}
              </div>
              <div>
                <label>Có thẻ bảo hiểm y tế:</label>
                <input
                    type="checkbox"
                    name="hasInsurance"
                    checked={values.hasInsurance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
              </div>
              <h2>Địa chỉ liên lạc tại Việt Nam</h2>
              <div>
                <label>Tỉnh thành:</label>
                <input
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.province && touched.province && <div className="error">{errors.province}</div>}
              </div>
              <div>
                <label>Quận / huyện:</label>
                <input
                    type="text"
                    name="district"
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.district && touched.district && <div className="error">{errors.district}</div>}
              </div>
              <div>
                <label>Phường / xã:</label>
                <input
                    type="text"
                    name="ward"
                    value={values.ward}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.ward && touched.ward && <div className="error">{errors.ward}</div>}
              </div>
              <div>
                <label>Số nhà, phố, tổ dân phố / thôn / đội:</label>
                <input
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.address && touched.address && <div className="error">{errors.address}</div>}
              </div>
              <div>
                <label>Điện thoại:</label>
                <input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
              </div>
              <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                  {errors.email && touched.email && <div className="error">{errors.email}</div>}
              </div>
              <button type="submit">Submit</button>
            </form>
        )}
      </Formik>
  );
}

export default App;

