import {DiscoverIcon, MedalIcon, ProfileIcon, SaveIcon} from '../../assets';
import {View} from 'react-native';
import {styles} from './styles.ts';

const tabNames = {
  Save: 'Save',
  Discover: 'Disc over',
  Achievement: 'Achievement',
  Profile: 'Profile',
};

const activeColor = '#6209D9';
const getIcon = (name: string, focused: boolean) => {
  switch (name) {
    case 'Save':
      return <SaveIcon isFocused={focused} focusedFill={activeColor} />;
    case 'Discover':
      return <DiscoverIcon isFocused={focused} focusedFill={activeColor} />;
    case 'Achievement':
      return <MedalIcon isFocused={focused} focusedFill={activeColor} />;
    case 'Profile':
      return <ProfileIcon isFocused={focused} focusedFill={activeColor} />;
  }
};

export default function getTabOptions(route: any) {
  return {
    headerShown: true,
    tabBarShowLabel: false,
    tabBarStyle: {
      borderTopWidth: 1,
    },
    tabBarIcon: ({focused}: {focused: boolean}) => {
      return (
        <View style={styles.container}>
          {getIcon(route.name, focused)}
          <View
            style={[
              styles.indicator,
              {backgroundColor: focused ? activeColor : 'transparent'},
            ]}
          />
        </View>
      );
    },
  };
}
