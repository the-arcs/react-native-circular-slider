import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { G, Text, Line } from "react-native-svg";
import range from "lodash.range";
import PropTypes from "prop-types"; // ES6
import { NightIcon } from "../../../src/ui/assets/images/eventSuggestionIcons/timeOfDayIcons/NightIcon";
import { AfternoonIcon } from "../../../src/ui/assets/images/eventSuggestionIcons/timeOfDayIcons/AfternoonIcon";

export default class ClockFace extends PureComponent {
  static propTypes = {
    r: PropTypes.number,
    stroke: PropTypes.string,
  };

  render() {
    const { r, stroke } = this.props;
    const faceRadius = r - 5;
    const textRadius = r - 33;
    const clockNumbers = [
      "12AM",
      2,
      4,
      "6am",
      8,
      10,
      "12PM",
      2,
      4,
      "6am",
      8,
      10,
      "12AM",
    ];
    return (
      <G>
        {range(48).map((i) => {
          const cos = Math.cos(((2 * Math.PI) / 48) * i);
          const sin = Math.sin(((2 * Math.PI) / 48) * i);

          return (
            <Line
              key={i}
              stroke={stroke}
              strokeWidth={i % 4 === 0 ? 3 : 1}
              x1={cos * faceRadius}
              y1={sin * faceRadius}
              x2={cos * (faceRadius - 7)}
              y2={sin * (faceRadius - 7)}
            />
          );
        })}
        <G transform={{ translate: "0, 5" }}>
          {clockNumbers.map((h, i) => (
            <Text
              fontFamily={"montserrat"}
              fontWeight={400}
              key={i}
              fill={stroke}
              fontSize="16"
              textAnchor="middle"
              x={
                textRadius *
                Math.cos(((2 * Math.PI) / 12) * i - Math.PI + Math.PI / 2)
              }
              y={
                textRadius *
                Math.sin(((2 * Math.PI) / 12) * i - Math.PI + Math.PI / 2)
              }
            >
              {h}
            </Text>
          ))}
        </G>
        <View style={styles.icon}>
          <NightIcon circleFill="none"></NightIcon>
        </View>
        <View style={styles.icon}>
          <AfternoonIcon circleFill="none"></AfternoonIcon>
        </View>
      </G>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 78,
    justifyContent: "center",
    alignItems: "center",
  },
});
