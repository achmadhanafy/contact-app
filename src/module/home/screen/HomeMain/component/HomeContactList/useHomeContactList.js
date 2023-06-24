import {useState} from 'react';
import {DummyProfile} from '../../../../../../config/Image';

const useHomeContactList = () => {
  const [listContact, setListContact] = useState([]);
  return {
    listContact,
    setListContact,
  };
};

export default useHomeContactList;
