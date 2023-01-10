import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addLoanApplicant} from '../api/LoanApplication';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function LoanApplicantReg() {
  const LoanApplicantRegSchema = Yup.object().shape({
    // application_id: Yup.string().required(),
    employee_id: Yup.string().required(),
    branch_code: Yup.string().required(),
    amount: Yup.string().required(),
    period: Yup.number().required(),
    status: Yup.string().required(),
    customer_id: Yup.string().required(),
    
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const LoanApplicant = {
        // application_id: values.application_id,
        employee_id: values.employee_id,
        branch_code: values.branch_code,
        amount: values.amount,
        period: values.period,
        status: values.status,
        customer_id: values.customer_id,
    
    };
    addLoanApplicant({ LoanApplicant }).then(() => setSubmitting(false));
  };
  return (
    <div>
      {/* <h1>Loan Registration</h1> */}
      <Formik
        initialValues={{
            // application_id: '',
            employee_id: '',
            branch_code:'',
            amount: '',
            period: '',
            status: '',
            customer_id: '',
        }}
        validationSchema={LoanApplicantRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='LoanApplicant--reg--form'>
              <h1>Loan Application</h1>
              {/* <span>
                <Field
                  type='text'
                  name='application_no'
                  placeholder='Loan Application Number'
                />
              </span> */}
              <span>
                <Field type='text' name='employee_id' placeholder='Employee ID' />
              </span>
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>
              <span>
                <Field type='text' name='amount' placeholder='Amount' />
              </span>
              <span>
                <Field type='text' name='period' placeholder='Period' />
              </span>
              <span>
                <Field type='text' name='status' placeholder='Status' />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='Customer ID' />
              </span>

              <Button
                className='LoanApplicant--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='LoanApplicant--reg--form--errors'>
                    {/* <ErrorMessage name='application_id' component='div' /> */}
                    <ErrorMessage name='employee_id' component='div' />
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='amount' component='div' />
                    <ErrorMessage name='period' component='div' />
                    <ErrorMessage name='status' component='div' />
                    <ErrorMessage name='customer_id' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}