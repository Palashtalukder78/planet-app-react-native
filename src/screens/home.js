import { SafeAreaView, StyleSheet, View} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header';
import { colors } from '../themes/colors';

export default function Home() {
  return (
    
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{flex: 1,backgroundColor: colors.black}}>
                <PlanetHeader />
            </View>
        </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});