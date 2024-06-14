import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {useDispatch, useSelector} from 'react-redux';
import {setBatteryLevel} from '../../redux/slices';
import {styles} from './deviceSetailsStyle';
import CustomHeader from '../../components/customHeader/CustomHeader';
import {images} from '../../assets';

interface AppState {
  app: {
    batteryLevel: number | null;
  };
}

function DeviceDetailsScreen() {
  const dispatch = useDispatch();

  const batteryLevel = useSelector((state: AppState) => state.app.batteryLevel);

  const [totalDiskSpace, setTotalDiskSpace] = useState<string | null>(null);

  useEffect(() => {
    DeviceInfo.getBatteryLevel().then(level => {
      dispatch(setBatteryLevel(level));
    });

    DeviceInfo.getTotalDiskCapacity().then(capacity => {
      const totalSpaceGB = (capacity / Math.pow(1024, 3)).toFixed(2);
      setTotalDiskSpace(`${totalSpaceGB} GB`);
    });
  }, [dispatch]);

  const renderDetailCard = (label: any, value: any, imageSource: any) => {
    return (
      <View style={styles.detailCardContainer}>
        <View style={styles.detailCard}>
          <Image source={imageSource} style={styles.detailImage} />
          <View style={styles.detailContent}>
            <Text style={styles.detailLabel}>{label}</Text>
            <Text style={styles.detailValue}>{value}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <CustomHeader title={'Device'} />
      {renderDetailCard(
        'App Version',
        DeviceInfo.getVersion(),
        images.appVersion,
      )}
      {renderDetailCard(
        'Build Version',
        DeviceInfo.getBuildNumber(),
        images.buildVersion,
      )}
      {renderDetailCard(
        'Bundle Identifier',
        DeviceInfo.getBundleId(),
        images.bundleIdentifier,
      )}
      {batteryLevel !== null &&
        renderDetailCard(
          'Battery Level',
          `${Math.round(batteryLevel * 100)}%`,
          images.batteryLevel,
        )}

      {totalDiskSpace &&
        renderDetailCard('Total Disk Space', totalDiskSpace, images.disc)}
    </ScrollView>
  );
}

export default DeviceDetailsScreen;
