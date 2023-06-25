import {useState} from 'react';

const useHomeHeader = () => {
  const [contactRecent, setContactRecent] = useState([]);
  return {
    contactRecent,
    setContactRecent,
  };
};

export default useHomeHeader;
