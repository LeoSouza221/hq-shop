

## Configuracoes do Projeto
```
npm install
```

##### Criar .env com as chaves publicas e privadas da api com as seguintes nomenclaturas
```
VUE_APP_PUBLIC_KEY=SUA_CHAVE_PUBLICA
VUE_APP_PRIVATE_KEY=SUA_CHAVE_PRIVADA
```

### Compilar para desenvolvimento (abrir na porta estipulada)
```
npm run serve
```

### Buildar
```
npm run build
```

### Erros de Lint
```
npm run lint --fix
```

### Telas

- Principal: Contém a listagem de hqs paginadas, vinda da API da marvel assim como estipulado,
  cada item listado pode ser clicado e ao faze-lo será redirecionado para a tela de detalhes, por fim
  há também uma toolbar com um botão em seu lado direito, que indica quantos items há no carrinho,

- Detalhes: Contém detalhes a respeito do quadrinho selecionado e um botao de "Comprar", que adiciona o item
ao carrinho

- Carrinho: Contém os quadrinhos adicionados ao carrinho
