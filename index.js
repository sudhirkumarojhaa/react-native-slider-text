/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const width = Dimensions.get('window').width;

const SliderText = (props) => {
  const [sliderValue, setSliderValue] = useState('0');
  const multiplier = props.multiplier || 1.12;
  const maximumValue = props.maximumValue || 10;
  const stepValue = props.stepValue || 1;
  const logic = maximumValue * multiplier;
  const left =
    sliderValue >= 10000
      ? (sliderValue * width) / logic - 35
      : sliderValue >= 1000
      ? (sliderValue * width) / logic - 20
      : sliderValue >= 100
      ? (sliderValue * width) / logic - 10
      : (sliderValue * width) / logic;

  return (
    <View style={styles.slider}>
      <View
        style={{
          left: left,
        }}>
        <Text style={[styles.text, props.customCountStyle]}>
          {Math.floor(sliderValue)}
        </Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={maximumValue}
        step={stepValue}
        minimumTrackTintColor={props.minimumTrackTintColor || '#000'}
        thumbTintColor={props.thumbTintColor || '#000'}
        maximumTrackTintColor={props.maximumTrackTintColor || '#000'}
        onValueChange={(sliderValues) =>
          setSliderValue(sliderValues.toFixed(0))
        }
      />
      <View style={styles.row}>
        <Text style={[styles.customLabel, props.customCountStyle]}>
          {props.minimumValueLabel || 'Start'}
        </Text>
        <Text style={[styles.customLabel, props.customCountStyle]}>
          {props.maximumValueLabel || 'End'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#999',
  },
  slider: {
    width: width - 20,
    marginVertical: 15,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SliderText;
