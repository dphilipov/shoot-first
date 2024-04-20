import React, { useState } from "react";
import { PlayerAreaProps } from "@/types/PlayerArea";
import {
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
  View,
} from "react-native";

function PlayerArea({ player, maxHp }: PlayerAreaProps) {
  const [counter, setCounter] = useState(0);

  const playerIsDefeated = counter >= maxHp;

  const handleCounter = (direction: "increment" | "decrement", step: number) =>
    setCounter((prevState) => {
      const newCounter =
        direction === "increment" ? prevState + step : prevState - step;

      return newCounter < 0 ? 0 : newCounter;
    });

  return (
    <View style={[styles.layout, player % 2 !== 0 && styles.rotated]}>
      <Pressable
        onPress={() => handleCounter("decrement", 1)}
        style={[styles.pressable, styles.pressableSecondary]}
      >
        <ImageBackground
          source={require("../../assets/images/icon-health.png")}
          resizeMode="cover"
          style={[styles.image, styles.imageSecondary]}
        >
          <Text style={[styles.text, styles.textSecondary]}>-1</Text>
        </ImageBackground>
      </Pressable>

      <Pressable
        onPress={() => handleCounter("decrement", 5)}
        style={[styles.pressable, styles.pressableSecondary]}
      >
        <ImageBackground
          source={require("../../assets/images/icon-health.png")}
          resizeMode="cover"
          style={[styles.image, styles.imageSecondary]}
        >
          <Text style={[styles.text, styles.textSecondary]}>-5</Text>
        </ImageBackground>
      </Pressable>

      {/* HP COUNTER */}
      <Pressable delayLongPress={1000} onLongPress={() => setCounter(0)}>
        <ImageBackground
          source={require("../../assets/images/icon-cost.png")}
          resizeMode="cover"
          style={[styles.image, styles.imagePrimary]}
        >
          <Text style={[styles.text, styles.textPrimary]}>{counter}</Text>
        </ImageBackground>
      </Pressable>
      {/* ---------- */}

      <Pressable
        onPress={() => handleCounter("increment", 5)}
        style={[styles.pressable, styles.pressableSecondary]}
      >
        <ImageBackground
          source={require("../../assets/images/icon-power.png")}
          resizeMode="cover"
          style={[styles.image, styles.imageSecondary]}
        >
          <Text style={[styles.text, styles.textSecondary]}>+5</Text>
        </ImageBackground>
      </Pressable>

      <Pressable
        onPress={() => handleCounter("increment", 1)}
        style={[styles.pressable, styles.pressableSecondary]}
      >
        <ImageBackground
          source={require("../../assets/images/icon-power.png")}
          resizeMode="cover"
          style={[styles.image, styles.imageSecondary]}
        >
          <Text style={[styles.text, styles.textSecondary]}>+1</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default PlayerArea;

const styles = StyleSheet.create({
  layout: {
    justifyContent: "center",
    height: "50%",
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
  },
  rotated: {
    transform: [{ rotate: "180deg" }],
  },
  pressable: {
    alignItems: "center",
  },
  pressablePimary: { height: 102 },
  pressableSecondary: {
    height: 71,
  },
  text: {
    fontFamily: "TeutonFett",
    color: "#ffffff",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5,
    textShadowColor: "rgba(0, 0, 0, 0.52)",
    textAlign: "center",
  },
  textPrimary: { fontSize: 60 },
  textSecondary: {
    fontSize: 32,
  },
  image: { justifyContent: "center" },
  imagePrimary: { width: 92, height: 102 },
  imageSecondary: {
    width: 60,
    height: 71,
  },
});
