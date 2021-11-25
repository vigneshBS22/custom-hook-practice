import React from 'react';

import { useState } from 'react/cjs/react.development';
import useFieldUpdate from './useFieldUpdate';
import {
  nameValidator,
  ageValidator,
  emailValidator,
  passwordValidator,
} from './validators';
function App() {
  const name = useFieldUpdate('', nameValidator);
  const age = useFieldUpdate('', ageValidator);
  const email = useFieldUpdate('', emailValidator);
  const password = useFieldUpdate('', passwordValidator);
  const retypePassword = useFieldUpdate('');
  const [submitForm, setSubmitForm] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (
      !name.error &&
      !age.error &&
      !email.error &&
      !password.error &&
      !retypePassword.error
    )
      console.log(
        name.value,
        age.value,
        email.value,
        password.value,
        retypePassword.value
      );
    setSubmitForm(true);
  };

  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen'>
      <div className='w-full text-center mx-auto pt-10 text-5xl font-extrabold text-white bg-clip-text'>
        HTML form
      </div>
      <div className='max-w-sm mx-auto my-10'>
        <form className='bg-white rounded px-16 pt-6 pb-8 ml-10 shadow-2xl'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Vignesh'
              value={name.value}
              onChange={name.changeHandler}
              className='shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {submitForm && <div className='text-red-500'>{name.error}</div>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Age
            </label>
            <input
              id='age'
              type='text'
              placeholder='25'
              value={age.value}
              onChange={age.changeHandler}
              className='shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {submitForm && <div className='text-red-500'>{age.error}</div>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email Address
            </label>
            <input
              id='email'
              type='text'
              placeholder='username@email.com'
              value={email.value}
              onChange={email.changeHandler}
              className='shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {submitForm && <div className='text-red-500'>{email.error}</div>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='*******'
              value={password.value}
              onChange={password.changeHandler}
              className='shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {submitForm && <div className='text-red-500'>{password.error}</div>}
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Retype Password
            </label>
            <input
              id='retypePassword'
              type='password'
              placeholder='*******'
              value={retypePassword.value}
              onChange={retypePassword.changeHandler}
              className='shadow appearance-none border rounded w-min py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {submitForm && (
              <div className='text-red-500'>
                {password.value !== retypePassword.value
                  ? 'password dont match'
                  : ''}
              </div>
            )}
          </div>
          <div>
            <button
              className='mt-5 text-center ml-4 text-gray-100 bg-purple-400 p-4 rounded-lg font-bold'
              onClick={submit}
            >
              Click to Validate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
