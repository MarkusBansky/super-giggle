import {Pressable, StyleSheet, Text, TextInput, useColorScheme, View} from "react-native";
import NativeText from "../components/NativeText";
import React, {useState} from "react";

const Giggle = ({onContinue}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  const [url, setUrl] = useState();
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const [connecting, setConnecting] = useState(false);

  return (
    <View style={{ height: '100%', minHeight: 600 }}>
      <NativeText>
        VPN status:
      </NativeText>

      <View
        style={{ marginTop: 16, marginBottom: 16}}
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <NativeText>VPN URL:</NativeText>
        <TextInput
          style={[styles.input, {
            color: isDarkMode ? '#D1D1D1' : '#2C3333',
            borderColor: isDarkMode ? '#2C3333' : '#F0F0F0'
          }]}
          onChangeText={setUrl}
          value={url}
          placeholder="https://"
          textContentType="URL"
          keyboardType="default"
          editable={!connecting}
        />
      </View>

      <View
        style={{ marginTop: 16, marginBottom: 16}}
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <NativeText>VPN Username:</NativeText>
        <TextInput
          style={[styles.input, {
            color: isDarkMode ? '#D1D1D1' : '#2C3333',
            borderColor: isDarkMode ? '#2C3333' : '#F0F0F0'
          }]}
          onChangeText={setUser}
          value={user}
          placeholder="openvpn"
          textContentType="username"
          keyboardType="default"
          editable={!connecting}
        />
      </View>

      <View
        style={{ marginTop: 16, marginBottom: 16}}
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
        }}>
        <NativeText>VPN Password:</NativeText>
        <TextInput
          style={[styles.input, {
            color: isDarkMode ? '#D1D1D1' : '#2C3333',
            borderColor: isDarkMode ? '#2C3333' : '#F0F0F0'
          }]}
          onChangeText={setPass}
          value={pass}
          placeholder="****"
          textContentType="password"
          keyboardType="default"
          editable={!connecting}
        />
      </View>

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
