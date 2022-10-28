import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Button(props) {
  return (
    <View
      style={{
        // alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={props?.onPress}
        style={[
          {
            backgroundColor: 'gray',
            padding: 20,
          },
          props?.style,
          styles.button,
        ]}>
        <Text>Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
});
