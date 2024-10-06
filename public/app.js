const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// Configurações para processar dados enviados via POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos estáticos

app.use(express.static(__dirname));

// Função para calcular meses e dias a partir do número total de dias
function calcularTempoTotal(dias_totais) {
    const meses = Math.floor(dias_totais / 30);
    const dias_restantes = dias_totais % 30;
    return { meses, dias_restantes };
}

app.post('/calculadoraComposta', (req, res) => {
    const valor_inicial = parseFloat(req.body.valor_inicial);
    const ciclos = parseInt(req.body.ciclos);
    const dias_por_ciclo = parseInt(req.body.dias_por_ciclo);
    const rendimento = parseFloat(req.body.rendimento) / 100;
    const extra = req.body.extra ? parseFloat(req.body.extra) : 0;

    let valor_final = valor_inicial;
    let total_investido = valor_inicial;

    for (let i = 0; i < ciclos; i++) {
        valor_final += valor_final * rendimento + extra;
        total_investido += extra;
    }

    const dias_totais = ciclos * dias_por_ciclo;
    const { meses, dias_restantes } = calcularTempoTotal(dias_totais);

    res.json({
        valor_final: valor_final.toFixed(2),
        total_investido: total_investido.toFixed(2),
        meses,
        dias_restantes
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
