# Introdução

Uma api-rest criada em node.js para me ajudar nos estudos de api e aumentar minhas habilidades

# Executar o projeto

Para iniciar o servidor local digite:

`npm run dev`

# Conexão com o servidor

ip: ip do servidor
porta: 3306

## Para fazer o sequelize criar as tabelas no banco de dados do seu servidor

`npx sequelize db:migrate`

## Para fazer o sequelize criar uma tabela especifica no banco de dados do seu servidor

`npx sequelize migration:create --name="Nome da tabela"`
