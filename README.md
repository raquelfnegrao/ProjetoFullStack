# ​👩‍💻 Projeto FullStack

- Um projeto FullStack desenvolvido com:
  - **React** no frontend;
  - **Node.js com Prisma** no backend.

- Este repositório inclui:
  - Funcionalidades de CRUD de usuários;
  - Integração com banco de dados;
  - Configuração básica de servidor.

##  🔧  Tecnologias Utilizadas

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express, Prisma
- **Banco de dados:** MongoDB
- **Controle de versão:** Git, GitHub

## ⚙️ Funcionalidades

- Criar, ler, atualizar e deletar usuários (CRUD)
- Comunicação frontend-backend via Axios
- Validação de dados no backend
- Tratamento de erros e respostas HTTP adequadas

##  📁  Capturas de tela:

- **Tela inicial zerada, pode começar a digitar as informações** 

![Inicio](captura%20de%20tela/Captura%20de%20tela1.png)

---

- **Exemplo de dados de usuário cadastrado** 

![Resultado exibido](captura%20de%20tela/Captura%20de%20tela2.png)

---

- **Verificação se integrou corretamente ao server** 

![Resultado exibido](captura%20de%20tela/Captura%20de%20tela3.png)

---

- **Usuário deletado** 

![Resultado exibido](captura%20de%20tela/Captura%20de%20tela4.png)

---

- **Criando um usuário no VS Code** 

![Resultado exibido](captura%20de%20tela/Captura%20de%20tela5.png)

---

- **Demonstrando no front-end a criação do usuário** 

![Resultado exibido](captura%20de%20tela/Captura%20de%20tela6.png)

---

## 🚀 Instalação

### Clone o repositório:
   ```
   git clone https://github.com/raquelfnegrao/ProjetoFullStack.git
   cd ProjetoFullStack
   ```

### Backend

1. Navegue para a pasta do backend:
```
cd AprendendoAPIcomNode
```
2. Instale as dependências:
```
npm install
```
3. Configure o banco de dados no prisma/schema.prisma e gere o cliente Prisma:
```
npx prisma generate
```
4. Inicie o servidor:
```
node --watch server.js
```
### Frontend

1. Navegue para a pasta do frontend:

```
cd ProjetoReact
```
2. Instale as dependências:
```
npm install
```
3. Inicie a aplicação React:
```
npm run dev
```

## 🌐 Acesso à aplicação

- Frontend React: http://localhost:5173
- Backend Node.js: http://localhost:3000
