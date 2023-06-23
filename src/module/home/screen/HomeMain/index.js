import {connect} from 'react-redux';
import View from './View'

const mapStateToProps = state => ({
  colorScheme: state.general.colorScheme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(View);
