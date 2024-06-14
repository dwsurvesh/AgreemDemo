import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';

import {images} from '../../assets';
import styles from './account.style';
import CustomHeader from '../../components/customHeader/CustomHeader';
import accountScreenContoller from './accountScreen.controller';

const options = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
];

const AccountScreen = () => {
  const {
    selectedValue,
    setSelectedValue,
    date,
    showDatePicker,
    setShowDatePicker,
    showTimePicker,
    setShowTimePicker,
    imageUri,
    textInputValue,
    setTextInputValue,
    showImagePickerOptions,
    handleDateChange,
    handleTimeChange,
    handleSubmit,
    handleImagePick,
  } = accountScreenContoller();
  const onPressNotification = () => {};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <CustomHeader title="Account" onPress={onPressNotification} />

        <View style={styles.userDetailContainer}>
          <View style={styles.userDetailInnerView}>
            <TouchableOpacity onPress={showImagePickerOptions}>
              <Image
                source={imageUri ? {uri: imageUri} : images.blank_profile}
                style={styles.profileContainer}
              />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter text"
                value={textInputValue}
                onChangeText={setTextInputValue}
                placeholderTextColor={'black'}
              />

              <Dropdown
                style={styles.dropdown}
                data={options}
                labelField="label"
                valueField="value"
                placeholder="Select Gender"
                value={selectedValue}
                onChange={item => setSelectedValue(item.value)}
                selectedTextStyle={{color: 'black'}}
                placeholderStyle={{color: 'black'}}
              />
            </View>
          </View>
          <View style={styles.dateAndTimeContainer}>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateTimeTxt}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.timePickerButton}
              onPress={() => setShowTimePicker(true)}>
              <Text style={styles.dateTimeTxt}>
                {date.toLocaleTimeString()}
              </Text>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={showDatePicker}
            date={date}
            mode="date"
            onConfirm={date => {
              setShowDatePicker(false);
              handleDateChange(null, date);
            }}
            onCancel={() => {
              setShowDatePicker(false);
            }}
            maximumDate={new Date()}
          />

          <DatePicker
            modal
            open={showTimePicker}
            date={date}
            mode="time"
            onConfirm={time => {
              setShowTimePicker(false);
              handleTimeChange(null, time);
            }}
            onCancel={() => {
              setShowTimePicker(false);
            }}
          />

          <TouchableOpacity
            onPress={() => handleImagePick('camera')}
            style={styles.photoPickerBtn}>
            <Text style={styles.uploadButtonText}>Image from camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleImagePick('gallery')}
            style={styles.photoPickerBtn}>
            <Text style={styles.uploadButtonText}>Image from gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.submitBtn}>
            <Text style={styles.uploadButtonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AccountScreen;
