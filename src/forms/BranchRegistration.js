import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addBranch } from '../api/Branches';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function BranchReg() {
  const branchRegSchema = Yup.object().shape({
    branchName: Yup.string().required(),
    //branchCode: Yup.string().required(),
    branchCity: Yup.string().required(),
    contactNo: Yup.string()
      .matches(/(^[0-9]+$|^\+[0-9]+$)/, 'Invalid Phone Number')
      .min(10, 'Phone number must be at least 10 digits')
      .max(12, 'Phone number must be at most 12 digits')
      .required(),
    email: Yup.string().required,
    managerName: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const branch = {
      branchName: values.branchName,
      //branchCode: values.branchCode,
      branchCity: values.branchCity,
      contactNo: values.contactNo,
      email: values.email,
      managerName: values.managerName,
    };
    addBranch({ branch }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          branchName: '',
          //branchCode: '',
          branchCity: '',
          contactNo: '',
          email: '',
          managerName: '',
        }}
        validationSchema={branchRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='branch--reg--form'>
              <span>
                <Field
                  type='text'
                  name='branchName'
                  placeholder='Branch Name'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='branchCity' placeholder='Branch City' />
              </span>
              <span>
                <Field type='text' name='contactNo' placeholder='Phone' />
              </span>
              <span>
                <Field type='text' name='email' placeholder='Email' />
              </span>
              <span>
                <Field type='text' name='managerName' placeholder='Manager Name' />
              </span>

              <Button
                className='branch--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='branch--reg--form--errors'>
                    <ErrorMessage name='branchName' component='div' />
                    <ErrorMessage name='branchCity' component='div' />
                    <ErrorMessage name='contactNo' component='div' />
                    <ErrorMessage name='email' component='div' />
                    <ErrorMessage name='managerName' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}