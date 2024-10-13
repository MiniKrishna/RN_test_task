import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export const useTextAnimation = (dependency: string | number) => {
    const animatedValue = useRef(new Animated.Value(1)).current;
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return; // Пропускаем анимацию на первом рендере
        }

        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 700,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            }).start();
        });
    }, [dependency]);

    return animatedValue;
};

