import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { Map } from './components/Map';
import { ModalComponent } from './components/Modal';
import { Panel } from './components/Panel';
import { Input } from './components/Input';
import { List } from './components/List';

export default function App() {

  const [points, setPoints] = useState([]);
  const [tempPoint, setTempPoint] = useState();
  const [nombre, setNombre] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState();
  const [pointsFilter, setPointsFilter] = useState(true);

  const tooglePointFilter = () => setPointsFilter(!pointsFilter);

  const handleOnPress = (event) => {
    const { nativeEvent } = event; // Muestra las cordenadas
    setVisibilityFilter('new_point');
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
  }

  const handleChangeText = text => {
    setNombre(text);
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: tempPoint, name: nombre };
    setPoints([...points, newPoint]);
    setNombre('');
    setVisibility(false);
  }

  const handleList = () => {
    setVisibilityFilter('all_points');
    setVisibility(true);
  }

  const handleCloseModal = () => {
    setVisibility(false);
  }

  return (
    <View style={styles.container}>
      <Map 
        longPress={handleOnPress} 
        points={points}
        pointsFilter={pointsFilter}
      />
      <Panel 
        titleLeft={'Lista'} 
        onPressLeft={handleList} 
        tooglePointFilter={tooglePointFilter}
      />
      <ModalComponent
        visibility={visibility}
      >
        {
          visibilityFilter === 'new_point' ?
            <>
              <View style={styles.form}>
                <Input
                  title={'Nombre'}
                  placeholder={'Nombre del punto'}
                  onChangeText={handleChangeText}
                />
                <Button title={'Aceptar'} onPress={handleSubmit} />
              </View>
            </>
            : <List points={points} onCloseModal={handleCloseModal} />
        }

      </ModalComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding:20
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center', // eje x
    justifyContent: 'flex-start', // eje y
  }
});
