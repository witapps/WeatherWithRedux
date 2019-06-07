import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center'
  },
  flex: {
    flex: 1
  },
  button: {
    fontSize: wp(8),
    color: 'blue'
  },
  text: {
    fontSize: wp(4),
    color: 'black'
  }
});

export default styles;
