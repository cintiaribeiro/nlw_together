import React from "react";
import { Image} from 'react-native';

import { styles } from "./styles";


export function GuildIcon() {
   const uri = "https://maitopartem.com/wp-content/uploads/2020/11/discord_icon_130958.png";
    return(
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
    
}