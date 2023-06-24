import {connect} from 'react-redux';
import View from './View';
import {getContact, putContact} from '../../../../redux/contact/contactAction';

const mapStateToProps = state => ({
  colorScheme: state.general.colorScheme,
  getContactResponse: state.contact.getContactResponse,
});

const mapDispatchToProps = {
  getContact: payload => getContact(payload),
  putContact: payload => putContact(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
