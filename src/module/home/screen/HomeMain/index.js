import {connect} from 'react-redux';
import View from './View';
import {
  delContact,
  getContactClear,
  getContacts,
} from '../../../../redux/contact/contactAction';

const mapStateToProps = state => ({
  colorScheme: state.general.colorScheme,
  getContactsResponse: state.contact.getContactsResponse,
  getContactsFetch: state.contact.getContactsFetch,
  getContactsError: state.contact.getContactsError,
});

const mapDispatchToProps = {
  getContacts: () => getContacts(),
  getContactClear: () => getContactClear(),
  delContact: payload => delContact(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
