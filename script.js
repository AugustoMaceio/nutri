const plano = {
    "Pré-Treino": [
        [
            "1 banana prata pequena",
            "5g de creatina monohidratada com 200ml de água"
        ],
        [
            "1 dose de palatinose",
            "5g de creatina monohidratada com 250ml de água"
        ]
    ],

    "Café da Manhã / Pós-Treino": [
        [
            "Shake com banana",
            "1/2 polpa de açaí OU morango OU kiwi",
            "200 a 250ml de água ou leite desnatado",
            "1 scoop de whey",
            "1 colher de sopa de farelo de aveia"
        ],
        [
            "60g a 80g de batata doce, inhame ou macaxeira",
            "1 ovo + 2 claras ou 2 ovos mexidos",
            "20g de queijo",
            "Cafezinho"
        ],
        [
            "1 crepioca ou aveioca",
            "20g de queijo coalho ou curado",
            "Cafezinho"
        ],
        [
            "80g banana prata ou 1/2 banana comprida cozida",
            "1 ovo + 2 claras ou 2 ovos mexidos",
            "20g de queijo",
            "Ou panqueca de banana com aveia"
        ],
        [
            "60g de cuscuz",
            "1 ovo + 2 claras ou 2 ovos mexidos",
            "20g de queijo"
        ]
    ],

    "Lanche da Manhã": [
        [
            "50g frutas vermelhas OU 1 kiwi OU 1 maçã",
            "1 iogurte natural"
        ],
        [
            "20g de oleaginosas"
        ]
    ],

    "Almoço": [
        [
            "100g frango ou peixe",
            "60g a 80g legumes",
            "1 concha de feijão ou lentilha"
        ],
        [
            "90g a 100g salmão",
            "Rúcula, tomate e pepino",
            "60g a 80g quinoa"
        ],
        [
            "100g carne",
            "60g a 80g legumes",
            "80g macarrão com molho caseiro"
        ],
        [
            "80g a 100g frango, peixe ou carne",
            "80g abóbora",
            "Couve refogada",
            "1 concha de feijão ou lentilha"
        ]
    ],

    "Lanche da Tarde": [
        [
            "1 iogurte proteico"
        ],
        [
            "1 iogurte natural + 1 scoop whey"
        ],
        [
            "Vitamina com banana, morango e leite vegetal + whey"
        ],
        [
            "Panqueca de banana ou crepioca"
        ],
        [
            "Suco da fruta + 1 scoop whey"
        ]
    ],

    "Jantar": [
        [
            "100g inhame, batata doce ou macaxeira",
            "80g frango ou peixe",
            "Ou omelete com verduras"
        ],
        [
            "Creme de abóbora ou sopa de legumes",
            "80g frango ou carne moída"
        ],
        [
            "80g cuscuz",
            "1 ovo + 2 claras ou 2 ovos mexidos",
            "20g queijo",
            "Ou 80g a 100g frango ou peixe"
        ],
        [
            "Berinjela ou abobrinha recheada com carne moída",
            "Salada"
        ],
        [
            "Pão folha com carne moída ou frango desfiado",
            "Salada"
        ]
    ],

    "Ceia": [
        [
            "1 xícara de chá de erva doce"
        ],
        [
            "1 xícara de chá de erva cidreira"
        ],
        [
            "1 xícara de chá de capim santo"
        ]
    ]
};
const ingredientes = [
    "banana",
    "creatina",
    "whey",
    "aveia",
    "iogurte",
    "frango",
    "peixe",
    "ovos",
    "queijo",
    "batata doce",
    "inhame",
    "macaxeira",
    "cuscuz",
    "abóbora",
    "quinoa",
    "lentilha",
    "feijão",
    "morango",
    "kiwi"
];
/* {
    id: "pretreino",
        titulo: "Pré-Treino",
            concluida: false
} */

