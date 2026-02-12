import { Image, useColorScheme } from 'react-native'

// images
import DarkLogo from '../assets/img/csub_dark.jpg'
import LightLogo from '../assets/img/csub_light.jpg'

const ThemedLogo = (...props) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo