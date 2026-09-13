# Carrinho de Compras inspirado na Shopee

Projeto Node.js que simula as operações essenciais de um carrinho de compras: criação de itens, adição, remoção, exibição e cálculo do total.

## Funcionalidades

- Criar itens com nome, preço e quantidade.
- Adicionar produtos ao carrinho.
- Remover uma unidade de um item.
- Excluir um item do carrinho.
- Exibir os produtos adicionados.
- Calcular o valor total.

## Estrutura

```text
src/
├── index.js          # Demonstração das operações do carrinho
└── services/
    ├── cart.js       # Regras de manipulação do carrinho
    └── item.js       # Criação de itens
```

## Como executar

Pré-requisito: Node.js 18 ou superior.

```bash
node src/index.js
```

## Exemplo de uso

O arquivo de entrada cria produtos de exemplo, adiciona-os ao carrinho, remove uma unidade de um deles, exibe o estado final e calcula o total.

```js
const item = await createItem("Hotwheels Ferrari", 20.99, 1);
await cartService.addItem(myCart, item);
await cartService.calculateTotal(myCart);
```

## Próximos passos

- Adicionar um script `start` ao `package.json`.
- Criar testes automatizados para os serviços.
- Substituir os itens de demonstração por entrada interativa ou uma interface web.
