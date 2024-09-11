import * as Device from 'expo-device';

export async function isRooted() {

      return Device.isRootedExperimentalAsync();
}