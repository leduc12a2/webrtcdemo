import {mediaDevices} from 'react-native-webrtc';

export default class Utils {
  static async getStream() {
    let stream;
    try {
      stream = await mediaDevices.getUserMedia({video: true, audio: true});
    } catch (e) {
      console.error(e);
    }

    if (typeof stream != 'boolean') return stream;
    return null;
  }
}
