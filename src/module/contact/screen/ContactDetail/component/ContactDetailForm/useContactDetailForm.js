import {useState} from 'react';

const useContactDetailForm = () => {
  const [contact, setContact] = useState({});
  return {contact, setContact};
};

export default useContactDetailForm;
