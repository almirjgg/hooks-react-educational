import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'almir',
    email: 'a@example.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value, target);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <form className='form' action=''>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
          name='username'
          value={username}
          onChange={onInputChange}
        />
        <input
          type='email'
          className='form-control'
          placeholder='email'
          name='email'
          value={email}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
