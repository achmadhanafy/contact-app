import {SIZE} from '../../../../util/constant';

export default {
  main: {
    container: {paddingHorizontal: 16, paddingBottom: 100},
  },
  button: {
    container: {
      position: 'absolute',
      bottom: 0,
      width: SIZE.screen.width - 32,
      alignSelf: 'center',
      marginBottom: 24,
    },
    item: {flexDirection: 'row', alignItems: 'center'},
  },
  itemCenter: {alignItems: 'center'},
  mt24: {marginTop: 24},
  mr10: {marginRight: 10},
};
