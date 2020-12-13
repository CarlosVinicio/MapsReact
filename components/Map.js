import React from 'react';
import MapView, { Marker } from "react-native-maps";
import {Dimensions, StyleSheet} from "react-native";

export const Map = (props) => {

  const {longPress, points, pointsFilter} = props;
console.log(points);
  return (
    <MapView
      style={styles.map}
      onLongPress={longPress}
    >
      { pointsFilter &&
        points.map(point => <Marker key={point.name} title={point.name} coordinate={point.coordinate}/> )
      }
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width
  }
})