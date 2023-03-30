import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import OnOffButton from "./components/onOffButton/onOffButton";
import SosButton from "./components/sosButton/sosButton";
import BatteryGauge from "./components/batteryGauge/batteryGauge";
import Compass from "./components/compass/compass";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BatteryGauge></BatteryGauge>
      <Compass></Compass>
      <OnOffButton></OnOffButton>
      <SosButton></SosButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 2,
    backgroundColor: "#1a1a1a",
  },
});
