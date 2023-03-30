import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Magnetometer } from "expo-sensors";

const Compass = () => {
  const [magnetometerData, setMagnetometerData] = useState(null);

  const subscription = React.useRef(null);

  useEffect(() => {
    Magnetometer.setUpdateInterval(16);
    subscription.current = Magnetometer.addListener((data) => {
      setMagnetometerData(data);
    });
    return () => {
      subscription.current && subscription.current.remove();
    };
  }, []);

  const getAngle = () => {
    if (!magnetometerData) {
      return null;
    }
    let { x, y, z } = magnetometerData;
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle < 0) {
      angle = 360 + angle;
    }
    return Math.round(angle);
  };

  const angle = getAngle();

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          angle && { transform: [{ rotate: `${360 - angle}deg` }] },
        ]}
        source={require("./compass.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>{angle && `${angle}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Compass;
