import {Color} from '../../config/Color';
import {SIZE} from '../../util/constant';

export default {
  modal: {flex: 1, justifyContent: 'flex-end', margin: 0},
  container: {
    backgroundColor: Color.white.light,
    paddingTop: 12,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    margin: 0,
    zIndex: -1,
  },
  p16: {padding: 16},
  closeContainer: {position: 'absolute', left: 15, top: 5, zIndex: 10},
  imgContainer: {
    top: -100,
    position: 'absolute',
    width: SIZE.screen.width,
    alignItems: 'center',
  },
  text: {marginTop: 48, marginBottom: 24},
};
