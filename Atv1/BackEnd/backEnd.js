//Exemplo de servidor Node.js com Express e MongoDB

// Importar os módulos necessários
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); // ObjectId para trabalhar com os IDs do MongoDB
const cors = require('cors'); // Para permitir requisições de diferentes origens (front-end)

const app = express();
const port = 3000;

// Configurar o Express para usar JSON e CORS
app.use(express.json());
app.use(cors());

// URL de conexão do MongoDB
// IMPORTANTE: Substitua esta string pela URL do seu cluster MongoDB.
const uri = "mongodb+srv://NielAzeved0:Daga1011@cluster0.bwkwqwp.mongodb.net/";
const client = new MongoClient(uri);

let db; // Variável para armazenar a conexão com o banco de dados

// Função para conectar ao MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        db = client.db("catalogo-produtos"); // Conecta ao banco de dados 'catalogo-produtos'
        console.log("Conectado com sucesso ao MongoDB!");
    } catch (e) {
        console.error("Erro ao conectar ao MongoDB:", e);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
}

// Rotas da API RESTful para o catálogo de produtos

// Rota para adicionar um novo produto (simula db.collection.insertOne())
app.post('/api/products', async (req, res) => {
    try {
        const newProduct = req.body;
        const result = await db.collection('produtos').insertOne(newProduct);
        res.status(201).json({ message: 'Produto adicionado com sucesso', id: result.insertedId });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao adicionar o produto' });
    }
});

// Rota para obter todos os produtos (simula db.collection.find())
app.get('/api/products', async (req, res) => {
    try {
        const products = await db.collection('produtos').find().toArray();
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({ error: 'Erro ao buscar os produtos' });
    }
});

// Rota para atualizar um produto (simula db.collection.updateOne())
app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // Converte a string do ID para um ObjectId do MongoDB
        const objectId = new ObjectId(id);

        const result = await db.collection('produtos').updateOne(
            { _id: objectId },
            { $set: updates }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
});

// Rota para deletar um produto (simula db.collection.deleteOne())
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const objectId = new ObjectId(id);

        const result = await db.collection('produtos').deleteOne({ _id: objectId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        res.status(200).json({ message: 'Produto removido com sucesso' });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao remover o produto' });
    }
});

// Inicia o servidor e a conexão com o MongoDB
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    connectToMongoDB();
});
