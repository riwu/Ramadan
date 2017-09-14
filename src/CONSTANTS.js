import { Platform, NativeModules } from 'react-native';
import FastingChartPassed from '../Images/Fasting/passed.png';
import FastingChartTried from '../Images/Fasting/tried.png';
import FastingChartFailed from '../Images/Fasting/failed.png';
import TarawihChartPassed from '../Images/Tarawih/passed.png';
import TarawihChartFailed from '../Images/Tarawih/failed.png';

function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (typeof value === 'object' && value !== null) {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}

const CONSTANTS = {
  FASTING_CHART_IMAGES: [FastingChartPassed, FastingChartTried, FastingChartFailed],
  TARAWIH_CHART_IMAGES: [TarawihChartPassed, TarawihChartFailed],
  DASH_BOARD: 'Dashboard',
  PROFILES: 'Profiles',
  FASTING_CHART: 'My Fasting Chart',
  TARAWIH_CHART: 'My Tarawih Chart',
  SURAH_CHART: 'My Surah Chart',
  DU_A_LIST: "Du'a List",
  PRAYER_TIMES: 'Prayer Times',
  BACKUP_AND_RECOVERY: 'Backup & Recovery',
  CREDITS: 'Credits',

  BACK: 'backPress',

  STATUS_BAR_HEIGHT: (Platform.OS === 'ios')
                   ? 20
                   : NativeModules.StatusBarManager.HEIGHT,
  NAV_BAR_HEIGHT: 55,
};

CONSTANTS.DRAWER_ORDER = [
  CONSTANTS.DASH_BOARD, CONSTANTS.PROFILES, CONSTANTS.FASTING_CHART,
  CONSTANTS.TARAWIH_CHART, CONSTANTS.SURAH_CHART, CONSTANTS.DU_A_LIST,
  CONSTANTS.PRAYER_TIMES, CONSTANTS.BACKUP_AND_RECOVERY, CONSTANTS.CREDITS,
];

deepFreeze(CONSTANTS);
export default CONSTANTS;