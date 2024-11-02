# Niuco Tech Backend Challenge

O desafio consistia em realizar a integração de um API Mock extrair seus dados através de endpoints REST e exibilos de forma formatada baseado nas regas passadas.

## Setup inicial

```bash
$ https://github.com/paulobahia/backend-challenge.git
$ cd backend-challenge
$ npm run install
```
### Docker

Caso possua Docker em sua máquina, utilize o seguinte comando para rodar nossa API de mock:

```bash
docker-compose up
```

### Pacote NPM

Se preferir, também é possível rodar a API de mock diretamente pela sua máquina:

```bash
npm install -g json-server
cd config
json-server --watch db.json
```

## Mock API

Com o serviço executando, você poderá utilizar as seguintes APIs:

### Users

Listagem de `users` registrados:

`GET http://0.0.0.0:8080/users`

### Exemplos de Payload

#### Request

```json
GET http://0.0.0.0:8080/users
```

#### Response

```json
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "last_activity": 1622499200,
    "role": "admin",
    "status": "enabled"
  },
  ...
]
```

## Comandos importantes

### Desenvolvimento
```bash
# Realiza a compilação do código
npm run build
# Inicia o projeto em modo padrão
npm run start
# Inicia o projeto em modo watch
npm run start:watch
```

### Teste
```bash
# Realiza os testes unitários
npm run test
# Realiza os testes de integração (E2E)
npm run test:e2e
```
## Minha visão

**Pontos de melhoria:**

Essas foram algumas melhorias que poderiam ser implementadas visando a escalabilidade da aplicação:

- **Cache dos Dados**: Para reduzir a quantidade de requisições à API externa e melhorar a performance, você pode implementar um cache local (em memória, Redis, ou similar) que armazene as respostas temporariamente, respeitando uma política de expiração de acordo com a frequência de atualização dos dados de usuários.
- **Paginação** : Caso o número de usuários na API aumente, implementar um sistema de paginação para evita que a aplicação seja sobrecarregada seria o ideal.
- **Validação de Dados mais robusta**: Adicionar validações mais detalhadas e mais robusta, utilizar ferramentas de validação de dados, utilizar padrões de “contratos” para chegar como a estrutura dos dados é recebidos, ajudando assim a garantir que erros na API não se propaguem para a aplicação.
- **Melhoria na Segurança dos Dados**: Implementar um sistema de autenticação com OAuth ou algum outro mecanismo seguro para acessar a API, como tokens de autenticação.

**Escabilidade da aplicação:**

A escalabilidade pode parecer um pouco complexa no começo, mas a ideia central é garantir que a aplicação funcione bem mesmo quando o número de usuários ou dados cresce. Em vez de uma única máquina fazendo todo o trabalho, a aplicação é dividida para várias máquinas, ou partes dela são distribuídas para diferentes servidores.

Conforme a informado no tópico acima visar a implementação de um sistema de cache seria essencial visando que quanto mais pessoas utilizando a aplicação mais a busca por esses dados, fazendo com que uma instância possa se sobrecarregar. Falando em instância seria essencial visar a utilização de um sistema de balanceamento de carga para que um alto número de requisições em um curto período de tempo não afete a aplicação por um todo, distribuindo assim as requisições para cada instância  disponível, minimizando e equilibrando a utilização do servidor evitando assim sua sobrecarga.

**Dificuldades encontradas:**

- **Testes**: Esse é um dos maiores desafios. Como ainda tenho pouca experiência em testes e pouquíssima pratica, definir o que testar e como cobrir todos os casos possíveis é algo que ainda me deixa um pouco inseguro.
- **Tratamento com Logs**: Implementar o tratamento com logs é a particularmente a primeira vez que utilizo, foi necessaire realizar uma pesquisa sobre qual a melhor ferramenta utilizar para esse sistema de log, e para isso utilizei um pouco da ferramenta do ChatGPT, tanto para identificar qual a melhor ferramenta para utilizar nesse momento e identificar um padrão e quais informações são realmente necessárias.
- **Teste integração**: Não consegui me sentir confiante em realizar a implementação do teste de integração, pois não tenho conhecimento e não senti que teria tempo o suficiente para realizar a implementação de forma satisfatoria para mim.
- **Git Hub Actions**: É meu primeiro contato com o sistema de Actions do Git Hub, sabia da existencia mais nunca tinha mexido e nem pesquisado afundo, não me senti satisfeito com o processo realizado relacionado a ele, sinto que existem outras partes que podem ser melhoras e aperfeiçoadas.

**Commits:**

Inicialmente, criar o título e a descrição dos commits era um processo que me travava um pouco. Apesar de estar ciente do que foi feito, como foi implementado e o que foi alterado ou corrigido, eu tinha dificuldade em reunir toda essa informação de maneira simples e coesa. Isso acabava tornando mais difícil para outros desenvolvedores, ou até para mim mesmo no futuro, entenderem rapidamente os commits.

Para facilitar esse processo, passei a usar o SourceGit, uma ferramenta open source de interface gráfica para o Git. Além de funcionar de forma semelhante ao Fork, o SourceGit possui uma funcionalidade de auxílio com IA que ajuda a gerar os commits. Utilizo essa ferramenta para gerar o título e a descrição do commit, revisando e ajustando as informações conforme necessário antes de efetivar o commit. Essa abordagem tem me ajudado a criar commits mais claros e bem estruturados.