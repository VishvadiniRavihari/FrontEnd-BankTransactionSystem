import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { getLateLoanPayers } from '../api/LoanInstallment';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function LateLoanPayersReg() {
  const LateLoanPayersRegSchema = Yup.object().shape({
    branch_code: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const LatePayer = {
      branch_code: values.branch_code,
    };
    getLateLoanPayers({ LatePayer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          branch_code: '',
        }}
        validationSchema={LateLoanPayersRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='lateLoanPayer--reg--form'>
              <h1>Late Loan Payers Request</h1>
              <span>
                <Field type='text' name='branch_code' placeholder='branch_code' />
              </span>
              <Button
                className='lateLoanPayer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='lateLoanPayer--reg--form--errors'>
                    <ErrorMessage name='branch_code' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}