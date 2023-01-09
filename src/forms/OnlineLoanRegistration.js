import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addOnlineLoanCustomer } from '../api/OnlineLoanApplication';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function OnlineLoanCustomerReg() {
  const OnlineLoancustomerRegSchema = Yup.object().shape({
    application_id: Yup.string().required(),
    customer_id: Yup.date().required(),
    amount: Yup.int().required(),
    period: Yup.string(),
    fd_no: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const OnlineLoancustomer = {
      application_id: values.application_id,
      customer_id: values.customer_id,
      amount: values.amount,
      period: values.period,
      fd_no: values.fd_no,
    };
    addOnlineLoanCustomer({ OnlineLoancustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          application_id: '',
          customer_id: '',
          amount: '',
          period: '',
          fd_no: '',
        }}
        validationSchema={OnlineLoancustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='OnlineLoancustomer--reg--form'>
              <span>
                <Field
                  type='text'
                  name='application_id'
                  placeholder='application_id'
                  //check
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='customer_id' />
              </span>
              <span>
                <Field type='int' name='amount' placeholder='amount' />
              </span>
              <span>
                <Field type='int' name='period' placeholder='period' />
              </span>
              <span>
                <Field type='text' name='fd_no' placeholder='fd_no' />
              </span>

              <Button
                className='OnlineLoancustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='OnlineLoancustomer--reg--form--errors'>
                    <ErrorMessage name='application_no' component='div' />
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='amount' component='div' />
                    <ErrorMessage name='period' component='div' />
                    <ErrorMessage name='fd_no' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}