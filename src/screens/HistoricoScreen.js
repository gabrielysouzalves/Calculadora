
import { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { limpar, salvar } from '../storage/historico';

export default function HistoricoScreen({ route, navigation }) {
  const [lista, setLista] = useState(route.params.historico);

  async function aoLimpar() {
    await limpar();
    setLista([]);
  }

  async function excluir(id) {
    const nova = lista.filter((item) => item.id !== id);
    setLista(nova);
    await salvar(nova);
  }

  function reutilizar(item) {
    navigation.popTo('Home', {
      valor: item.resultado,
      toque: Date.now(),
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Meu histórico</Text>
        <Text style={styles.subtitulo}>
          Suas últimas operações
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botaoLimpar}
        onPress={aoLimpar}
        activeOpacity={0.7}
      >
        <Text style={styles.textoLimpar}>Limpar histórico</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.lista}
        contentContainerStyle={styles.conteudoLista}
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.conta}
              onPress={() => reutilizar(item)}
              activeOpacity={0.7}
            >
              <Text style={styles.expressao}>
                {item.conta}
              </Text>

              <Text style={styles.resultado}>
                = {item.resultado}
              </Text>

              <Text style={styles.dica}>
                Toque para reutilizar o resultado
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => excluir(item.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.textoExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.vazio}>
            <Text style={styles.iconeVazio}>♡</Text>
            <Text style={styles.textoVazio}>
              Nenhuma conta ainda
            </Text>
            <Text style={styles.subtituloVazio}>
              Suas operações aparecerão aqui.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3F8',
  },

  cabecalho: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#65536F',
  },

  subtitulo: {
    fontSize: 14,
    color: '#A18FA9',
    marginTop: 5,
  },

  botaoLimpar: {
    backgroundColor: '#EFCBD9',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  textoLimpar: {
    color: '#80566D',
    fontSize: 16,
    fontWeight: 'bold',
  },

  lista: {
    flex: 1,
  },

  conteudoLista: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    flexGrow: 1,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E9DDF2',
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },

  conta: {
    flex: 1,
    padding: 5,
  },

  expressao: {
    fontSize: 17,
    color: '#8C7A96',
  },

  resultado: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#65536F',
    marginTop: 3,
  },

  dica: {
    fontSize: 11,
    color: '#B09BBE',
    marginTop: 5,
  },

  botaoExcluir: {
    backgroundColor: '#F8E7EE',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginLeft: 5,
  },

  textoExcluir: {
    color: '#A65F7C',
    fontWeight: '600',
    fontSize: 13,
  },

  vazio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  iconeVazio: {
    fontSize: 48,
    color: '#D8C5E8',
  },

  textoVazio: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#65536F',
    marginTop: 10,
  },

  subtituloVazio: {
    fontSize: 14,
    color: '#A18FA9',
    marginTop: 5,
  },
});
