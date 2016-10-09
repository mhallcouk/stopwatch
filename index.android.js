import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
} from "react-native";

var StopWatch = React.createClass({
  render: function(){
    return <View>
              <Text>
                00:00.00
              </Text>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
  },
  startStopButton: function() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton: function() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }
});

AppRegistry.registerComponent("stopwatch", () => StopWatch);
