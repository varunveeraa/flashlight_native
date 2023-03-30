import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./OnOffButtonStyles";

import Icon from "react-native-vector-icons/Ionicons";
import Torch from "react-native-torch";

Icon.loadFont();

const OnOffButton = () => {
  let toggleVar = false;

  const turnOnFlash = () => {
    if (toggleVar == false) {
      toggleVar = true;
      Torch.switchState(toggleVar);
    } else {
      toggleVar = false;
      Torch.switchState(toggleVar);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={turnOnFlash}>
      <Icon name="md-flashlight" size={60}></Icon>
    </TouchableOpacity>
  );
};

export default OnOffButton;
