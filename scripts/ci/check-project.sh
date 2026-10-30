
#!/usr/bin/env bash

# Verifica se a estrutura principal do ExpoCalc está completa.
set -euo pipefail

echo "Iniciando validação do ExpoCalc..."

# Arquivos obrigatórios do projeto.
arquivos=(
  "package.json"
  "package-lock.json"
  "App.js"
  "index.js"
  "src/components/Botao.js"
  "src/components/Display.js"
  "src/components/Teclado.js"
  "src/screens/HomeScreen.js"
  "src/screens/HistoricoScreen.js"
  "src/storage/historico.js"
  "src/utils/calcular.js"
)

for arquivo in "${arquivos[@]}"; do
  if [ ! -f "$arquivo" ]; then
    echo "::error file=$arquivo::Arquivo obrigatório não encontrado."
    exit 1
  fi
done

# Verifica se o package.json é um JSON válido.
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))"

echo "Estrutura do ExpoCalc validada com sucesso!"
