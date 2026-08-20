import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


let NumeroPressionado = 0;

export default function App() {



function NumPress(num) {
  NumeroPressionado = num;
  alert("Numero Pressionado:" + num)
}

  return (
    <View style={styles.container}>
     
      <StatusBar style="auto"  />

      <Text style={styles.titulo}>Calculadora do Fukuta</Text>
     
      <Text style={styles.painel}>
        {NumeroPressionado}
      </Text>

{/* botoes de controle da calculadora */}

      <View style={[styles.colunas]}>
        <TouchableOpacity style={styles.botao}>
          <Text>MRC</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botao}>
          <Text>M-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>M+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>Raiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>OFF</Text>
        </TouchableOpacity>
      </View>

{/* segunda linha de controle da calculadora */}

      <View style={[styles.colunas]}>

        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>AC</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>%</Text>
        </TouchableOpacity>
       
      </View>

      {/* segunda linha de controle da calculadora */}

      <View style={[styles.colunas]}>
        
        <TouchableOpacity style={styles.botaoNumeros} onPress={() => NumPress(7)}>
          <Text style={styles.textNumeros}>7</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>/</Text>
        </TouchableOpacity>
       
      </View>

      <View style={[styles.colunas]}>
        
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>4</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>X</Text>
        </TouchableOpacity>
       
      </View>

      <View style={[styles.colunas]}>
        
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>1</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={styles.textNumeros}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>-</Text>
        </TouchableOpacity>
       
      </View>


<View style={[styles.colunas]}>
        
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>0</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.botaoNumeros}>
          <Text  style={[styles.textNumeros, {textAlign:'center'}]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text  style={[styles.textNumeros, {textAlign:'center'}]}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text  style={[styles.textNumeros, {textAlign:'center'}]}>+</Text>
        </TouchableOpacity>
       
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a0303',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:40,
    padding:0
  },
  colunas:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flexDirection:'row',
    gap:'10'
  },
  titulo:{
     textAlign:'center',
     backgroundColor:'gray',
     color:'white',
     fontSize:24,
     fontWeight:'bold',
     height:35,
     marginBottom:0,
     width:'100%',
  },
  painel: {
     width:'100%',
     textAlign: 'right',
     fontSize: 36,
     fontWeight: 'bold',
     backgroundColor: 'lightgray',
     borderWidth:2,
     borderColor:'black',
     padding:10,
     marginBotom:20
  },
  botao:{
    backgroundColor:'#f0f0f0',
    color: 'black',
    borderRadius: 10,
    borderWidth:3,
    borderColor:'gray',
    height:60,
    padding:10,
    marginTop:20,
    width:'17%'
  },
   botaoNumeros:{
    backgroundColor:'#f0f0f0',
    color: 'black',
    borderRadius: 10,
    borderWidth:3,
    borderColor:'gray',
    height:60,
    padding:10,
    marginTop:20,
    width:'22%',
  
  },
  textNumeros : {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
