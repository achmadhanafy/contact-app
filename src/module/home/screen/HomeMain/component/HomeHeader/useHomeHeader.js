import {useState} from 'react';
import {DummyProfile} from '../../../../../../config/Image';

const useHomeHeader = () => {
  const [contactRecent, setContactRecent] = useState([
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
    {
      img: DummyProfile,
    },
  ]);
  return {
    contactRecent,
    setContactRecent,
  };
};

export default useHomeHeader;
