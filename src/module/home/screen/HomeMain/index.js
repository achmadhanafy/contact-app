import {connect} from 'react-redux';
import View from './View';
import {getContactClear, getContacts} from '../../../../redux/contact/contactAction';

const mapStateToProps = state => ({
  colorScheme: state.general.colorScheme,
  getContactsResponse: state.contact.getContactsResponse,
});

const mapDispatchToProps = {
  getContacts: () => getContacts(),
  getContactClear: () => getContactClear(),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
