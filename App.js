import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import {
  ScreenCapturePickerView,
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';

let config = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302',
    },
  ],
};
const App = () => {
  const [localStream, setLocalStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const getMedia = async () => {
    const mediaStream = await mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setLocalStream(mediaStream);

    const newRemote = new MediaStream();

    console.log(localStream.getTracks());

    console.log('new', newRemote);
  };
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: 'red',
        }}>
        <Text>Call</Text>
      </TouchableOpacity>
      <RTCView
        style={{
          marginTop: 10,
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        streamURL={localStream?.toURL()}
      />
      <RTCView
        style={{
          marginTop: 10,
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        streamURL={remoteStream?.toURL()}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
