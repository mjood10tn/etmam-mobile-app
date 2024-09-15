import * as Device from 'expo-device';
import axios from "../utils/axios";

export async function isRooted() {

      return Device.isRootedExperimentalAsync();
}

export async function getMobileAppVersion() {
      const { data: appVersion } = await axios.get("/getMobileAppVersion");
      return appVersion;
}