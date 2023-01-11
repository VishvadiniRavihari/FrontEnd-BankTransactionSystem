import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addEmployee } from '../api/Employees';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function EmployeeReg() {
  const employeeRegSchema = Yup.object().shape({
    name: Yup.string().required(),
    addressNo: Yup.string().required(),
    street: Yup.string().required(),
    town: Yup.string().required(),
    phone: Yup.string()
      .matches(/(^[0-9]+$|^\+[0-9]+$)/, 'Invalid Phone Number')
      .min(10, 'Phone number must be at least 10 digits')
      .max(12, 'Phone number must be at most 12 digits')
      .required(),
    email: Yup.string().required,
    branchCode: Yup.string().required,
    salary: Yup.number().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const employee = {
      name: values.name,
      addressNo: values.address,
      street: values.street,
      town: values.town,
      phone: values.phone,
      email: values.email,
      branchCode: values.branchCode,
      salary: values.salary,
    };
    addEmployee({ employee }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          addressNo: '',
          street: '',
          town: '',
          phone: '',
          email: '',
          branchCode: '',
          salary: '',
        }}
        validationSchema={employeeRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='employee--reg--form'>
              <h1> Employee Registration</h1>
              <span>
                <Field
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='addressNo' placeholder='Address No' />
              </span>
              <span>
                <Field type='text' name='street' placeholder='Street' />
              </span>
              <span>
                <Field type='text' name='town' placeholder='Town' />
              </span>
              <span>
                <Field type='text' name='phone' placeholder='Phone' />
              </span>
              <span>
                <Field type='text' name='email' placeholder='Email' />
              </span>
              <span>
                <Field type='text' name='branchCode' placeholder='Branch Code' />
              </span>
              <span>
                <Field type='number' name='salary' placeholder='Salary' />
              </span>

              <Button
                className='employee--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='employee--reg--form--errors'>
                    <ErrorMessage name='name' component='div' />
                    <ErrorMessage name='addressNo' component='div' />
                    <ErrorMessage name='street' component='div' />
                    <ErrorMessage name='town' component='div' />
                    <ErrorMessage name='phone' component='div' />
                    <ErrorMessage name='email' component='div' />
                    <ErrorMessage name='branchCode' component='div' />
                    <ErrorMessage name='salary' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}