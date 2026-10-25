import { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { limpar, salvar } from '../storage/historico';

export default function HistoricoScreen({ route, navigation }) {
  // Evolução 1: a lista vira estado, para a tela poder mudar
  const [lista, setLista] = useState(route.params.historico);

  // Evolução 1: apaga do celular e da tela
  async function aoLimpar() {
    await limpar();
    setLista([]);
  }

  // Evolução 2: remove só a conta com o id recebido
  async function excluir(id) {
    const nova = lista.filter((item) => item.id !== id); // cria uma lista nova
    setLista(nova);
    await salvar(nova);
  }

  // Evolução 3: volta para a Home levando o resultado da conta tocada.
  // O "toque" (Date.now) muda a cada toque, para a Home perceber
  // mesmo quando o valor é igual ao anterior (desafio extra).
  function reutilizar(item) {
    navigation.popTo('Home', { valor: item.resultado, toque: Date.now() });
  }

  return (
    <View style={styles.container}>
      <View style={styles.botaoLimpar}>
        <Button title="Limpar histórico" onPress={aoLimpar} />
      </View>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.conta}
              onPress={() => reutilizar(item)}
            >
              <Text style={styles.linha}>
                {item.conta} = {item.resultado}
              </Text>
            </TouchableOpacity>
            <Button title="Excluir" color="#c0392b" onPress={() => excluir(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.linha}>Nenhuma conta ainda</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4a0303' },
  lista: { flex: 1 },
  botaoLimpar: {
    margin: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  conta: { flex: 1 },
  linha: { fontSize: 24, padding: 12, color: 'white' },
});
