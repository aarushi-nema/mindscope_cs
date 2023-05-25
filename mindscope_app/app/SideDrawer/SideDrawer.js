import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SideDrawer = (props) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Main Content</Text>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={style.bottomDrawerSection}>
        <DrawerItem
        icon={({color, size}) =>(
          <Icon
            name="exit-to-app"
            color={color}
            size={size}></Icon>
        )}
        label= "Sign Out"
        onPress={()=>{}}></DrawerItem>
      </Drawer.Section>
    </View>
  )
}

export default SideDrawer

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  userInfoSection: {
    paddingLeft: 20
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 14
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3
  },
  drawerSection: {
    marginTop: 15
  }, 
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
})