# Respostas da entrega

**Dupla:** `[nome 1]` e `[nome 2]`
**Evoluções concluídas:** 1 (obrigatória), 2 e 3 (bônus)

## Evolução 1: Limpar histórico

**Por que a Home precisa recarregar o histórico, e não só a tela de histórico?**

A Home guarda sua própria cópia da lista no estado (`historico`). A tela de histórico limpa o AsyncStorage e a sua lista local, mas a Home não fica sabendo disso: continua com a lista antiga na memória. Se o usuário volta, faz uma conta nova e a Home salva `[nova, ...historico]`, as contas apagadas voltam. Por isso a Home recarrega do AsyncStorage (a fonte da verdade) toda vez que a tela ganha foco, com `navigation.addListener('focus', ...)`.

Linhas novas: `limpar()` em `historico.js` (`removeItem`), o `useState(route.params.historico)` na `HistoricoScreen`, `aoLimpar` com `await limpar()` e `setLista([])`, e o listener de `focus` na Home.

## Evolução 2: Excluir uma conta específica

**Por que usamos `filter`, que cria uma lista nova, em vez de remover o item da lista que já está no estado?**

O React só percebe que o estado mudou quando recebe uma referência nova. Se removêssemos o item da própria lista do estado (por exemplo com `splice`), o array continuaria sendo o mesmo objeto e o `setLista` não garantiria uma nova renderização. O `filter` devolve um array novo, sem alterar o original (imutabilidade), então a tela atualiza e o mesmo array novo é salvo com `salvar(nova)`.

## Evolução 3: Reutilizar uma conta do histórico

**Desafio extra: tocar na mesma conta duas vezes muda o display?**

Se o `useEffect` observasse só `route.params?.valor`, o segundo toque enviaria o mesmo valor (`"5"`), a dependência não mudaria e o efeito não rodaria. A solução foi enviar também `toque: Date.now()` no `popTo` e observar `route.params?.toque`, que é diferente a cada toque.
