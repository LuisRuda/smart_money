import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: '10.0.0.102'})
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
