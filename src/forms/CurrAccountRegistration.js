import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addCurrAccount } from '../api/CurrAccount';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function CurrAccountReg() {
  const CurrAccountRegSchema = Yup.object().shape({
    // account_no: Yup.string().required(),
    branch_code: Yup.string().required(),
    customer_id: Yup.string().required(),
    balance: Yup.number(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const currAcc = {
      // account_no: values.account_no,
      branch_code: values.branch_code,
      customer_id: values.customer_id,
      balance: values.balance,
    };
    addCurrAccount({ currAcc }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          // account_no: '',
          branch_code: '',
          customer_id: '',
          balance: '',
        }}
        validationSchema={CurrAccountRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='currAcc--reg--form'>
              <h1>Current Account Registration</h1>
              {/* <span>
                <Field
                  type='text'
                  name='account_no'
                  placeholder='account_no'
                  style={
                    // check
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span> */}
              <span>
                <Field type='text' name='branch_code' placeholder='branch_code' />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='customer_id' />
              </span>
              <span>
                <Field type='int' name='balance' placeholder='balance' />
              </span>
          

              <Button
                className='currAcc--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='currAcc--reg--form--errors'>
                    {/* <ErrorMessage name='account_no' component='div' /> */}
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='balance' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}