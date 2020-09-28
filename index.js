import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const width = Dimensions.get('window').width;

const SliderText = (props) => {
  const multiplier = props.multiplier || 1.12;
  const maximumValue = props.maximumValue || 10;
  const stepValue = props.stepValue || 1;
  const logic = maximumValue * multiplier;
  const [sliderValue,setSliderValue] = useState(props.sliderValue || 0);
  const left =
   sliderValue >= 10000
      ? (sliderValue * width) / logic - 35
      : sliderValue >= 1000
      ? (sliderValue * width) / logic - 20
      : sliderValue >= 100
      ? (sliderValue * width) / logic - 10
      : (sliderValue * width) / logic;

  const sendSliderValue = (slider) => {
    setSliderValue(slider);
    props.onValueChange(slider);
  }

  return (
    <View style={styles.slider}>
      <View
        style={{
          left: left,
        }}>
        <Text style={[styles.text, props.customCountStyle]}>
          {numeral(Math.floor(sliderValue)).format('Oa')}
        </Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={props.minimumValue}
        maximumValue={maximumValue}
        step={stepValue}
        minimumTrackTintColor={props.minimumTrackTintColor || '#000'}
        thumbTintColor={props.thumbTintColor || '#000'}
        maximumTrackTintColor={props.maximumTrackTintColor || '#e3e3e3'}
        onValueChange={e => sendSliderValue(e)}
        onSlidingComplete={props.onSlidingComplete}
        value = {value}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  slider: {
    width: width - 20,
    marginVertical: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customLabel: {
    fontSize: 20,
  },
});

export default SliderText;