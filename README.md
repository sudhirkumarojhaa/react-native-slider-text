# React Native Slider Text

Read more about this package [here](https://medium.com/@sudhirKr/react-native-slider-text-7f5054f733dd).

[![downloads](https://img.shields.io/npm/dt/react-native-slider-text.svg)](http://npm-stats.com/~packages/react-native-slider-text)
[![npm-version](https://img.shields.io/npm/v/react-native-slider-text.svg)](https://www.npmjs.com/package/react-native-slider-text)
[![license](https://img.shields.io/github/license/vikrantnegi/react-native-slider-text.svg?maxAge=1800)](https://yarnpkg.com/en/package/react-native-slider-text)

A React Native Slider Component which is built around [react-native-slider](https://github.com/react-native-community/react-native-slider) providing the user ability to add moving slider value alongside the slider thumb. You can also add custom labels displaying the start text and end text below the slider.

<img src="./assets/custom.png" width="200"> &nbsp;&nbsp;
<img src="./assets/use.png" width="200"> &nbsp;&nbsp;

# Prerequisites

Kindly install @react-native-community/slider before you start using this component.

```
yarn add @react-native-community/slider
```

### Using React Native CLI

## Install

```
yarn add react-native-slider-text
```

or

```
npm install react-native-slider-text --save
```

## Usage

```jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SliderText from 'react-native-slider-text';

const Score = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little interest or pleasure in doing things?</Text>
      <Text style={styles.tag}>Rate your answer here: </Text>
      <SliderText maximumValue={10} stepValue={1} minimumValueLabel="Never" maximumValueLabel="Always" onValueChange={(id) => setSliderValue(id)} sliderValue={sliderValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 14,
    paddingVertical: 10,
  },
});

export default Score;
```

## Props

| Prop                        | Description                                                                                                                                            | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| **`maximumValue`**          | Add the maximum value of the slider here. (Number)                                                                                                     | `10`    |
| **`minimumValue`**          | Add the minimum value of the slider here. (Number)                                                                                                     | `0`     |
| **`stepValue`**             | Step value of the slider (Number)                                                                                                                      | `1`     |
| **`value`**                 | value of the slider (Number)                                                                                                                           | `1`     |
| **`sliderValue`**           | dynamic value of the slider (Number)                                                                                                                   | `1`     |
| **`multiplier`**            | This is the universal logic to adjust the text location over the thumb. User may need to manipulate it depending on the maximum value. (Decimal value) | 1.12    |
| **`minimumTrackTintColor`** | Custom color for minimum slider progress. (color)                                                                                                      | `#000`  |
| **`thumbTintColor`**        | Custom color for thumb. (color)                                                                                                                        | `#000`  |
| **`maximumTrackTintColor`** | Custom color for maximum slider progress. (color)                                                                                                      | `#000`  |
| **`customCountStyle`**      | Customize moving text slider value. You can add any styles related to Text Component in React Native. (style)                                          | `-`     |
| **`customLabelStyle`**      | Customize label style below the slider. You can add any styles related to Text Component in React Native. (style)                                      | `-`     |
| **`onValueChange`**         | function to manage the slider value on change of the slider thumb position. (function)                                                                 | `-`     |

## License

Licensed under the [MIT](https://github.com/vikrantnegi/react-native-slider-text/blob/master/LICENSE).

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/vikrantnegi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/E1E6Z0JL)
