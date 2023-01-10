import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addOnlineTransaction } from '../api/OnlineTransaction';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function OnlineTransactionReg() {
  const OnlineTransactionRegSchema = Yup.object().shape({
    from_acc: Yup.string().required(),
    to_acc: Yup.string().required(),
    amount: Yup.number().required(),
    tran_date: Yup.date().required(),
    
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const onlineTransaction = {
      from_acc: values.from_acc,
      to_acc: values.to_acc,
      amount: values.amount,
      tran_date: values.date,
    };
    addOnlineTransaction({ onlineTransaction }).then(() => setSubmitting(false));
  };
  return (
    <div>
        <h1>Online Transaction</h1>
      <Formik
        initialValues={{
          from_acc: '',
          to_acc: '',
          amount: '',
          tran_date: '',
        }}
        validationSchema={OnlineTransactionRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='online--tran--form'>
              <span>
                <Field type='text' name='from_account' placeholder='From_Account' />
              </span>
              <span>
                <Field type='text' name='to_account' placeholder='To_Account' />
              </span>
              <span>
                <Field type='text' name='amount' placeholder='Amount' />
              </span>
              <span>
                <Field type='date' name='tran_date' placeholder='date' />
              </span>

              <Button
                className='online--tran--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='online--tran--form--errors'>
                    <ErrorMessage name='from_acc' component='div' />
                    <ErrorMessage name='to_acc' component='div' />
                    <ErrorMessage name='amount' component='div' />
                    <ErrorMessage name='tran_date' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}