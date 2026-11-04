
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ label, onPress, tipo = 'numero' }) {
  const ehControle = tipo === 'controle';
  const ehOperador = ['/', 'X', '-', '+'].includes(label);
  const ehIgual = label === '=';
  const ehLimpeza = ['AC', 'C', 'OFF'].includes(label);

  let estiloBotao = styles.botaoNumero;
  let estiloTexto = styles.textoNumero;

  if (ehControle) {
    estiloBotao = styles.botaoControle;
    estiloTexto = styles.textoControle;
  } else if (ehIgual) {
    estiloBotao = styles.botaoIgual;
    estiloTexto = styles.textoEspecial;
  } else if (ehLimpeza) {
    estiloBotao = styles.botaoLimpeza;
    estiloTexto = styles.textoEspecial;
  } else if (ehOperador) {
    estiloBotao = styles.botaoOperador;
    estiloTexto = styles.textoEspecial;
  }

  return (
    <TouchableOpacity
      style={[
        styles.base,
        ehControle ? styles.tamanhoControle : styles.tamanhoNumero,
        estiloBotao,
      ]}
      onPress={() => onPress(label)}
      activeOpacity={0.7}
    >
      <Text style={estiloTexto}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 60,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D8C5E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    elevation: 2,
  },

  tamanhoControle: {
    width: '17%',
  },

  tamanhoNumero: {
    width: '22%',
  },

  botaoNumero: {
    backgroundColor: '#FFFFFF',
  },

  botaoControle: {
    backgroundColor: '#F0E8F5',
  },

  botaoOperador: {
    backgroundColor: '#D8C5E8',
  },

  botaoLimpeza: {
    backgroundColor: '#F2DCE8',
  },

  botaoIgual: {
    backgroundColor: '#D9B9E8',
    borderColor: '#C6A4D9',
  },

  textoNumero: {
    color: '#51445A',
    fontSize: 25,
    fontWeight: '600',
  },

  textoControle: {
    color: '#776580',
    fontSize: 15,
    fontWeight: '600',
  },

  textoEspecial: {
    color: '#65536F',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
