import React from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, position: 'relative' }}>
        <Image
          source={require('C:/Users/alexxoxolex/OneDrive/Documents/TrialProject/ProjectClub/assets/images/background.png')}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16 }}>
            <View>
              <Icon name="bars" size={25} color="black" />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}
