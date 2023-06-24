import {useState} from 'react';
import {DummyProfile} from '../../../../../../config/Image';

const useHomeHeader = () => {
  const [contactRecent, setContactRecent] = useState([]);
  return {
    contactRecent,
    setContactRecent,
  };
};

export default useHomeHeader;
