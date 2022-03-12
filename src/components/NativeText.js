import type {Node} from "react";
import {Text, useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import React from "react";

const NativeText = ({children, style}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <Text style={[style, {marginTop: 12, color: isDarkMode ? Colors.white : Colors.black,},]}>
        {children}
      </Text>
  );
}

export default NativeText;
