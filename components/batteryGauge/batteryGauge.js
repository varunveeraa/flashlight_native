import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./batteryGaugeStyles";

import * as Battery from "expo-battery";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      const battery = await Battery.getBatteryLevelAsync();
      setBatteryLevel(battery);
    };

    getBatteryLevel();

    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View>
      {batteryLevel !== null && (
        <>
          <Text style={styles.text}> {Math.round(batteryLevel * 100)}%</Text>
        </>
      )}
    </View>
  );
};

export default BatteryStatus;
