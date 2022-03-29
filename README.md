<p align="center">
  <img src=img/deliveryAppMask.png >
</p>

<h2 align="center">
  Trybe Delivery - App de Delivery de Cervejas
</h2>

<p align="center">
  Este foi um desafio onde praticamos a organização de um projeto em grupo utilizando a metodologia agil (Trello), sedimentando tudo que ja aprendemos em Fron-end (HTML/CSS/JavaScript/React) e em Back-end (NodeJS/MySQL/ORM/SOLID)</a>
</p>

<!-- <p align="center">
    <img alt="Numpy" src="https://img.shields.io/badge/numpy-1.20.0-blue">
    <img alt="Pandas" src="https://img.shields.io/badge/Pandas-1.2.3-yellow">
    

   </a>
</p> -->

## 📄 Fluxos do Projeto e Estrutura do Repositório:

Para facilitar o entendimento, podemos dividir a aplicação em ** 4 fluxos principais**, **uma validação de status entre cliente e pessoa vendedora** e **cobertura de testes (`front-end` e `back-end`)**:

- **Fluxo Comum** que compreende: 
  - (1) Tela de Login; 
  - (2) Tela de Registro.

- **Fluxo do Cliente** que compreende: : 
  - (3) Tela de Produtos; 
  - (4) Tela de Checkout; 
  - (5) Tela de Pedidos; 
  - (6) Tela de Detalhes do Pedido.

- **Fluxo da Pessoa Vendedora** que compreende: 
  - (7) Tela de Pedidos; 
  - (8) Tela de Detalhes/Controle do Pedido.

- **Validação do Status do Pedido** que compreende: 
  - (9) Teste de status sem atualização em tempo real; 
  - (10) Teste de status com atualização em tempo real.

- **Fluxo da Pessoa Administradora** que compreende: 
  - (11) Tela de gerenciamento de usuários.

- **Testes da aplicação** que compreende: 
  - (12) Testes de cobertura.

## ➕ Contexto

A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação, sobretudo via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio, pois gera muita manutenção, dona Tereza procurou a **nossa equipe de pessoas desenvolvedoras** com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. O aplicativo precisa:

- Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
- Funcionar em tempo real: as telas de pedidos/detalhes do pedido devem ser atualizadas em tempo real, à medida que essas interações acontecem. Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos sem que ela precise atualizar a página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido também atualizadas em tempo real, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

A ideia da nossa equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

**A proposta encantou, mas dona Tereza quer ver o negócio em ação! Ela está disposta a pagar por um MVP do projeto e vocês fecharam o negócio com um prazo de 10 dias para entrega.**


## ⚠️ Instruções para rodar o Projeto

1. Instale as dependências

- Instale as dependências nas 3 pastas (raiz, front-end e back-end):
  - `npm install`

2. Rode os scripts

**Rode o script da aplicação individual de Back-end (`./back-end/`):**
- `npm start`

**Rode o script da aplicação individual de Front-end (`./front-end/`):**
- `npm start`

**Importante:**

- Para o banco de dados, utilizaremos a biblioteca ORM `Sequelize`, que fará interface com o `MySQL`.
- Então voce deve ter uma instancia do MySQL 8 instalada e ativa em seu sistema.


## 🚀 Tecnologias 

- 📱 Front-end: HTML, CSS, BootsTrap, JavaScript, React, Context;
- ⚙️  Back-end: NodeJS, MySQL, ORM, SOLID;
- 📀 Versionamento: Git e Github;
- 🛠 Editor: Visual Studio Code;
- ☎️  Comunicação e Metodologia ágil: Slack e Trello.


---

Made by Alexandre Altgauzen 💻 2022
