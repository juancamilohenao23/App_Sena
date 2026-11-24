import React, { useState } from 'react';
import {
View,
Text,
StyleSheet,
SafeAreaView,
TouchableOpacity
} from 'react-native';

export default function App() {
const [cantidad, setCantidad] = useState(1);

return (
<SafeAreaView style={styles.container}>

<Text style={styles.title}>APP SENA</Text>

<View style={styles.card}>

<Text style={styles.producto}>Producto</Text>

<Text style={styles.precio}>$10.000</Text>

<View style={styles.controles}>

<TouchableOpacity
style={styles.boton}
onPress={() => setCantidad(cantidad + 1)}
>
<Text style={styles.botonTexto}>+</Text>
</TouchableOpacity>

<Text style={styles.cantidad}>{cantidad}</Text>

<TouchableOpacity
style={styles.boton}
onPress={() => setCantidad(
Math.max(0, cantidad - 1)
)}
>
<Text style={styles.botonTexto}>−</Text>
</TouchableOpacity>

</View>

</View>

</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},

title: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 15,
},

card: {
width: 190,
height: 125,
borderWidth: 2,
borderColor: '#333',
borderRadius: 18,
alignItems: 'center',
justifyContent: 'center',
},

producto: {
fontSize: 18,
fontWeight: 'bold',
},

precio: {
fontSize: 18,
marginBottom: 8,
},

controles: {
flexDirection: 'row',
alignItems: 'center',
gap: 15,
},

boton: {
width: 28,
height: 28,
borderWidth: 1,
borderColor: '#333',
alignItems: 'center',
justifyContent: 'center',
},

botonTexto: {
fontSize: 22,
fontWeight: 'bold',
},

cantidad: {
fontSize: 20,
fontWeight: 'bold',
},
});