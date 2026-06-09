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
const momentoSelect = document.getElementById('momentoSelect');
const horariosDiv = document.getElementById('horarios');
const conteudo = document.getElementById("conteudo");
const schedule = {
    "Pré-Treino": "05:30",
    "Café da Manhã / Pós-Treino": "07:00",
    "Lanche da Manhã": "10:00",
    "Almoço": "12:30",
    "Lanche da Tarde": "16:00",
    "Jantar": "19:00",
    "Ceia": "22:30"
};

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

function normalizarId(momento) {
    return momento
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function chaveOpcao(momento, indice) {
    return `${normalizarId(momento)}-opcao-${indice + 1}`;
}

function toggleRefeicao(momento, indice) {
    const historico =
        JSON.parse(localStorage.getItem("historico")) || {};

    const chave = chaveOpcao(momento, indice);

    historico[chave] = !historico[chave];

    localStorage.setItem("historico", JSON.stringify(historico));
    salvarHistorico();
    atualizarProgresso();
    mostrarMomento(momento);
}
function atualizarProgresso() {
    const historico =
        JSON.parse(localStorage.getItem("historico")) || {};

    const realizadas =
        Object.values(historico)
            .filter(Boolean).length;

    const total = Object.values(plano)
        .reduce((sum, opcoes) => sum + opcoes.length, 0);

    document.getElementById("barra").max = total;
    document.getElementById("barra").value = realizadas;

    document.getElementById("textoProgresso").innerText =
        `${realizadas}/${total} opções realizadas`;
}
function mostrarMomento(nome) {
    const historico = JSON.parse(localStorage.getItem("historico")) || {};

    let html = `
        <div class="card">
            <h2>${nome}</h2>
    `;

    plano[nome].forEach((opcao, indice) => {
        const chave = chaveOpcao(nome, indice);
        const concluida = historico[chave] ? " opcao-marcada" : "";

        html += `
            <article class="opcao${concluida}" data-momento="${nome}" data-opcao="${indice + 1}">
                <label class="opcao-checkbox">
                    <input
                        type="checkbox"
                        ${historico[chave] ? "checked" : ""}
                        onchange="toggleRefeicao('${nome}', ${indice})"
                    >
                    <strong>Opção ${indice + 1}</strong>
                </label>
                <ul>
        `;

        opcao.forEach(item => {
            html += `<li>${item}</li>`;
        });

        html += `
                </ul>
            </article>
        `;
    });

    html += "</div>";

    conteudo.innerHTML = html;
}

function minutesSinceMidnight(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
}

function getClosestMoment() {
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    let closest = null;
    let minDiff = Number.POSITIVE_INFINITY;

    Object.keys(schedule).forEach(m => {
        const t = minutesSinceMidnight(schedule[m]);
        const diff = Math.abs(t - nowMinutes);
        if (diff < minDiff) {
            minDiff = diff;
            closest = m;
        }
    });

    return closest;
}

function renderHorarios() {
    let html = '<ul class="lista-horarios">';
    Object.keys(schedule).forEach(m => {
        html += `<li><strong>${m}</strong>: ${schedule[m]}</li>`;
    });
    html += '</ul>';
    //horariosDiv.innerHTML = html;
}

function populateSelectAndInit() {
    momentoSelect.innerHTML = '';
    const momentos = Object.keys(plano);
    momentos.forEach((momento) => {
        const opt = document.createElement('option');
        opt.value = momento;
        opt.textContent = momento;
        momentoSelect.appendChild(opt);
    });

    renderHorarios();

    const closest = getClosestMoment();
    if (closest) {
        momentoSelect.value = closest;
        mostrarMomento(closest);
    } else {
        mostrarMomento(momentos[0]);
    }

    momentoSelect.addEventListener('change', (e) => {
        mostrarMomento(e.target.value);
    });
}

// Inicialização da UI ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarHistorico();
    atualizarProgresso();
    populateSelectAndInit();
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