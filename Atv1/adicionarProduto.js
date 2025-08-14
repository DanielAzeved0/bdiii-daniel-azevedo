// Este script demonstra como adicionar um produto ao banco de dados
// fazendo uma requisição POST diretamente para o seu back-end.

// A URL da sua API de produtos, a mesma usada no front-end.
const apiUrl = 'http://localhost:3000/api/products';

const uri = "mongodb+srv://NielAzeved0:Daga1011@cluster0.bwkwqwp.mongodb.net/";

// Defina o novo produto que você deseja adicionar.
// Ele deve seguir a mesma estrutura que o seu back-end espera.
const novoProduto = {
    nome: 'Piroca',
    preco: 20.00,
    categorias: ['produto erotico']
};

// Use uma função assíncrona para lidar com a requisição e a resposta.
async function adicionarProduto() {
    try {
        // Faz a requisição POST para a API.
        // O método 'POST' indica que estamos criando um novo recurso.
        // O 'body' contém os dados do produto em formato JSON.
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        });

        // Verifica se a resposta foi bem-sucedida (código 201 Created).
        if (response.ok) {
            const produtoAdicionado = await response.json();
            console.log('Produto adicionado com sucesso:');
            console.log(produtoAdicionado);
        } else {
            // Em caso de erro na resposta do servidor.
            const errorText = await response.text();
            console.error('Erro ao adicionar produto:', response.status, errorText);
        }

    } catch (error) {
        // Em caso de erro de rede, como o servidor não estar rodando.
        console.error('Erro de conexão:', error.message);
        console.log('Certifique-se de que o seu servidor back-end está rodando (node BackEnd.js).');
    }
}

// Chama a função para executar a operação.
adicionarProduto();

// Função para atualizar um produto existente
async function atualizarProduto(id, produtoAtualizado) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produtoAtualizado)
        });

        if (response.ok) {
            const produto = await response.json();
            console.log('Produto atualizado com sucesso:');
            console.log(produto);
        } else {
            const errorText = await response.text();
            console.error('Erro ao atualizar produto:', response.status, errorText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error.message);
        console.log('Certifique-se de que o seu servidor back-end está rodando (node BackEnd.js).');
    }
}

// Exemplo de uso da função atualizarProduto
const produtoAtualizado = {
    nome: 'Smartphone Pro Max',
    preco: 2499.99
};

atualizarProduto('<id>', produtoAtualizado);

// Função para deletar um produto existente
async function deletarProduto(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('Produto deletado com sucesso');
        } else {
            const errorText = await response.text();
            console.error('Erro ao deletar produto:', response.status, errorText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error.message);
        console.log('Certifique-se de que o seu servidor back-end está rodando (node BackEnd.js).');
    }
}

// Exemplo de uso da função deletarProduto
deletarProduto('<id>');

