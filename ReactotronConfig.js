import Reactotron, { overlay } from 'reactotron-react-native'
Reactotron
  .configure({ host: '192.168.0.106' }) // controls connection & communication settings { host: '192.168.xxx.xxx' }
  .use(overlay())
  .useReactNative() // add all built-in react native plugins
  .connect()