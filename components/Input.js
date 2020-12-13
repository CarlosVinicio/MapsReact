import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export const Input = ({title, ...rest}) => {

  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40
  }
});