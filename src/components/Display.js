
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Display({ expressao, resultado, memoria }) {
  return (
    <View style={styles.painel}>
      <View style={styles.cabecalho}>
        <Text style={styles.rotulo}>CALCULADORA</Text>
        <Text style={styles.memoria}>
          {memoria !== 0 ? 'M' : ''}
        </Text>
      </View>

      <Text
        style={styles.expressao}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {expressao || '0'}
      </Text>

      <View style={styles.linhaResultado}>
        {resultado !== '' && resultado != null && (
          <>
            <Text style={styles.resultado}>
              = {resultado}
            </Text>

            <Image
              source={require('../../assets/hello-kitty.png')}
              style={styles.helloKitty}
              resizeMode="contain"
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  painel: {
    width: '92%',
    minHeight: 175,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3D5EB',
    borderRadius: 22,
    padding: 18,
    marginTop: 15,
    marginBottom: 22,
    elevation: 3,
  },

  cabecalho: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rotulo: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#B09BBE',
  },

  memoria: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A47BB9',
  },

  expressao: {
    width: '100%',
    textAlign: 'right',
    fontSize: 38,
    fontWeight: '600',
    color: '#51445A',
  },

  linhaResultado: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: 65,
  },

  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B17DAF',
  },

  helloKitty: {
    width: 65,
    height: 65,
    marginLeft: 10,
  },
});
