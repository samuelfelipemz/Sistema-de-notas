# Sistema de Gerenciamento de Notas

Projeto desenvolvido para o processo seletivo de estágio em desenvolvimento.

## Sobre o Projeto

Este é um sistema simples que ajuda professores a organizarem as notas e frequência dos alunos. O professor pode cadastrar alunos com suas notas nas 5 disciplinas e o percentual de frequência, e o sistema calcula automaticamente as médias e identifica alunos que precisam de atenção.

## O que o sistema faz

- Cadastra alunos com nome, 5 notas e frequência
- Calcula a média de cada aluno
- Calcula a média da turma em cada disciplina
- Mostra quais alunos estão acima da média da turma
- Mostra quais alunos têm frequência abaixo de 75%

## Tecnologias que usei

**Backend:**
- Java
- Spark (para criar o servidor)
- Gson (para trabalhar com JSON)
- Maven (para gerenciar as bibliotecas)

**Frontend:**
- React
- JavaScript

## Como rodar o projeto

### Backend

1. Abra o terminal na pasta `backend`
2. Execute o comando:
```bash
mvn exec:java -Dexec.mainClass="com.notas.Main"
```
3. O servidor vai iniciar na porta 4567

### Frontend

1. Abra outro terminal na pasta `frontend`
2. Se for a primeira vez, instale as dependências:
```bash
npm install
```
3. Inicie o projeto:
```bash
npm start
```
4. O navegador vai abrir automaticamente em http://localhost:3000

**Importante:** O backend precisa estar rodando para o frontend funcionar!

## Como usar

1. Preencha os dados do aluno (nome, 5 notas e frequência)
2. Clique em "Adicionar Aluno"
3. Adicione quantos alunos quiser
4. Clique em "Atualizar Resultados" para ver os cálculos

## Premissas

- As notas vão de 0 a 10
- A frequência vai de 0 a 100 (em porcentagem)
- Os dados ficam salvos só enquanto o programa está rodando
- Quando reiniciar, os dados são perdidos

## Decisões que tomei

### Por que separei backend e frontend?
Achei melhor separar porque fica mais organizado e é mais fácil de dar manutenção depois.

### Por que escolhi Spark Java?
Pesquisei e vi que é um framework bem simples para começar. Como é meu primeiro projeto com backend, quis algo mais direto.

### Por que React?
Foi pedido no processo seletivo usar React. Aprendi o básico e consegui fazer funcionar!

### Problema de CORS
Tive um problema onde o React não conseguia falar com o Java por causa de CORS. Resolvi configurando um proxy no React que redireciona as requisições.

## Dificuldades que enfrentei

- Foi meu primeiro contato com backend, então demorei para entender como fazer o servidor conversar com o frontend
- Tive problema com CORS no começo, mas consegui resolver pesquisando
- Configurar o Maven foi novo pra mim

## Possíveis melhorias futuras

Se eu tivesse mais tempo, eu faria:
- Salvar os dados em um banco de dados para não perder quando fechar
- Adicionar botão para editar ou remover alunos
- Deixar a interface mais bonita com CSS
- Adicionar validação dos campos (não deixar adicionar nota maior que 10, por exemplo)

## Autor

Samuel Zeferino

Novembro de 2025