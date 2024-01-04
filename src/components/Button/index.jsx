import { Text, Dimensions, TouchableHighlight } from 'react-native';
import { styles } from './styles';

export default function Button({onClick, label, double, triple, operation}) {

  const stylesButton = [styles.button];

  if(double) stylesButton.push(styles.buttonDouble)
  if(triple) stylesButton.push(styles.buttonTriple)
  if(operation) stylesButton.push(styles.oparationButton)

 return (
   <TouchableHighlight onPress={() => onClick(label)}>
    <Text style={stylesButton}>{label}</Text>
   </TouchableHighlight>
  );
}