import React from 'react';
import {Dimensions, StyleSheet, View, Button} from "react-native";

export const Panel = ({titleLeft, onPressLeft, tooglePointFilter}) => {
  return (
    <View style={styles.panel}>
      <Button title={titleLeft} onPress={onPressLeft} />
      <Button title={'Mostrar/Ocultar'} onPress={tooglePointFilter}/>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})