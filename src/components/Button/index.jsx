import { Text, Dimensions, TouchableHighlight } from 'react-native';
import { styles } from './styles';

export default function Button({onClick, label}) {
 return (
   <TouchableHighlight onPress={onClick}>
    <Text style={styles.button}>{label}</Text>
   </TouchableHighlight>
  );
}