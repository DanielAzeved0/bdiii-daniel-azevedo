// Este script demonstra como adicionar um produto ao banco de dados
// fazendo uma requisição POST diretamente para o seu back-end.

// A URL da sua API de produtos, a mesma usada no front-end.
const apiUrl = 'http://localhost:3000/api/products';

// Defina o novo produto que você deseja adicionar.
// Ele deve seguir a mesma estrutura que o seu back-end espera.
const novoProduto = {
    nome: 'Smartphone Pro',
    preco: 1999.99,
    categorias: ['eletrônicos', 'celulares']
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

