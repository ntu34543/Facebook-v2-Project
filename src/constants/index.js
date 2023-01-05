import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Dimensions} from 'react-native';

export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height)
export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
