import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/responsive';
import {images} from '../../assets';
import CustomHeader from '../../components/customHeader/CustomHeader';
import {MenuProvider} from 'react-native-popup-menu';
import {styles} from './homeScreen.style';

const HomeScreen = () => {
  const onPressNotification = () => {
    console.log('onPressNotification +++++');
  };

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <CustomHeader title={'Home'} onPressNotification={onPressNotification} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{'Upcoming Consultations'}</Text>
        <View style={styles.card}>
          <View>
            <View>
              <Text style={styles.medicalFileTxts}>{'Blood tests.pdf'}</Text>
              <Text style={styles.medicalFileTxts}>
                {'Cardiology results.pdf'}
              </Text>
            </View>
            <View style={styles.iconAndTxtContainer}>
              <Image source={images.stethoscope} style={styles.image} />
              <Text style={styles.counter}>7</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{'Medical Files'}</Text>
        <View style={styles.card}>
          <View>
            <View>
              <Text style={styles.medicalFileTxts}>{'Blood tests.pdf'}</Text>
              <Text style={styles.medicalFileTxts}>
                {'Cardiology results.pdf'}
              </Text>
              <Text style={styles.medicalFileTxts}>
                {'Blood tests 20-02-2020.pdf'}
              </Text>
              <Text style={styles.medicalFileTxts}>{'MRI results.pdf'}</Text>
            </View>
            <View style={styles.iconAndTxtContainer}>
              <Image source={images.stethoscope} style={styles.image} />
              <Text style={styles.counter}>7</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionButtonInner}>
            <Image
              source={images.plus}
              style={styles.image}
              tintColor={'white'}
            />
          </View>
          <Text style={styles.actionText}>{'Schedule'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionButtonInner}>
            <Image
              source={images.telephone}
              style={styles.image}
              tintColor={'white'}
            />
          </View>
          <Text style={styles.actionText}>{'Call'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
