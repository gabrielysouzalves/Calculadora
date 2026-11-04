
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Display from '../components/Display';
import Teclado from '../components/Teclado';
import {
  calcular,
  ehOperador,
  ultimoNumero,
  alternarSinal,
  porcentagem,
} from '../utils/calcular';
import { carregar, salvar } from '../storage/historico';

export default function HomeScreen({ navigation, route }) {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');
  const [calculado, setCalculado] = useState(false);
  const [memoria, setMemoria] = useState(0);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const cancelar = navigation.addListener('focus', () => {
      carregar().then(setHistorico);
    });
    return cancelar;
  }, [navigation]);

  useEffect(() => {
    if (route.params?.valor !== undefined) {
      setExpressao(String(route.params.valor));
      setResultado('');
      setCalculado(false);
    }
  }, [route.params?.toque]);

  function limpar() {
    setExpressao('');
    setResultado('');
    setCalculado(false);
  }

  function valorAtual() {
    const v = calcular(expressao);
    return typeof v === 'number' ? v : null;
  }

  async function aoIgual() {
    if (expressao === '') return;
    const valor = String(calcular(expressao));
    setResultado(valor);
    setCalculado(true);
    if (valor === 'Erro') return;

    const item = {
      id: Date.now().toString(),
      conta: expressao,
      resultado: valor,
    };
    const novo = [item, ...historico];
    setHistorico(novo);
    await salvar(novo);
  }

  function aoTocar(tecla) {
    if (tecla === 'AC') return limpar();

    if (tecla === 'OFF') {
      limpar();
      setMemoria(0);
      return;
    }

    if (tecla === 'C') {
      setExpressao(expressao.slice(0, -1));
      setResultado('');
      setCalculado(false);
      return;
    }

    if (tecla === '=') return aoIgual();

    if (tecla === '+/-') {
      setExpressao(alternarSinal(expressao));
      return;
    }

    if (tecla === '%') {
      setExpressao(porcentagem(expressao));
      return;
    }

    if (tecla === 'Raiz') {
      if (expressao === '') return;
      const v = valorAtual();
      if (v === null || v < 0) {
        setResultado('Erro');
        setCalculado(true);
        return;
      }
      setExpressao(String(parseFloat(Math.sqrt(v).toFixed(10))));
      setResultado('');
      setCalculado(false);
      return;
    }

    if (tecla === 'M+' || tecla === 'M-') {
      const v = valorAtual();
      if (v === null) return;
      const novo = tecla === 'M+' ? memoria + v : memoria - v;
      setMemoria(parseFloat(novo.toFixed(10)));
      return;
    }

    if (tecla === 'MRC') {
      const base = calculado ? '' : expressao;
      setExpressao(base.slice(0, ultimoNumero(base).inicio) + String(memoria));
      setResultado('');
      setCalculado(false);
      return;
    }

    if (ehOperador(tecla)) {
      let base = calculado ? (resultado === 'Erro' ? '' : resultado) : expressao;
      if (base === '' && tecla !== '-') return;
      if (base.length > 1 && ehOperador(base.slice(-1))) {
        base = base.slice(0, -1);
      }
      setExpressao(base + tecla);
      setResultado('');
      setCalculado(false);
      return;
    }

    const base = calculado ? '' : expressao;
    const atual = ultimoNumero(base).texto;
    if (tecla === '.' && atual.includes('.')) return;
    const novo = tecla === '.' && (atual === '' || atual === '-') ? '0.' : tecla;
    setExpressao(base + novo);
    setResultado('');
    setCalculado(false);
  }

  return (
    <View style={styles.container}>
      <Display
        expressao={expressao}
        resultado={resultado}
        memoria={memoria}
      />

      <Teclado onPress={aoTocar} />

      <Pressable
        style={styles.botaoHistorico}
        onPress={() => navigation.navigate('Historico', { historico })}
      >
        <Text style={styles.textoHistorico}>Ver histórico</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3F8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
  },

  botaoHistorico: {
    marginTop: 20,
    backgroundColor: '#E9DDF2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D8C5E8',
  },

  textoHistorico: {
    color: '#65536F',
    fontSize: 18,
    fontWeight: '600',
  },
});
