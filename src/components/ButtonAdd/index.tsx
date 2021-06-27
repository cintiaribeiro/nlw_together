import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps &{
    title: string
}
export function ButtonAdd({...rest}: RectButtonProps) {

    return(
        <RectButton style={styles.container}>
           <MaterialCommunityIcons
            name="plus"
            color={theme.colors.heading}
            size= {24}
           />
        </RectButton>
    );
    
}