import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { View, Platform, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import CONSTANTS from '../constants';

import DashBoard from './DashBoardNav';
import ProfilesNav from './ProfilesNav';
import FastingChartNav from './FastingChartNav';
import TarawihChartNav from './TarawihChartNav';
import SurahChartNav from './SurahChartNav';
import DuaList from './DuaListNav';
import PrayerTimes from './PrayerTimesNav';
import BackupAndRecovery from './BackupAndRecoveryNav';
import Credits from './CreditsNav';

const styles = StyleSheet.create({
  navigationPadding: {
    ...Platform.select({
      ios: {
        paddingTop: Constants.statusBarHeight,
      },
      android: {
        paddingTop: Constants.statusBarHeight,
      },
    }),
  },
});

const navs = [
  DashBoard,
  ProfilesNav,
  FastingChartNav,
  TarawihChartNav,
  SurahChartNav,
  DuaList,
  PrayerTimes,
  BackupAndRecovery,
  Credits,
];

const Drawer = DrawerNavigator(
  CONSTANTS.DRAWER_ORDER.reduce(
    (obj, element, index) => ({
      ...obj,
      [element]: {
        screen: navs[index],
      },
    }),
    {},
  ),
  {
    drawerWidth: 250,
    contentComponent: (props) => (
      <View style={styles.navigationPadding}>
        <DrawerItems {...props} />
      </View>
    ),
  },
);

export default Drawer;
