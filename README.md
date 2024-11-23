# Sigae

Este projeto se trata de uma aplicação para registro de planos de melhoria de diversos tipos, ou para diversos propósitos e áreas. Antes da criação do plano de melhoria, é necessário implementar uma agenda que gerencie os encontros dedicados à discussão dos objetivos e ações de melhoria, seja de forma presencial ou remota.

## Tecnologias

- Angular 18
- RXJS
- PrimeNg
- CAPTCHA

## Requisitos

- Ter uma interface intuitiva e elegante
- Utilização de técnicas de gerenciamento de estado
- Implementação de guarda de rota
- Páginas responsivas, otimizadas para dispositivos móveis e desktops
- Implementação de testes unitários
- Criação de componentes reutilizáveis com foco em modularidade e manutenibilidade

## Funcionalidades

1. Tela de Login do usuário:

   - Implementar CAPTCHA
   - Autenticação multifator (fake)
   - Opção de recuperação de senha (fake)

2. Home Page:

   - Resumo com:
     - Total de planos de melhoria criados
     - Total de usuários cadastrados
     - Agenda do usuário, com eventos que contêm:
       - Assunto
       - Título
       - Participantes
       - Descrição/Pauta do evento

3. Menu de navegação para as seguintes telas:
   - Cadastro de Pessoas:
     - Campos para CPF, nome, e-mail e endereço
   - Cadastro de Eventos para a Agenda:
     - Interface similar ao Outlook
   - Cadastro dos Planos de Melhoria:
     - Estrutura multinível contendo:
       - Cabeçalho do plano com título, descrição e datas de início e término, além de um status que indica o andamento (em andamento ou concluído, baseado no status das ações)
       - Lista de objetivos do plano
       - Lista de ações para atender os objetivos, incluindo:
         - Descrição da ação
         - Responsáveis pela ação
         - Datas de início e término previstas
         - Datas de início e término realizadas
         - Status da ação (não iniciado, em andamento, concluído) com base nas datas realizadas

## Uso

1. Clone este repositório
2. Execute `npm install` para instalar todos os pacotes desta aplicação
3. Execute `ng serve` para rodar um servidor de desenvolvimento deste aplicativo
4. Navegue até http://localhost:4200/ no seu navegador para abrir o servidor de desenvolvimento
