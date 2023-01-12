import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addSavAccount } from '../api/SavAccount';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function SavAccountReg() {
  const SavAccountRegSchema = Yup.object().shape({
    branch_code: Yup.string().required(),
    customer_id: Yup.string().required(),
    balance: Yup.number(),
    type: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const savAcc = {
      branch_code: values.branch_code,
      customer_id: values.customer_id,
      balance: values.balance,
      type: values.type,
    };
    addSavAccount({ savAcc }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          branch_code: '',
          customer_id: '',
          balance: '',
          type: '',
        }}
        validationSchema={SavAccountRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='savAcc--reg--form'>
              <h1>Savings Account Registration</h1>
              <span>
                <Field type='text' name='branch_code' placeholder='branch_code' />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='customer_id' />
              </span>
              <span>
                <Field type='number' name='balance' placeholder='balance' />
              </span>
              <span>
                <Field type='text' name='type' placeholder='type' />
              </span>

              <Button
                className='savAcc--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='savAcc--reg--form--errors'>
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='balance' component='div' />
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