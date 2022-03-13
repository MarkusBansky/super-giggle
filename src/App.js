import React, {useState} from "react";
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from "./views/Welcome";
import Giggle from "./views/Giggle";
import VpnSetup from "./views/VpnSetup";

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const PhaseView: (phase: number, setPhase: (n: number) => void) => Node = (phase, setPhase) => {
  switch (phase) {
    case 1:
    default:
      return (
        <Section title="Getting started">
          <Welcome onContinue={() => {
            setPhase(2);
          }} />
        </Section>
      );

    case 2:
      return (
        <Section title="Setup VPN">
          <VpnSetup onContinue={() => {
            setPhase(3);
          }} />
        </Section>
      );

    case 3:
      return (
        <Section title="Super Giggle!">
          <Giggle />
        </Section>
      );

  }
}

const App: () => Node = () => {
  const [phase, setPhase] = useState(1);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header/>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {PhaseView(phase, setPhase)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 64,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
