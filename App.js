import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { paddedString } from 'uuid-js';
export default function App() {
  popup = () => {
    Alert.alert(
      'ผลการทำนาย',
      'คุณจะจบ 4 ปี แน่นอน !!!(ทูน่าฟันธง)',
      [
        { text: 'OK' },
      ],
    );
  }
  popup2 = () => {
    Alert.alert(
      'ผลการทำนาย',
      'คุณจะเรียนไม่จบ (ล้อเล่น`!!!) จบแต่ช้าหน่อย',
      [
        { text: 'OK' },
      ],
    );
  }
  popup3 = () => {
    Alert.alert(
      'ผลการทำนาย',
      'ดวงชะตาไม่แน่นอน ขึ้นอยู่กับความขยัน (สู้ๆ)',
      [
        { text: 'OK' },
      ],

    );
  }
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.head}>Gipse card </Text>
        <Image source={require('./center.jpg')} style={styles.cen}></Image>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.text}> Click on the Gipse card to predict the future of education for you!</Text>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={popup}>
            <Image on source={require('./card1.jpg')} style={styles.imagecenter}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={popup2}>
            <Image source={require('./card2.jpg')} style={styles.imagecenter}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={popup3}>
            <Image source={require('./card3.jpg')} style={styles.imagecenter}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  head: {

    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    backgroundColor: '#FAE5D3',
    borderWidth: 10,
    borderRadius: 8,
    borderColor: '#F5B041',

  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#00FFFF',
    borderWidth: 2,
    borderRadius: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  cen: {
    width: 250, height: 300,
    paddingBottom: 30,
  },
  imagecenter: {
    width: 70, height: 100,
  }

});
