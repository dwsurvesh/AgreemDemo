import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/responsive';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyView: {
    flex: 1,
  },
  headerTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: scale(17),
  },
  headeIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headeIconStyle: {
    width: scale(22),
    height: scale(22),
    tintColor: colors.white,
    marginLeft: scale(7),
  },
  header: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: verticalScale(15),
    padding: scale(15),
  },
  section: {
    marginVertical: verticalScale(10),
    marginBottom: verticalScale(15),
    paddingHorizontal: scale(15),
  },
  sectionTitle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: verticalScale(10),
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.gray,
    padding: verticalScale(10),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  medicalFileTxts: {
    marginVertical: verticalScale(1),
    color: colors.primary,
    fontWeight: '500',
    fontSize: scale(13),
  },
  image: {
    width: scale(30),
    height: scale(30),
  },
  counter: {
    fontSize: scale(38),
    fontWeight: 'bold',
    color: colors.primary,
    marginHorizontal: moderateScale(15),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(15),
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: verticalScale(15),
    borderRadius: 8,
    borderWidth: 0.5,
    width: scale(140),
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5.84,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  actionButtonInner: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 100,
    marginBottom: 15,
  },
  actionText: {
    color: colors.primary,
    fontWeight: '500',
    marginLeft: scale(10),
    fontSize: scale(16),
  },
  iconAndTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
