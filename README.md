# 🚀 Desafio Frontend - Projeto Angular - Blog de Notícias com API do IBGE

Seja bem-vindo(a) a este desafio de frontend, que consiste na criação de um projeto Angular para um blog de notícias, utilizando a API externa do IBGE. O objetivo deste desafio é aprimorar minhas habilidades no desenvolvimento de software.

## [Visualize o Projeto Online](https://kleutons.github.io/angular-ibblog/)

- Link: https://kleutons.github.io/angular-ibblog/

### Capturas de Tela

![Captura de Tela do Aplicativo](.github/prototype.png)

## 📋 Desafios do Projeto

- [x] Organizar o sistema em módulos para cada rota da página:
  - [x] Módulo App - núcleo
  - [x] Módulo Pages - rotas das páginas: Home, Post, Search
  - [x] Módulo Shared - componentes globais compartilhados
- [x] Criar um blog com suporte aos modos Escuro e Claro (Dark Mode e Light Mode).
- [x] Desenvolver um layout responsivo.
- [x] Exibir as notícias em destaque.
- [x] Implementar a paginação "Ver Mais" para exibir mais notícias.
- [x] Filtrar notícias por categoria.
- [x] Visualizar notícias por ID.
- [x] Implementar um sistema de busca de notícias.
- [x] Criar um layout para a barra lateral (sidebar).
- [x] Utilizar serviços para lidar com as requisições da API e funções adicionais.
- [x] Criar um sistema de cache para as requisições à API, tornando o site mais rápido e reduzindo a carga nos serviços do servidor backend.
- [x] Criar pipes personalizados para formatação de dados.
- [x] Utilizar variáveis de ambiente.

## 👨‍💻 Instruções de Instalação

### Servidor de Desenvolvimento
Execute o comando `ng serve` para iniciar um servidor de desenvolvimento. Acesse o site em `http://localhost:4200/`. O aplicativo será recarregado automaticamente.

### Compilação
Execute `ng build` para construir o projeto. Os artefatos da compilação serão armazenados na pasta `dist/`.

## Rotas Disponíveis
- http://localhost:4200/ => Página Inicial
- http://localhost:4200/post/:id => Rota GET para visualizar a notícia com base no ID
- http://localhost:4200/search/category/:category => Rota GET para listar notícias de acordo com a categoria
- http://localhost:4200/search/:value => Rota GET para buscar notícias

## 👨‍💻 Sobre Mim
### Criado com 💙 por [@kleutons](https://github.com/kleutons)

### Contato
- [LinkedIn](https://www.linkedin.com/in/kleuton-novais/)
- [Portfólio](https://kleuton.dev)

### Fique à vontade para compartilhar seu feedback e sugestões sobre esta solução. Estou ansioso para ouvir sua opinião.
