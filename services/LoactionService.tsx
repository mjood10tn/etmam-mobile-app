import * as Location from 'expo-location';
import axios from "../utils/axios";
import { Platform } from 'react-native';
import * as Application from 'expo-application';
import { isRooted } from './DeviceService';
//this function will check if the location permission is granted or not
export async function checkLocationPermission(): Promise<boolean> {
  const { status } = await Location.requestForegroundPermissionsAsync();

  return status === 'granted';

}
// this function will check if the GPS is enabled or not
export async function checkGPS(): Promise<boolean> {
  const status = await Location.hasServicesEnabledAsync()

  return status;

}
// this function will get the current location
async function getLocation(): Promise<Location.LocationObject | null> {
  const hasPermission = await checkLocationPermission();
  if (hasPermission) {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      return location;
    } catch (error) {
      console.error('Error getting location:', error);
      return null;
    }
  } else {
    return null;
  }
}
// this function will send the location to the server
export async function sendLoaction(punch: number) {


  const gpsStatus = await checkGPS();
  if (!gpsStatus) {
    throw {
      response: {
        data: {
          message: 'يبدو ان GPS غير مفعل'
        }
      }
    }
  }
  const hasPermission = await checkLocationPermission();
  if (!hasPermission) {
    throw {
      response: {
        data: {
          message: 'يجب السماح بالوصول للموقع الحالي'
        }
      }
    }
  }
  const checkIfFakeLocation = await isGPSMocked()
  const isRootedDevice = await isRooted();
  if (checkIfFakeLocation === false && isRootedDevice === false) {

    const location = await getLocation();
    if (location) {
      const { coords } = location;
      const { latitude, longitude } = coords;

      // console.log('latitude:', latitude);
      // console.log('longitude:', longitude);
      // send location to server
      const deviceId = Platform.OS === 'android' ? Application.getAndroidId() : Application.getIosIdForVendorAsync();
      console.log({
        punch,
        latitude,
        longitude,
        deviceId
      })
      const { data: status } = await axios.post("/setMobilePunch", {
        punch,
        latitude,
        longitude,
        deviceId
      });
      return status;
    }

  } else {
    throw {
      response: {
        data: {
          message: 'الرجاء تعطيل تزييف الموقع واعادة المحاولة'
        }
      }
    };
  }
}

export async function isGPSMocked() {

  let location = await getLocation();
  //false means the location is not mocked
  //true means the location is mocked
  return location?.mocked


}