import {connect} from 'react-redux';
import View from './View';
import {getContact} from '../../../../redux/contact/contactAction';

const mapStateToProps = state => ({
  colorScheme: state.general.colorScheme,
  getContactResponse: state.contact.getContactResponse,
});

const mapDispatchToProps = {
  getContact: payload => getContact(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
