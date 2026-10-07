import { FlatList, Text, StyleSheet } from 'react-native';

export default function HistoricoScreen({ route }) {
  const { historico } = route.params;

  return (
    <FlatList
      style={styles.lista}
      data={historico}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={styles.linha}>
          {item.conta} = {item.resultado}
        </Text>
      )}
      ListEmptyComponent={<Text style={styles.linha}>Nenhuma conta ainda</Text>}
    />
  );
}

const styles = StyleSheet.create({
  lista: { flex: 1, backgroundColor: '#4a0303' },
  linha: { fontSize: 24, padding: 12, color: 'white' },
});
