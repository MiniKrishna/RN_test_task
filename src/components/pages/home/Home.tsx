import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../shared/models';


type HomeScreenProps = BottomTabScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Button
          title="Перейти в котировки"
          onPress={() => navigation.navigate('Market')}
        />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
