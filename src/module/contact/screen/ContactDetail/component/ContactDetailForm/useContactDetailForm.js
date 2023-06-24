import {useState} from 'react';

const useContactDetailForm = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: 'none',
  });
  return {contact, setContact};
};

export default useContactDetailForm;
