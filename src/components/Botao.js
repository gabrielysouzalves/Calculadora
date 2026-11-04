
import { TouchableOpacity, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useRef } from 'react';

export default function Botao({ label, onPress, tipo = 'numero' }) {
  const progresso = useRef(new Animated.Value(0)).current;

  const animarGlitter = () => {
    progresso.setValue(0);

    Animated.timing(progresso, {
      toValue: 1,
      duration: 450,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const aoClicar = () => {
    animarGlitter();
    onPress(label);
  };

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

  const opacidade = progresso.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0, 1, 0],
  });

  const escala = progresso.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0.4, 1.2, 1.8],
  });

  return (
    <TouchableOpacity
      style={[
        styles.base,
        ehControle ? styles.tamanhoControle : styles.tamanhoNumero,
        estiloBotao,
      ]}
      onPress={aoClicar}
      activeOpacity={0.7}
    >
      <Animated.Text
        pointerEvents="none"
        style={[
          styles.glitter,
          {
            opacity: opacidade,
            transform: [{ scale: escala }],
          },
        ]}
      >
        ✨
      </Animated.Text>

      <Text style={estiloTexto}>{label}</Text>
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
    overflow: 'visible',
  },
  tamanhoControle: { width: '17%' },
  tamanhoNumero: { width: '22%' },

  botaoNumero: { backgroundColor: '#FFFFFF' },
  botaoControle: { backgroundColor: '#F0E8F5' },
  botaoOperador: { backgroundColor: '#D8C5E8' },
  botaoLimpeza: { backgroundColor: '#F2DCE8' },
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
  glitter: {
    position: 'absolute',
    top: -19,
    right: -8,
    fontSize: 22,
    zIndex: 10,
  },
});
