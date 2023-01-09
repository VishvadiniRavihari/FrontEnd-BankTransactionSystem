import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addSavAccount } from '../api/SavAccount';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function SavAccountReg() {
  const SavAccountRegSchema = Yup.object().shape({
    account_no: Yup.string().required(),
    branch_code: Yup.string().required(),
    customer_id: Yup.string().required(),
    balance: Yup.int(),
    type: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const savAcc = {
      account_no: values.account_no,
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
          account_no: '',
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
              <span>
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
              </span>
              <span>
                <Field type='text' name='branch_code' placeholder='branch_code' />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='customer_id' />
              </span>
              <span>
                <Field type='int' name='balance' placeholder='balance' />
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
                    <ErrorMessage name='account_no' component='div' />
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