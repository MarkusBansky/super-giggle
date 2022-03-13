import type {Node} from "react";
import React, {useEffect, useState} from "react";
import {Pressable, StyleSheet, Text, TextInput, useColorScheme, View} from "react-native";
import NativeText from "../components/NativeText";

const Giggle = ({}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  const [error, setError] = useState(null);
  const [ip, setIP] = useState(null);
  const [vpn, setVpn] = useState(false);
  const [targetsText, setTargetsText] = useState("");
  const [rpm, setRpm] = useState(0);
  const [isRunning, setRunning] = useState(false);

  return (
    <View style={{ height: '100%', minHeight: 600 }}>
      <NativeText>
        VPN status: {vpn ? 'on' : 'off'}
      </NativeText>
      <NativeText>
        IP address: {ip ?? 'not available'}
      </NativeText>
      <NativeText>
        Targets: {targetsText.split("\n").length}
      </NativeText>
      <NativeText>
        RPM: {rpm}
      </NativeText>
      <NativeText>
        RVariations: 162
      </NativeText>
      <NativeText>
        Status: {isRunning ? 'running' : 'stopped'}
      </NativeText>


      <View
        style={{ marginTop: 16, marginBottom: 16}}
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <NativeText>Targets list, each in new line:</NativeText>
        <TextInput
          style={[styles.input, {
            color: isDarkMode ? '#D1D1D1' : '#2C3333',
            borderColor: isDarkMode ? '#2C3333' : '#F0F0F0'
          }]}
          onChangeText={text => setTargetsText(text)}
          value={targetsText}
          placeholder="Enter your exploration targets here..."
          keyboardType="default"
          numberOfLines={8}
          multiline
          autoFocus
          editable={!isRunning}
        />
      </View>

      <NativeText>
        Error:
        &nbsp;
        <Text style={{ color: '#DA0037' }}>
          {error ?? 'none'}
        </Text>
      </NativeText>

      <View style={{ marginTop: 16 }}>
        <Pressable
          onPress={() => setRunning(!isRunning)}
          style={({ pressed }) => [
            {
              backgroundColor: isDarkMode
                ? isRunning ? '#191A19' : '#DA0037'
                : isRunning ? '#DDDDDD' : '#F0F0F0',
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
              {isRunning ? 'Stop' : 'Go!'}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
});

export default Giggle;
