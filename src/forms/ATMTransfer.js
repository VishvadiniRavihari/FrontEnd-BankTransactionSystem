import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addATMTransaction } from '../api/ATMTransaction';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function ATMTransactionReg() {
  const ATMTransactionRegSchema = Yup.object().shape({
    account_no: Yup.string().required(),
    atm_id: Yup.string().required(),
    amount: Yup.number().required(),
    tran_date: Yup.date().required(),
    acc_type: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const atmtransaction = {
      account_no: values.account_no,
      atm_id: values.atm_id,
      amount: values.amount,
      tran_date: values.tran_date,
      acc_type: values.acc_type,
    };
    addATMTransaction({ atmtransaction }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          account_no: '',
          atm_id: '',
          amount: '',
          tran_date: '',
          acc_type: '',
        }}
        validationSchema={ATMTransactionRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='customer--reg--form'>
              <span>
                <Field type='text' name='account_no' placeholder='Account Number' />
              </span>
              <span>
                <Field type='text' name='atm_id' placeholder='ATM ID' />
              </span>
              <span>
                <Field type='text' name='amount' placeholder='Amount' />
              </span>
              <span>
                <Field type='date' name='tran_date' placeholder='Transaction Date' />
              </span>
              <span>
                <Field type='text' name='type' placeholder='Type' />
              </span>

              <Button
                className='atm--transaction--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='atm--transaction--reg--form--errors'>
                    <ErrorMessage name='account_no' component='div' />
                    <ErrorMessage name='atm_id' component='div' />
                    <ErrorMessage name='amount' component='div' />
                    <ErrorMessage name='tran_date' component='div' />
                    <ErrorMessage name='type' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}