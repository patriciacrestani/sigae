# Sigae

Este projeto se trata de uma agenda, com possibilidade de registro de contatos e planos de melhoria de diversos tipos, ou para diversos propósitos e áreas.

## Tecnologias

- Angular 18
- RXJS
- NGRX
- PrimeNg

## Funcionalidades

1. Tela de login do usuário com autenticação controlada por gerenciamento de estados (como o login é fake, é possível informar qualquer e-mail e senha para realização do login)

- As rotas do sistema são protegidas por um guard que verifica se o usuário está autenticado.

2. Home Page com cards com resumo do total de planos de melhoria criados e total de usuários cadastrados.

3. Cadastro e gerenciamento de pessoas:

- É possível cadastrar, listar, excluir e editar pessoas.
- A lista de pessoas é salva por gerenciamento de estados.
- O formulário de cadastro e edição tem seus dados salvos no local storage até a finalização do cadastro/edição para garantir a persistência dos dados.

4. Agenda:

- Calendário que lista eventos mockados
- É possível cadastrar novos eventos

5. Planos de ação

- Cadastro de plano de ação com seus objetivos e problemas

## Melhorias

Por questões de tempo, algumas funcionalidades não foram implementadas, como:

- Implementar CAPTCHA no login;
- Implementar testes unitários;
- Melhorar a visualização da home;
- Implementar cadastro de ações de cada problema do plano de ações;
- Calendário que lista eventos criados e atribuídos ao usuário logado;
- Editar e excluir eventos na agenda;
- Listar planos de ação cadastrados no sistema;
- Corrigir a listagem de eventos do dia; e
- Permitir selecionar qualquer dia do calendário para exibição.

## Uso

1. Clone este repositório
2. Execute `npm install` para instalar todos os pacotes desta aplicação
3. Execute `ng serve` para rodar um servidor de desenvolvimento deste aplicativo
4. Navegue até http://localhost:4200/ no seu navegador para abrir o servidor de desenvolvimento

Ou acesse o projeto no [GitHub Pages](https://patriciacrestani.github.io/sigae/).
