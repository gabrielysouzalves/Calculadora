
# Pipeline CI - ExpoCalc

## Objetivo

Automatizar a validação do projeto ExpoCalc utilizando GitHub Actions.

## Golden Pipeline

O arquivo `golden-pipeline.yml` define um fluxo reutilizável responsável por:

- Baixar o código do repositório.
- Configurar o Node.js.
- Instalar as dependências.
- Verificar a estrutura do projeto.
- Validar a exportação do Expo.

## Integração Contínua

O arquivo `ci.yml` aciona o Golden Pipeline automaticamente em:

- Push para main e develop.
- Pull Requests direcionados para main e develop.

## Resultado esperado

Garantir que as alterações enviadas ao repositório passem pelas verificações automatizadas.
