import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../themes/spacing'
import { colors } from '../themes/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
export default function PlanetHeader({backBtn, title="THE PLANETS"}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
        backBtn && (
          <Pressable style={{marginEnd: spacing[2]}} onPress={()=>{navigation.goBack()}}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
        )
      }
      <Text preset='h2'>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding: spacing[5],
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGray,
        flexDirection: 'row',
        alignItems:'center'
    }
})