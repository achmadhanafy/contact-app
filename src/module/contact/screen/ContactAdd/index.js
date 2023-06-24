import {connect} from 'react-redux';
import View from './View';
import {setContact} from '../../../../redux/contact/contactAction';

const mapStateToProps = state => ({
  colorScheme: state.general.colorScheme,
});

const mapDispatchToProps = {
  setContact: payload => setContact(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
