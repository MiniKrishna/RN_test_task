import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home';
import MarketScreen from '../pages/market';
import { RootStackParamList } from '../shared/models';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator<RootStackParamList>();

const Navigation = (): React.JSX.Element => {

    const getTabIcon = (route: string, color: string, size: number) => {
        const iconName = route === 'Home' ? 'home' : 'area-chart';
        return <Icon name={iconName} size={size} color={color} />;
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => getTabIcon(route.name, color, size),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'О приложении' }} />
                <Tab.Screen name="Market" component={MarketScreen} options={{ title: 'Котировки' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;
