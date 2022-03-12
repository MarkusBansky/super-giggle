import type {Node} from "react";
import React from "react";
import {View, useColorScheme, Text, Pressable} from "react-native";
import NativeText from "../components/NativeText";
import CountryFlag from "react-native-country-flag";
import {Colors} from "react-native/Libraries/NewAppScreen";

const Welcome = ({onContinue}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{ height: '100%', minHeight: 600 }}>
      <NativeText>
        Welcome to <Text style={{ fontWeight: 'bold' }}>Super Giggle</Text>!
      </NativeText>
      <NativeText>
        This application helps you to <Text style={{ fontStyle: 'italic' }}>explore</Text> different websites. There are a few simple steps to follow:
      </NativeText>
      <NativeText style={{ marginLeft: 8 }}>
        1. Allow access to some settings on your phone or OS for this app as it launches VPN automatically, stores properties on disk and uses internet.
      </NativeText>
      <NativeText style={{ marginLeft: 8 }}>
        2. Enter the details of the websites to explore.
      </NativeText>
      <NativeText style={{ marginLeft: 8 }}>
        3. Hit the button and start exploring!
      </NativeText>
      <NativeText>
        This application has an open source code so you can check what it does internally if you will feel safer in that way.
      </NativeText>
      <NativeText>
        Now, if you are ready, we can continue to the applications itself.
      </NativeText>

      <View style={{ marginTop: 16 }}>
        <Pressable
          onPress={() => onContinue()}
          style={({ pressed }) => [
            {
              backgroundColor: isDarkMode
                ? '#0E3EDA'
                : '#F0F0F0',
              borderRadius: 3,
              paddingTop: 14,
              paddingBottom: 14,
              paddingLeft: 18,
              paddingRight: 18,
            },
          ]}>
          {({ pressed }) => (
            <Text style={{
              color: isDarkMode
                ? 'white'
                : 'black',
            }}>
              Continue
            </Text>
          )}
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", position: 'absolute', bottom: 144 }}>
        <CountryFlag isoCode="ua" size={25} style={{ marginTop: 4 }} />
        <Text style={{ marginLeft: 16, marginTop: 0, color: isDarkMode ? Colors.white : Colors.black }}>
          Application developed with love by a fellow ukrainian developer. Go exploring!
        </Text>
      </View>
    </View>
  );
}

export default Welcome;
