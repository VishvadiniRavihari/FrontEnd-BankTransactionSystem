import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addFDCustomer } from '../api/FD';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function FDCustomerReg() {
  const FDcustomerRegSchema = Yup.object().shape({
    // fd_id:Yup.string().required(),
    customer_id: Yup.string().required(),
    amount:Yup.string().required(),
   
    date_opened: Yup.date().required(),
    period_in_months:Yup.number().required(),
    maturity_date: Yup.date().required(),
    
    branch_code: Yup.string().required(),
    savings_acc_no: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const FDcustomer = {
        // fd_id: values.fd_id,
        customer_id: values.customer_id,
        amount: values.amount,
        date_opened: values.date_opened,
        period_in_months: values.period_in_months,
        maturity_date: values.maturity_date,
        branch_code: values.branch_code,
        savings_acc_no: values.savings_acc_no,
    };
    addFDCustomer({ FDcustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          // fd_id: '',
          customer_id: '',
          amount: '',
          date_opened: '',
          period_in_months: '',
          maturity_date: '',
          branch_code: '',
          savings_acc_no: '',
        }}
        validationSchema={FDcustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='FDcustomer--reg--form'>
              <h1> FD registration</h1>
              <span>
                <Field type='text' name='customer_id' placeholder='Customer ID' />
              </span>
              <span>
                <Field type='text' name='amount' placeholder='FD Amount' />
              </span>
              <span>
                <Field type='date' name='date_opened' placeholder='Opening Date' />
              </span>
              <span>
                <Field type='text' name='period_in_months' placeholder='Period in Months' />
              </span>
              <span>
                <Field type='date' name='maturity_date' placeholder='Maturity Date' />
              </span>
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>
              <span>
                <Field type='text' name='savings_acc_no' placeholder='Savings Account Number' />
              </span>

              <Button
                className='FDcustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='FDcustomer--reg--form--errors'>
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='amount' component='div' />
                    <ErrorMessage name='date_opened' component='div' />
                    <ErrorMessage name='period_in_months' component='div' />
                    <ErrorMessage name='maturity_date' component='div' />
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='savings_acc_no' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}