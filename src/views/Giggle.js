import type {Node} from "react";
import React, {useState} from "react";
import {Text, useColorScheme, View} from "react-native";
import NativeText from "../components/NativeText";

const Giggle = ({}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const [error, setError] = useState(null);
  const [ip, setIP] = useState(null);
  const [vpn, setVpn] = useState(false);
  const [targets, setTargets] = useState(0);
  const [rpm, setRpm] = useState(0);

  return (
    <View style={{ height: '100%', minHeight: 600 }}>
      <NativeText>
        VPN status: {vpn ? 'on' : 'off'}
      </NativeText>
      <NativeText>
        IP address: {ip ?? 'not available'}
      </NativeText>
      <NativeText>
        Targets: {targets}
      </NativeText>
      <NativeText>
        RPM: {rpm}
      </NativeText>
      <NativeText>
        RVariations: 162
      </NativeText>
      <NativeText>
        Status: running
      </NativeText>


      <NativeText>
        Error:
        &nbsp;
        <Text style={{ color: 'red' }}>
          {error ?? 'none'}
        </Text>
      </NativeText>
    </View>
  );
}

export default Giggle;