const tabelaNutricional = {

    banana: {
        calorias: 89,
        proteina: 1.1,
        carboidrato: 23,
        gordura: 0.3
    },

    whey: {
        calorias: 120,
        proteina: 24,
        carboidrato: 3,
        gordura: 1
    },

    ovo: {
        calorias: 70,
        proteina: 6,
        carboidrato: 0,
        gordura: 5
    },

    frango: {
        calorias: 165,
        proteina: 31,
        carboidrato: 0,
        gordura: 3.6
    }
};
const menu = document.getElementById("menu");
const conteudo = document.getElementById("conteudo");
function mostrarNutrientes(item) {
    const dados = tabelaNutricional[item];

    if (!dados) {
        document.getElementById("nutrientes").innerHTML = `
            <p>Sem dados nutricionais para <strong>${item}</strong>.</p>
        `;
        return;
    }

    document.getElementById("nutrientes").innerHTML = `
        <h3>${item}</h3>
        <p>🔥 ${dados.calorias} kcal</p>
        <p>🥩 ${dados.proteina} g proteína</p>
        <p>🍞 ${dados.carboidrato} g carboidratos</p>
        <p>🥑 ${dados.gordura} g gorduras</p>
    `;
}
function salvarHistorico() {

    const hoje =
        new Date()
            .toISOString()
            .split("T")[0];

    const historico =
        JSON.parse(
            localStorage.getItem("historicoDias")
        ) || {};

    historico[hoje] =
        JSON.parse(
            localStorage.getItem("historico")
        );

    localStorage.setItem(
        "historicoDias",
        JSON.stringify(historico)
    );
}
function carregarHistorico() {

    const historico =
        JSON.parse(
            localStorage.getItem("historicoDias")
        ) || {};

    let html = "";

    for (const dia in historico) {

        const realizadas =
            Object.values(historico[dia])
                .filter(Boolean)
                .length;

        html += `
            <div>
                ${dia}
                - ${realizadas}/7 refeições
            </div>
        `;
    }

    document.getElementById(
        "historicoDias"
    ).innerHTML = html;
}
function gerarListaCompras() {

    const lista =
        document.getElementById("listaCompras");

    lista.innerHTML = "";

    ingredientes.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        lista.appendChild(li);
    });
}
function toggleRefeicao(id) {

    const historico =
        JSON.parse(localStorage.getItem("historico")) || {};

    historico[id] = !historico[id];

    localStorage.setItem(
        "historico",
        JSON.stringify(historico)
    );

    atualizarProgresso();
}
function atualizarProgresso() {

    const historico =
        JSON.parse(localStorage.getItem("historico")) || {};

    const realizadas =
        Object.values(historico)
            .filter(Boolean).length;

    document.getElementById("barra").value =
        realizadas;

    document.getElementById("textoProgresso")
        .innerText =
        `${realizadas}/7 refeições realizadas`;
}
function mostrarMomento(nome) {
    let html = `
        <div class="card">
            <h2>${nome}</h2>
    `;

    plano[nome].forEach((opcao, indice) => {
        html += `
            <div class="opcao">
                <h3>Opção ${indice + 1}</h3>
                <ul>
        `;

        opcao.forEach(item => {
            html += `<li>${item}</li>`;
        });

        html += `
                </ul>
            </div>
        `;
    });

    html += "</div>";

    conteudo.innerHTML = html;
}

Object.keys(plano).forEach((momento, indice) => {
    const botao = document.createElement("button");
    botao.textContent = momento;
    botao.onclick = () => mostrarMomento(momento);
    menu.appendChild(botao);

    if (indice === 0) {
        mostrarMomento(momento);
    }
});

// Inicialização da UI ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    gerarListaCompras();
    carregarHistorico();
    atualizarProgresso();

    // clicar em um item da lista mostra nutrientes (se disponíveis)
    document.getElementById('listaCompras').addEventListener('click', (e) => {
        if (e.target && e.target.nodeName === 'LI') {
            mostrarNutrientes(e.target.textContent.trim());
        }
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('./service-worker.js');
            console.log('Service Worker registrado:', registration);
        } catch (error) {
            console.error('Erro ao registrar SW:', error);
        }
    });
}