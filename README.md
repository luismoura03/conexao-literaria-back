📚 Conexão Literária - Back-end

Bem-vindo ao repositório do back-end do projeto Conexão Literária! Este projeto utiliza Node.js, Knex.js, GraphQL e Apollo Server para fornecer uma API robusta para gerenciar livros e autores.

🚀 Tecnologias Utilizadas

🟢 Node.js - Ambiente de execução JavaScript no servidor

🗄️ Knex.js - Query Builder para interagir com o banco de dados

🐳 Docker - Gerenciamento de containers para facilitar a configuração

🛢️ PostgreSQL (ou outro banco suportado pelo Knex)

🔗 GraphQL - Linguagem de consulta para APIs flexíveis

🚀 Apollo Server - Servidor GraphQL eficiente e escalável

📥 Instalação e Configuração

🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

Node.js (recomendado: 21.7.3)

📥 Instalação

1️⃣ Instale as dependências

npm install

2️⃣ Suba os containers do Docker

docker compose up -d

3️⃣ Execute as migrations

knex migrate:latest

4️⃣ Execute as seeds

knex seed:run

5️⃣ Rode o servidor em modo desenvolvimento

npm run dev
