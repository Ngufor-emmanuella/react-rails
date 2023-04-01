import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreetings } from '../redux/messages/messages';

const Greeting = () => {
  const message = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(retrieveGreetings());
}, []);

return <h1>{ message.Text }</h1>;
};

export default Greeting;
