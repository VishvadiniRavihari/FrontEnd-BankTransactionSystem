import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addChildCustomer } from '../api/ChildCustomers';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function ChildCustomerReg() {
  const childCustomerRegSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    middleName: Yup.string().required(),
    lastName: Yup.string().required(),
    dob: Yup.date().required(),
    age: Yup.number().required(),
    gender: Yup.string().required(),
    nationality: Yup.string().required(),
    guardianFirstName: Yup.string().required,
    guardianMiddleName: Yup.string().required,
    guardianLastName: Yup.string().required,
    guardianNIC: Yup.string().required,
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const childCustomer = {
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      dateofbirth: values.dob,
      age: values.age,
      gender: values.gender,
      nationality: values.nationality,
      guardianFirstName: values.guardianFirstName,
      guardianMiddleName: values.guardianMiddleName,
      guardianLastName: values.guardianLastName,
      guardianNIC: values.guardianNIC,
    };
    addChildCustomer({ childCustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          middleName: '',
          lastName: '',
          dob: '',
          age: '',
          gender: '',
          nationality: '',
          guardianFirstName: '',
          guardianMiddleName: '',
          guardianLastName: '',
          guardianNIC: '',
        }}
        validationSchema={childCustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='childCustomer--reg--form'>
              <span>
                <Field
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field
                  type='text'
                  name='middleName'
                  placeholder='Middle Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='date' name='dob' placeholder='Date of Birth' />
              </span>
              <span>
                <Field type='number' name='age' placeholder='Age' />
              </span>
              <span>
                <Field type='text' name='gender' placeholder='Gender' />
              </span>
              <span>
                <Field type='text' name='nationality' placeholder='Nationality' />
              </span>
              <span>
                <Field type='text' name='guardianFirstName' placeholder='Guardian First Name' />
              </span>
              <span>
                <Field type='text' name='guardianMiddleName' placeholder='Guardian Middle Name' />
              </span>
              <span>
                <Field type='text' name='guardianLastName' placeholder='Guardian Last Name' />
              </span>
              <span>
                <Field type='text' name='guardianNIC' placeholder='Guardian NIC' />
              </span>

              <Button
                className='childCustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='childCustomer--reg--form--errors'>
                    <ErrorMessage name='firstName' component='div' />
                    <ErrorMessage name='middleName' component='div' />
                    <ErrorMessage name='lastName' component='div' />
                    <ErrorMessage name='dob' component='div' />
                    <ErrorMessage name='age' component='div' />
                    <ErrorMessage name='gender' component='div' />
                    <ErrorMessage name='nationality' component='div' />
                    <ErrorMessage name='guardianFirstName' component='div' />
                    <ErrorMessage name='guardianMiddleName' component='div' />
                    <ErrorMessage name='guardianLastName' component='div' />
                    <ErrorMessage name='guardianNIC' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}