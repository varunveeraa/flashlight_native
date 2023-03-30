// import React from "react";
// import { TouchableOpacity, Text } from "react-native";

// import styles from "./sosButtonStyles";

// import Icon from "react-native-vector-icons/Ionicons";
// import Torch from "react-native-torch";

// Icon.loadFont();

// const SosButton = () => {
//   let sosToggleVar = false;
//   let onOffRepeatVar = false;

//   const onOffRepeat = () => {
//     onOffRepeatVar = !onOffRepeatVar;
//     Torch.switchState(onOffRepeatVar);
//   };

//   const toggleSOS = () => {
//     sosToggleVar = !sosToggleVar;

//     if (sosToggleVar) {
//       var onOffInterval = setInterval(onOffRepeat, 500);
//     //   sosToggleVar = !sosToggleVar;
//     } else {
//       clearInterval(onOffInterval);
//     //   sosToggleVar = !sosToggleVar;
//     }
//   };

//   return (
//     <TouchableOpacity style={styles.button} onPress={toggleSOS}>
//       <Text style={styles.sosText}>SOS</Text>
//     </TouchableOpacity>
//   );
// };

// export default SosButton;

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Torch from "react-native-torch";

import styles from "./sosButtonStyles";

const SosButton = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleButtonPress = () => {
    // If the flashlight is already on, turn it off and clear the interval
    if (isTorchOn) {
      Torch.switchState(false);
      clearInterval(intervalId);
    } else {
      // Otherwise, turn the flashlight on and start a new interval to toggle it every 0.5 seconds
      Torch.switchState(true);
      const id = setInterval(() => {
        setIsTorchOn((prevIsTorchOn) => !prevIsTorchOn);
        Torch.switchState(!isTorchOn);
      }, 500);
      setIntervalId(id);
    }
    // Toggle the state of the flashlight
    setIsTorchOn((prevIsTorchOn) => !prevIsTorchOn);
  };

  useEffect(() => {
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [intervalId]);
  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.sosText}>SOS</Text>
    </TouchableOpacity>
  );
};

export default SosButton;
