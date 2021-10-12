import React, { useEffect, useState } from 'react';
import TextField from './../components/textField';
import { validator } from './../utils/validator';

const Login = () => {
  /**
   * при добавлении нового инпут,
   * нужно только добавить поле-состояние в объект состояния
   * handleChange останется одним для всех
   */
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const isValid = Object.keys(errors).length === 0;

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    /**
     * название поля, а внутри требование (внутри которого сообщение,
     * которое необходимо вернуть, если требование не выполнено)
     */
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Email введён некорректно' },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: { message: 'Пароль должен содержать хотя бы одну заглавную букву' },
      isContainDigit: { message: 'Пароль должен содержать хотя бы одну цифру' },
      min: { message: 'Пароль должен состоять минимум из 8 символов', value: 8 },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label={'Электронная почта'}
              name={'email'}
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              label={'Пароль'}
              type={'password'}
              name={'password'}
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button className='btn btn-primary w-100 mx-auto' type='submit' disabled={!isValid}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
