import React from 'react';
import TopNav from './components/TopNav';
import Home from './components/Home1';
import RoundImage from './components/RoundImage';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionView}>
        <TopNav />
        <Home />
        
        <View style={styles.personalView}>
          <RoundImage />
          <Text style={styles.persViewTitleText}>Nyarko Ebenezer</Text>
          <Text style={styles.persViewSubText}>BSc. Computer Science, University of Ghana</Text>
          <Text style={styles.persViewMiniText}>Legon, Accra - GH</Text>

          <View style={styles.statsView}>
            <View style={styles.statsChild}>
              <Text>Photos</Text>
              <Text>999</Text>
            </View>

            <View style={styles.statsChild}>
              <Text>Folowers</Text>
              <Text>999</Text>
            </View>

            <View style={styles.statsChild}>
              <Text>Following</Text>
              <Text>999</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: 'yellow',
  },

  sectionView: {
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    width: '100%',
    borderRadius: 20
  },
  personalView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },

  persViewTitleText: {
    fontSize: 20,
    paddingTop: 15
  },

  persViewSubText: {
    fontSize: 14,
    paddingTop: 6
  },

  persViewMiniText: {
    fontSize: 10,
    paddingTop: 6
  },

  statsView: {
    marginTop:30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    padding: 8
  },

  statsChild: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
