import { SafeAreaView,FlatList, StyleSheet, View} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header';
import { colors } from '../themes/colors';
import { PLANET_LIST } from '../data/planetList';
import { spacing } from '../themes/spacing';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AntDesign } from '@expo/vector-icons';
export default function Home() {
  return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{flex: 1,backgroundColor: colors.black}}>
                <PlanetHeader />
                <FlatList 
                  contentContainerStyle={styles.list}
                  data={PLANET_LIST}
                  keyExtractor= {(item, index)=>item.name}
                  renderItem= {({item, index})=>{
                    return (
                      <View style={styles.item}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                          <View style={[styles.circle, {backgroundColor: item.color}]}></View>
                          <Text preset='h4' style={styles.itemName}>{item.name}</Text>
                        </View>
                        <AntDesign name="right" size={18} color="white" />
                      </View>
                    )
                  }}
                  ItemSeparatorComponent={()=><View style={styles.separator}/>}
                />
            </View>
        </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  item:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: spacing[4]
  },
  itemName:{
    textTransform: 'uppercase',
    marginStart: spacing[4]
  },
  list:{
    padding: spacing[4]
  },
  circle:{
    width: 30,
    height: 30,
    borderRadius: 15
  },
  separator:{
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.3
  }
});