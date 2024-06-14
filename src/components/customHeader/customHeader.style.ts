import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../utils/responsive';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(13),
    paddingHorizontal: scale(10),
  },
  startView: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
  },
  endView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: scale(17),
  },
  headerIconStyle: {
    width: scale(20),
    height: verticalScale(22),
    marginHorizontal: scale(5),
  },
  titleAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuTxt: {
    fontSize: scale(15),
    color: colors.gray400,
    fontWeight: '500',
  },
  menuOptionsContainer: {
    marginTop: scale(10),
    padding: scale(10),
    backgroundColor: colors.white,
    borderRadius: scale(8),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scale(10),
    elevation: 5,
  },
  menuOptionWrapper: {
    paddingVertical: verticalScale(10),
  },
  menuOptionText: {
    fontSize: scale(16),
    color: '#333',
  },
});
