import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../themes/spacing'
import { colors } from '../themes/colors'

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset='h2'>THE PLANETS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding: spacing[5],
        borderBottomWidth: 1,
        borderBottomColor: colors.darkGray
    }
})