# bdiii-daniel-azevedo 

Aulas de Banco de Dados III com o professor Juarez Brandão

Atv1 - Explorando Bancos de Dados NoSQL: Catálogo de Produtos
Descrição do Projeto
Este projeto é um protótipo funcional para um sistema de catálogo de produtos, desenvolvido como parte de um estudo sobre bancos de dados NoSQL. A aplicação é dividida em duas partes:

Back-end (BackEnd.js): Um servidor Node.js que atua como uma API RESTful. Ele se conecta a um banco de dados MongoDB para gerenciar os dados dos produtos.

Front-end (index.html): Uma interface web simples, construída com HTML, CSS (Tailwind CSS) e JavaScript, que consome a API do back-end para exibir, adicionar, editar e excluir produtos.

O objetivo principal é demonstrar os conceitos, vantagens e desvantagens dos bancos de dados NoSQL na prática, utilizando a modelagem orientada a documentos do MongoDB.

Requisitos
Para executar este projeto, você precisará ter o seguinte instalado em sua máquina:

Node.js: Ambiente de execução JavaScript para o back-end.

npm (gerenciador de pacotes do Node.js): Geralmente vem instalado junto com o Node.js.

Um banco de dados MongoDB Atlas (ou uma instância local do MongoDB) configurado.

Como Executar o Projeto
Siga os passos abaixo para colocar a aplicação em funcionamento.

Passo 1: Clonar o Repositório
Primeiro, clone este repositório para sua máquina local usando o Git:

git clone https://github.com/seu-usuario/seu-repositorio.git

Em seguida, navegue até a pasta principal do projeto:

cd seu-repositorio

Passo 2: Configurar o Back-end
O back-end precisa ser configurado para se conectar ao seu banco de dados MongoDB.

Navegue até a pasta do back-end:

cd Atv1/BackEnd

Instale as dependências do Node.js:

npm install

Configurar a String de Conexão com o MongoDB:

Abra o arquivo BackEnd.js.

Localize a constante dbURI.

Você precisa substituir a string de conexão padrão pela string de conexão do seu cluster no MongoDB Atlas.

Vá até o seu painel do MongoDB Atlas, selecione seu cluster e clique em Connect > Connect your application.

Copie a string de conexão, substitua username e password pelas suas credenciais e cole-a no lugar de dbURI no arquivo.

Sua string de conexão deve ser parecida com esta:

const dbURI = "mongodb+srv://<seu-usuario>:<sua-senha>@<seu-cluster>.mongodb.net/meu_banco_de_dados?retryWrites=true&w=majority";

Passo 3: Iniciar o Servidor Back-end
O servidor deve ser executado em um terminal separado.

Na pasta Atv1/BackEnd, use o comando:

node BackEnd.js

Se tudo estiver correto, você verá a mensagem: "Servidor rodando em http://localhost:3000". Deixe este terminal aberto enquanto você usa a aplicação.

Passo 4: Acessar o Front-end
O front-end é um arquivo HTML que pode ser aberto diretamente no navegador.

Navegue até a pasta do front-end no seu explorador de arquivos: Atv1/FrontEnd.

Clique duas vezes no arquivo index.html para abri-lo em seu navegador.

Como alternativa, você pode usar uma extensão como o Live Server do VS Code para executá-lo em um servidor local, o que ajuda a evitar problemas com o CORS.

Se o back-end estiver rodando corretamente, a lista de produtos será carregada. Você poderá interagir com o formulário para adicionar novos produtos ou usar os botões de editar e excluir para gerenciar o catálogo.

Tecnologias Utilizadas
Node.js: Ambiente de execução para o back-end.

Express: Framework web para Node.js, usado para criar a API RESTful.

Mongoose: Biblioteca de modelagem de dados de objetos (ODM) para MongoDB e Node.js.

MongoDB: Banco de dados NoSQL orientado a documentos.

HTML, CSS (Tailwind CSS) e JavaScript: Para o desenvolvimento do front-end.
