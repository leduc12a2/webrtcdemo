import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function GettingCall(props) {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <Image
        source={{
          uri: 'https://www.online-tech-tips.com/wp-content/uploads/2021/04/00-the-best-caller-id-apps-for-android-and-iphone-featured-image.jpg',
        }}
        style={{
          ...StyleSheet.absoluteFill,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        resizeMode="stretch"
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 20,
            marginRight: 10,
          }}
          onPress={props?.join}>
          <Text>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 20,
          }}
          onPress={props?.hangup}>
          <Text>Denied</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
