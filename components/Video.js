import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {MediaStream, RTCView} from 'react-native-webrtc';

function ButtonContainer(props) {
  return (
    <View
      style={{
        bottom: 30,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={props.hangup}
        style={{
          padding: 20,
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text>Disconnect</Text>
      </TouchableOpacity>
    </View>
  );
}

function Video(props) {
  //On call we will just display the local stream
  if (props.localStream && !props.remoteStream) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <RTCView
          streamURL={props.localStream.toURL()}
          objectFit={'cover'}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        <ButtonContainer hangup={props.hangup} />
      </View>
    );
  }
  //local stream on top of remote stream bottom
  if (props.localStream && !props.remoteStream) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <RTCView
          streamURL={props.remoteStream.toURL()}
          objectFit={'cover'}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        <RTCView
          streamURL={props.localStream.toURL()}
          objectFit={'cover'}
          style={{
            position: 'absolute',
            width: 150,
            height: 150,
            top: 0,
            left: 20,
            elevation: 20,
          }}
        />
        <ButtonContainer hangup={props.hangup} />
      </View>
    );
  }
  return <ButtonContainer />;
}

export default Video;
