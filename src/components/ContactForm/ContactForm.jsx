import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { useId } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      }),
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={s.form}>
          <div className={s.form_item}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={s.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.form_item_error}
            />
          </div>

          <div className={s.form_item}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={s.field}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.form_item_error}
            />
          </div>

          <button
            className={s.form_btn_submit}
            type="submit"
            disabled={!(isValid && dirty)}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
