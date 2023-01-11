import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addIndividualCustomer } from '../api/IndividualCustomers';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function IndividualCustomerReg() {
  const indivCustomerRegSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    middleName: Yup.string().required(),
    lastName: Yup.string().required(),
    dob: Yup.date().required(),
    nic: Yup.string().required(),
    gender: Yup.string().required(),
    nationality: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const indivCustomer = {
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      dateofbirth: values.dob,
      nic: values.nic,
      gender: values.gender,
      nationality: values.nationality,
    };
    addIndividualCustomer({ indivCustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          middleName: '',
          lastName: '',
          dob: '',
          nic: '',
          gender: '',
          nationality: '',
        }}
        validationSchema={indivCustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='indivCustomer--reg--form'>
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
                <Field type='text' name='nic' placeholder='NIC' />
              </span>
              <span>
                <Field type='text' name='gender' placeholder='Gender' />
              </span>
              <span>
                <Field type='text' name='nationality' placeholder='Nationality' />
              </span>

              <Button
                className='indivCustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='indivCustomer--reg--form--errors'>
                    <ErrorMessage name='firstName' component='div' />
                    <ErrorMessage name='middleName' component='div' />
                    <ErrorMessage name='lastName' component='div' />
                    <ErrorMessage name='dob' component='div' />
                    <ErrorMessage name='nic' component='div' />
                    <ErrorMessage name='gender' component='div' />
                    <ErrorMessage name='nationality' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}