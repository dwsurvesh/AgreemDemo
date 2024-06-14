import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/responsive';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  detailCardContainer: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
  },
  detailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    elevation: moderateScale(7),
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: moderateScale(2)},
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(2),
  },
  detailImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    marginRight: moderateScale(15),
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    color: colors.black600,
    fontWeight: '700',
    marginBottom: moderateScale(5),
  },
  detailValue: {
    color: colors.gray400,
    fontWeight: 'bold',
    fontSize: scale(13),
  },
});
