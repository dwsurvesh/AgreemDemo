import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/responsive';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  userDetailContainer: {
    padding: scale(10),
  },
  userDetailInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    height: 130,
    width: 130,
    borderRadius: moderateScale(10),
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    borderRadius: scale(20),
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: scale(7),
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  dropdown: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: scale(7),
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10),
  },
  dateAndTimeContainer: {
    marginVertical: verticalScale(20),
  },
  datePickerButton: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: scale(7),
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: verticalScale(20),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  dateTimeTxt: {
    fontWeight: '500',
    color: colors.black,
    fontSize: moderateScale(15),
  },
  timePickerButton: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: scale(7),
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: verticalScale(20),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  datePickerButtonText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'cover',
  },
  photoPickerBtn: {
    borderWidth: 1,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: colors.primary,
    marginBottom: verticalScale(20),
  },
  uploadButtonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: moderateScale(15),
  },
  submitBtn: {
    backgroundColor: colors.primary,
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
});

export default styles;
