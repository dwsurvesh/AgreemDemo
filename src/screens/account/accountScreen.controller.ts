import {useState} from 'react';
import {Platform, Alert} from 'react-native';
import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const accountScreenContoller = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');

  const requestCameraPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA,
      );
      return result;
    } catch (error) {
      console.error('Failed to request camera permission', error);
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );
      return result;
    } catch (error) {
      console.error('Failed to request gallery permission', error);
    }
  };

  const handleImagePick = async (type: 'camera' | 'gallery') => {
    const options: CameraOptions = {
      mediaType: 'photo', // Ensure this matches the type from Camera.MediaType
      includeBase64: false,
    };

    let permissionResult;
    if (type === 'camera') {
      permissionResult = await requestCameraPermission();
    } else {
      permissionResult = await requestGalleryPermission();
    }

    if (permissionResult === RESULTS.GRANTED) {
      const callback = (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          setImageUri(response.assets[0].uri);
        }
      };

      if (type === 'camera') {
        launchCamera(options, callback);
      } else {
        launchImageLibrary(options, callback);
      }
    } else {
      Alert.alert(
        'Permission Denied',
        'You need to grant permission to access this feature.',
      );
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      'Select Image Source',
      'Choose an option to select an image',
      [
        {
          text: 'Camera',
          onPress: () => handleImagePick('camera'),
        },
        {
          text: 'Gallery',
          onPress: () => handleImagePick('gallery'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const handleDateChange = (event: any, selectedDate: any) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event: any, selectedTime: any) => {
    if (Platform.OS === 'android') {
      setShowTimePicker(false);
    }
    if (selectedTime) {
      setDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setHours(selectedTime.getHours());
        newDate.setMinutes(selectedTime.getMinutes());
        return newDate;
      });
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      'Form Submitted',
      `Text: ${textInputValue}\nSelected: ${selectedValue}\nDate: ${date.toLocaleDateString()}\nTime: ${date.toLocaleTimeString()}`,
    );
  };

  return {
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
  };
};

export default accountScreenContoller;
