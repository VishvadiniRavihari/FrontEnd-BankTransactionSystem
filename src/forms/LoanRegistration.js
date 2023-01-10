import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addLoanCustomer } from '../api/Loan';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function LoanCustomerReg() {
  const LoancustomerRegSchema = Yup.object().shape({
    // loan_no: Yup.string().required(),
    branch_code: Yup.string().required(),
    customer_id: Yup.string().required(),
    interest_rate: Yup.string().required(),
    date_issued: Yup.date().required(),
    period: Yup.number().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const Loancustomer = {
      // loan_no: values.loan_no,
      branch_code: values.branch_code,
      customer_id: values.customer_id,
      interest_rate: values.interest_rate,
      date_issued: values.date_issued,
      period: values.period,
    };
    addLoanCustomer({ Loancustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          // loan_no: '',
          branch_code: '',
          customer_id: '',
          interest_rate: '',
          date_issued: '',
          period: '',
        }}
        validationSchema={LoancustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='Loancustomer--reg--form'>
              <h1>Loan Registration</h1>
              {/* <span>
                <Field
                  type='text'
                  name='loan_no'
                  placeholder='Loan Number'
                />
              </span> */}
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='Customer ID' />
              </span>
              <span>
                <Field type='text' name='interest_rate' placeholder='Interest Rate' />
              </span>
              <span>
                <Field type='text' name='date_issued' placeholder='Date Issued' />
              </span>
              <span>
                <Field type='text' name='period' placeholder='Period' />
              </span>

              <Button
                className='Loancustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='Loancustomer--reg--form--errors'>
                    {/* <ErrorMessage name='loan_no' component='div' /> */}
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='interrest_rate' component='div' />
                    <ErrorMessage name='date_issued' component='div' />
                    <ErrorMessage name='period' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}