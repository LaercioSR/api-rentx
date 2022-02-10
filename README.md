<p align="center">
  <a href="https://www.rocketseat.com.br/">
    <img src="https://raw.githubusercontent.com/LaercioSR/rentx/main/assets/rocketseat-logo.png" height="120" width="auto" alt="Rede Rhisa" />
  </a>
</p>

# RENTX

Repositório contendo o projeto desenvolvido durante a trilha Ignite de Node.Js da [Rocketseat](https://www.rocketseat.com.br/).

<h4 align="center">
 🚧  Projeto em construção...  🚧
</h4>

<p align="center">
 <a href="#sobre-o-projeto">Sobre</a> •
 <a href="#sobre-o-projeto">Requisitos</a> •
 <!-- <a href="#como-executar">Como executar</a> • -->
 <a href="#tecnologias">Tecnologias</a>
</p>

## Sobre o Projeto

API para cadastro e aluguel de carros. Documentação encontrada na rota /docs com a api em execução.

<p align="center">
  <a href="https://github.com/LaercioSR/rentx/blob/main/Insomnia_API_Rentx.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## Requisitos

### Legenda

**RF** => Requisitos Funcionais

**RNF** => Requisitos não Funcionais

**RN** => Regras de Negócios

### Cadastro de Carro

**RF**
Deve ser possível cadastrar um carro.
<!-- Deve ser possível listar todas as categorias. -->

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de Carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema

### Cadastro de Especificação no Carro

**RF**
Deve ser possível cadastrar uma especificação para um carro não cadastrado.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

### Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

### Aluguel de Carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

### Devolução de Carro

**RF**
Deve ser possível realizar a devolução de um carro.

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve estar logado na aplicação.

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

* **[TypeScript](https://www.typescriptlang.org/)**
* **[NodeJs](https://nodejs.org/en/)**
  * [Express](https://expressjs.com/)
  * [TypeORM](https://typeorm.io/#/)
  * [JsonWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
  * [Jest](https://jestjs.io/pt-BR/)
    * [SuperTest](https://github.com/visionmedia/supertest#readme)
* **[PostgreSQL](https://www.postgresql.org/)**
* **[ESLint](https://eslint.org/)**
* **[Swagger](https://swagger.io/)**
