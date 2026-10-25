# ExpoCalc

Calculadora em React Native (Expo SDK 54) usada na aula de Desenvolvimento de dispositivos móveis (Fatec ADS).
Esta versão é o resultado final da aula: componentes, histórico com FlatList, persistência com AsyncStorage e navegação entre duas telas.

## Evoluções implementadas

- **Evolução 1:** botão "Limpar histórico" (apaga da tela e do AsyncStorage); a Home recarrega o histórico ao ganhar foco.
- **Evolução 2:** botão "Excluir" em cada linha, removendo só aquela conta (com `filter`) e salvando.
- **Evolução 3:** tocar numa conta volta para a Home (`popTo`) com o resultado no display.

Enunciado em [ENUNCIADO.md](ENUNCIADO.md) e respostas em [RESPOSTAS.md](RESPOSTAS.md).

## Como rodar

```bash
npm install
npx expo start
```

Abra no Expo Go (SDK 54) ou aperte `a` para o emulador Android.

## Estrutura

```text
App.js                      navegação (Home e Historico)
src/
  components/
    Botao.js                botão reutilizável (props: label, onPress, tipo)
    Display.js              painel com expressão, resultado e indicador de memória
    Teclado.js              teclas geradas a partir de um array com .map()
  screens/
    HomeScreen.js           calculadora, estado e histórico
    HistoricoScreen.js      lista de contas com FlatList
  storage/
    historico.js            salvar e carregar com AsyncStorage
  utils/
    calcular.js             cálculo da expressão (sem eval)
```

## Pacotes da aula

Instalados com as versões do SDK 54:
`@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens`,
`react-native-safe-area-context` e `@react-native-async-storage/async-storage`.
