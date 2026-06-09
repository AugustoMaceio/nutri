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


const tabelaNutricional = {
    banana: { nome: "Banana prata crua", categoria: "Frutas", porcao: "100g (1 banana pequena ≈ 80g)", energia_kcal: 98, proteina_g: 1.3, carboidrato_g: 26.0, gordura_g: 0.1, fibra_g: 2.0, calcio_mg: 5, ferro_mg: 0.3, potassio_mg: 358 },
    morango: { nome: "Morango cru", categoria: "Frutas", porcao: "100g (7-8 morangos)", energia_kcal: 40, proteina_g: 0.7, carboidrato_g: 7.7, gordura_g: 0.3, fibra_g: 2.0, calcio_mg: 16, ferro_mg: 0.3, potassio_mg: 153 },
    kiwi: { nome: "Kiwi cru", categoria: "Frutas", porcao: "100g (1 unidade média)", energia_kcal: 61, proteina_g: 0.8, carboidrato_g: 14.7, gordura_g: 0.5, fibra_g: 2.6, calcio_mg: 34, ferro_mg: 0.3, potassio_mg: 312 },
    maca: { nome: "Maçã com casca crua", categoria: "Frutas", porcao: "100g (1 maçã pequena)", energia_kcal: 52, proteina_g: 0.2, carboidrato_g: 13.8, gordura_g: 0.2, fibra_g: 2.4, calcio_mg: 6, ferro_mg: 0.1, potassio_mg: 107 },
    frango: { nome: "Frango peito sem pele cozido", categoria: "Carnes e derivados", porcao: "100g", energia_kcal: 163, proteina_g: 31.5, carboidrato_g: 0.0, gordura_g: 3.2, fibra_g: 0.0, calcio_mg: 9, ferro_mg: 0.4, potassio_mg: 270 },
    peixe_salmao: { nome: "Salmão sem pele cru", categoria: "Pescados", porcao: "100g", energia_kcal: 170, proteina_g: 19.3, carboidrato_g: 0.0, gordura_g: 9.7, fibra_g: 0.0, calcio_mg: 10, ferro_mg: 0.8, potassio_mg: 330 },
    ovo: { nome: "Ovo de galinha inteiro cru", categoria: "Produtos de origem animal", porcao: "100g (2 ovos grandes)", energia_kcal: 143, proteina_g: 13.0, carboidrato_g: 1.6, gordura_g: 8.9, fibra_g: 0.0, calcio_mg: 50, ferro_mg: 1.8, potassio_mg: 130 },
    clara_ovo: { nome: "Clara de ovo cru", categoria: "Produtos de origem animal", porcao: "100g (clara de 3 ovos)", energia_kcal: 52, proteina_g: 11.1, carboidrato_g: 0.7, gordura_g: 0.2, fibra_g: 0.0, calcio_mg: 8, ferro_mg: 0.1, potassio_mg: 163 },
    carne_vermelha: { nome: "Carne vermelha magra cozida", categoria: "Carnes e derivados", porcao: "100g", energia_kcal: 180, proteina_g: 28.0, carboidrato_g: 0.0, gordura_g: 7.5, fibra_g: 0.0, calcio_mg: 8, ferro_mg: 2.8, potassio_mg: 340 },
    queijo: { nome: "Queijo meia cura", categoria: "Laticínios", porcao: "20g", energia_kcal: 79, proteina_g: 7.0, carboidrato_g: 0.6, gordura_g: 5.5, fibra_g: 0.0, calcio_mg: 160, ferro_mg: 0.2, potassio_mg: 35 },
    iogurte_natural: { nome: "Iogurte natural desnatado", categoria: "Laticínios", porcao: "100g", energia_kcal: 41, proteina_g: 3.8, carboidrato_g: 5.8, gordura_g: 0.3, fibra_g: 0.0, calcio_mg: 120, ferro_mg: 0.1, potassio_mg: 155 },
    leite_desnatado: { nome: "Leite integral", categoria: "Laticínios", porcao: "200ml", energia_kcal: 62, proteina_g: 3.2, carboidrato_g: 4.8, gordura_g: 1.6, fibra_g: 0.0, calcio_mg: 113, ferro_mg: 0.06, potassio_mg: 150 },
    whey_protein: { nome: "Whey Protein Concentrado", categoria: "Suplementos", porcao: "30g (1 scoop)", energia_kcal: 120, proteina_g: 24.0, carboidrato_g: 3.0, gordura_g: 1.5, fibra_g: 0.0, calcio_mg: 200, ferro_mg: 0.5, potassio_mg: 0 },
    batata_doce: { nome: "Batata doce cozida", categoria: "Tubérculos", porcao: "100g", energia_kcal: 77, proteina_g: 0.6, carboidrato_g: 18.4, gordura_g: 0.1, fibra_g: 2.2, calcio_mg: 17, ferro_mg: 0.4, potassio_mg: 220 },
    inhame: { nome: "Inhame cozido", categoria: "Tubérculos", porcao: "100g", energia_kcal: 98, proteina_g: 2.0, carboidrato_g: 23.7, gordura_g: 0.1, fibra_g: 3.9, calcio_mg: 14, ferro_mg: 0.5, potassio_mg: 816 },
    macaxeira: { nome: "Macaxeira (mandioca) cozida", categoria: "Tubérculos", porcao: "100g", energia_kcal: 125, proteina_g: 0.9, carboidrato_g: 30.2, gordura_g: 0.3, fibra_g: 1.9, calcio_mg: 18, ferro_mg: 0.3, potassio_mg: 180 },
    aveia: { nome: "Aveia em flocos crua", categoria: "Cereais", porcao: "30g", energia_kcal: 118, proteina_g: 4.2, carboidrato_g: 20.0, gordura_g: 2.6, fibra_g: 2.7, calcio_mg: 14, ferro_mg: 1.3, potassio_mg: 101 },
    cuscuz: { nome: "Cuscuz cozido", categoria: "Cereais", porcao: "60g", energia_kcal: 88, proteina_g: 2.8, carboidrato_g: 18.6, gordura_g: 0.3, fibra_g: 0.6, calcio_mg: 8, ferro_mg: 0.2, potassio_mg: 52 },
    quinoa: { nome: "Quinoa cozida", categoria: "Cereais", porcao: "60g", energia_kcal: 68, proteina_g: 2.4, carboidrato_g: 12.3, gordura_g: 1.5, fibra_g: 1.9, calcio_mg: 20, ferro_mg: 1.2, potassio_mg: 148 },
    macarrao: { nome: "Macarrão cozido", categoria: "Cereais", porcao: "80g", energia_kcal: 75, proteina_g: 2.5, carboidrato_g: 16.0, gordura_g: 0.4, fibra_g: 0.9, calcio_mg: 6, ferro_mg: 0.4, potassio_mg: 45 },
    feijao: { nome: "Feijão cozido", categoria: "Legumes", porcao: "150g", energia_kcal: 76, proteina_g: 5.4, carboidrato_g: 13.5, gordura_g: 0.3, fibra_g: 3.2, calcio_mg: 36, ferro_mg: 2.4, potassio_mg: 214 },
    lentilha: { nome: "Lentilha cozida", categoria: "Legumes", porcao: "150g", energia_kcal: 116, proteina_g: 8.8, carboidrato_g: 19.8, gordura_g: 0.5, fibra_g: 6.6, calcio_mg: 19, ferro_mg: 3.3, potassio_mg: 282 },
    abobora: { nome: "Abóbora cozida", categoria: "Hortaliças", porcao: "100g", energia_kcal: 36, proteina_g: 0.9, carboidrato_g: 8.2, gordura_g: 0.1, fibra_g: 1.7, calcio_mg: 21, ferro_mg: 0.3, potassio_mg: 195 },
    couve: { nome: "Couve refogada", categoria: "Hortaliças", porcao: "100g", energia_kcal: 62, proteina_g: 3.3, carboidrato_g: 8.3, gordura_g: 2.1, fibra_g: 2.8, calcio_mg: 143, ferro_mg: 0.5, potassio_mg: 296 },
    tomate: { nome: "Tomate cru", categoria: "Hortaliças", porcao: "100g", energia_kcal: 18, proteina_g: 0.9, carboidrato_g: 3.9, gordura_g: 0.2, fibra_g: 1.2, calcio_mg: 12, ferro_mg: 0.3, potassio_mg: 247 },
    pepino: { nome: "Pepino cru", categoria: "Hortaliças", porcao: "100g", energia_kcal: 16, proteina_g: 0.7, carboidrato_g: 3.6, gordura_g: 0.1, fibra_g: 0.6, calcio_mg: 16, ferro_mg: 0.3, potassio_mg: 147 },
    rucola: { nome: "Rúcula crua", categoria: "Hortaliças", porcao: "100g", energia_kcal: 25, proteina_g: 2.6, carboidrato_g: 3.7, gordura_g: 0.7, fibra_g: 1.6, calcio_mg: 160, ferro_mg: 1.5, potassio_mg: 369 }
};

const schedule = {
    "Pré-Treino": "05:30",
    "Café da Manhã / Pós-Treino": "07:00",
    "Lanche da Manhã": "10:00",
    "Almoço": "12:30",
    "Lanche da Tarde": "16:00",
    "Jantar": "19:00",
    "Ceia": "22:30"
};

// --- View State & Navigation ---

const tabs = {
    plano: document.getElementById('tab-plano'),
    resumo: document.getElementById('tab-resumo'),
    historico: document.getElementById('tab-historico')
};
const views = {
    plano: document.getElementById('view-plano'),
    resumo: document.getElementById('view-resumo'),
    historico: document.getElementById('view-historico')
};

function switchView(viewName) {
    Object.values(views).forEach(v => {
        if(v) v.classList.add('hidden');
    });
    Object.values(tabs).forEach(t => {
        if(t) t.className = "nav-tab flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 transition-interaction hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors cursor-pointer";
    });
    
    if(views[viewName]) views[viewName].classList.remove('hidden');
    if(tabs[viewName]) tabs[viewName].className = "nav-tab flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-2xl px-4 py-1.5 transition-interaction scale-90 duration-150 cursor-pointer";

    if (viewName === 'historico') carregarHistorico();
    if (viewName === 'resumo') atualizarResumo();
}

Object.keys(tabs).forEach(k => {
    if(tabs[k]) tabs[k].addEventListener('click', () => switchView(k));
});

// --- Calorie Estimation ---

function normalizeString(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function estimateMacros(opcaoItems) {
    let totals = { kcal: 0, prot: 0, carb: 0, fat: 0 };
    
    opcaoItems.forEach(item => {
        const itemNorm = normalizeString(item);
        
        let foundKeys = [];
        
        if(itemNorm.includes('banana')) foundKeys.push('banana');
        if(itemNorm.includes('morango')) foundKeys.push('morango');
        if(itemNorm.includes('kiwi')) foundKeys.push('kiwi');
        if(itemNorm.includes('maca ')) foundKeys.push('maca');
        if(itemNorm.includes('frango')) foundKeys.push('frango');
        if(itemNorm.includes('salmao')) foundKeys.push('peixe_salmao');
        else if(itemNorm.includes('peixe')) foundKeys.push('frango'); // default fish
        if(itemNorm.includes('ovo') && !itemNorm.includes('clara')) foundKeys.push('ovo');
        if(itemNorm.includes('clara')) foundKeys.push('clara_ovo');
        if(itemNorm.includes('carne')) foundKeys.push('carne_vermelha');
        if(itemNorm.includes('queijo')) foundKeys.push('queijo');
        if(itemNorm.includes('iogurte')) foundKeys.push('iogurte_natural');
        if(itemNorm.includes('leite')) foundKeys.push('leite_desnatado');
        if(itemNorm.includes('whey')) foundKeys.push('whey_protein');
        if(itemNorm.includes('batata doce')) foundKeys.push('batata_doce');
        if(itemNorm.includes('inhame')) foundKeys.push('inhame');
        if(itemNorm.includes('macaxeira')) foundKeys.push('macaxeira');
        if(itemNorm.includes('aveia')) foundKeys.push('aveia');
        if(itemNorm.includes('cuscuz')) foundKeys.push('cuscuz');
        if(itemNorm.includes('quinoa')) foundKeys.push('quinoa');
        if(itemNorm.includes('macarrao')) foundKeys.push('macarrao');
        if(itemNorm.includes('feijao')) foundKeys.push('feijao');
        if(itemNorm.includes('lentilha')) foundKeys.push('lentilha');
        if(itemNorm.includes('abobora')) foundKeys.push('abobora');
        if(itemNorm.includes('couve')) foundKeys.push('couve');
        if(itemNorm.includes('tomate')) foundKeys.push('tomate');
        if(itemNorm.includes('pepino')) foundKeys.push('pepino');
        if(itemNorm.includes('rucula')) foundKeys.push('rucola');
        
        foundKeys.forEach(k => {
            let mult = 1;
            if(k === 'ovo' && (itemNorm.includes('2 ovos') || itemNorm.includes('2 claras'))) mult = 1;
            else if(k === 'ovo' && itemNorm.includes('1 ovo')) mult = 0.5;
            
            const n = tabelaNutricional[k];
            if(n) {
                totals.kcal += (n.energia_kcal * mult);
                totals.prot += (n.proteina_g * mult);
                totals.carb += (n.carboidrato_g * mult);
                totals.fat += (n.gordura_g * mult);
            }
        });
    });
    
    return totals;
}

// --- Logic ---

function normalizarId(momento) {
    return momento.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function chaveOpcao(momento, indice) {
    return `${normalizarId(momento)}-opcao-${indice + 1}`;
}

function salvarHistorico() {
    const hoje = new Date().toISOString().split("T")[0];
    const historico = JSON.parse(localStorage.getItem("historicoDias")) || {};
    historico[hoje] = JSON.parse(localStorage.getItem("historico"));
    localStorage.setItem("historicoDias", JSON.stringify(historico));
}

function carregarHistorico() {
    const historico = JSON.parse(localStorage.getItem("historicoDias")) || {};
    const totalDiario = Object.values(plano).reduce((sum, opcoes) => sum + opcoes.length, 0);
    
    let html = "";
    const dias = Object.keys(historico).sort().reverse();
    
    if(dias.length === 0) {
        html = '<p class="text-on-surface-variant">Nenhum histórico registrado.</p>';
    } else {
        dias.forEach(dia => {
            const diarias = historico[dia] || {};
            const realizadas = Object.values(diarias).filter(Boolean).length;
            const percentage = Math.min(100, Math.round((realizadas / totalDiario) * 100));
            
            html += `
            <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm mb-4">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-label-md font-label-md text-on-surface-variant">${dia}</span>
                    <span class="text-label-md font-label-md text-primary">${realizadas} opções realizadas</span>
                </div>
                <div class="w-full bg-outline-variant h-2.5 rounded-full overflow-hidden">
                    <div class="bg-primary h-full rounded-full" style="width: ${percentage}%"></div>
                </div>
            </div>
            `;
        });
    }
    
    const hDias = document.getElementById("historicoDias");
    if(hDias) hDias.innerHTML = html;
}

function atualizarResumo() {
    const historico = JSON.parse(localStorage.getItem("historico")) || {};
    let totalKcal = 0, totalProt = 0, totalCarb = 0, totalFat = 0;
    
    Object.keys(plano).forEach(momento => {
        plano[momento].forEach((opcao, indice) => {
            const chave = chaveOpcao(momento, indice);
            if(historico[chave]) {
                const macros = estimateMacros(opcao);
                totalKcal += macros.kcal;
                totalProt += macros.prot;
                totalCarb += macros.carb;
                totalFat += macros.fat;
            }
        });
    });
    
    const maxKcal = 2000;
    const maxCarb = 250;
    const maxProt = 150;
    const maxFat = 70;

    const elKcal = document.getElementById("totalKcalHoje");
    const elCarb = document.getElementById("totalCarbsHoje");
    const elProt = document.getElementById("totalProteinHoje");
    const elFat = document.getElementById("totalFatHoje");

    if(elKcal) elKcal.innerText = Math.round(totalKcal) + " kcal";
    if(elCarb) {
        elCarb.innerText = Math.round(totalCarb) + "g";
        elCarb.parentElement.nextElementSibling.firstElementChild.style.width = Math.min(100, (totalCarb/maxCarb)*100) + "%";
    }
    if(elProt) {
        elProt.innerText = Math.round(totalProt) + "g";
        elProt.parentElement.nextElementSibling.firstElementChild.style.width = Math.min(100, (totalProt/maxProt)*100) + "%";
    }
    if(elFat) {
        elFat.innerText = Math.round(totalFat) + "g";
        elFat.parentElement.nextElementSibling.firstElementChild.style.width = Math.min(100, (totalFat/maxFat)*100) + "%";
    }
}

function toggleRefeicao(momento, indice) {
    const historico = JSON.parse(localStorage.getItem("historico")) || {};
    const chave = chaveOpcao(momento, indice);
    historico[chave] = !historico[chave];
    
    localStorage.setItem("historico", JSON.stringify(historico));
    salvarHistorico();
    atualizarProgresso();
    
    const article = document.querySelector(`article[data-momento="${momento}"][data-opcao="${indice+1}"]`);
    if(article) {
        if(historico[chave]) {
            article.classList.add('ring-2', 'ring-primary', 'bg-success-light');
        } else {
            article.classList.remove('ring-2', 'ring-primary', 'bg-success-light');
        }
    }
}

function atualizarProgresso() {
    const historico = JSON.parse(localStorage.getItem("historico")) || {};
    const realizadas = Object.values(historico).filter(Boolean).length;
    const total = Object.values(plano).reduce((sum, opcoes) => sum + opcoes.length, 0);
    
    const progText = document.getElementById("textoProgresso");
    const progBar = document.getElementById("barraProgresso");
    
    if(progText) progText.innerText = `${realizadas}/${total} opções realizadas`;
    if(progBar) {
        let perc = total > 0 ? (realizadas / total) * 100 : 0;
        progBar.style.width = Math.max(2, perc) + "%";
    }
}

function mostrarMomento(nome) {
    const historico = JSON.parse(localStorage.getItem("historico")) || {};
    const conteudo = document.getElementById("conteudo");
    
    let html = `
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-headline-sm font-headline-sm text-primary">${nome}</h2>
            <span class="bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm px-3 py-1 rounded-full">${plano[nome].length} Opções</span>
        </div>
        <div class="space-y-gutter-sm">
    `;

    plano[nome].forEach((opcao, indice) => {
        const chave = chaveOpcao(nome, indice);
        const isChecked = historico[chave];
        const cardClasses = isChecked ? 'ring-2 ring-primary bg-success-light' : '';
        const chkId = `opt-${nome.replace(/[^a-zA-Z0-9]/g, '')}-${indice}`;
        
        const macros = estimateMacros(opcao);

        html += `
            <article data-momento="${nome}" data-opcao="${indice + 1}" class="bg-surface-container-lowest meal-card-accent rounded-xl p-gutter-md shadow-[0px_4px_12px_rgba(0,0,0,0.05)] transition-interaction hover:shadow-md ${cardClasses}">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="relative w-6 h-6">
                            <input class="w-6 h-6 rounded-md border-outline text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer" id="${chkId}" type="checkbox" ${isChecked ? "checked" : ""} onchange="toggleRefeicao('${nome}', ${indice})"/>
                        </div>
                        <label class="text-headline-sm font-headline-sm text-on-surface cursor-pointer" for="${chkId}">Opção ${indice + 1}</label>
                    </div>
                    <span class="text-label-sm font-label-sm text-outline border border-outline-variant px-2 py-0.5 rounded-full">${Math.round(macros.kcal)} kcal</span>
                </div>
                <ul class="space-y-2 ml-1 text-on-surface-variant text-body-md">
        `;

        opcao.forEach(item => {
            html += `
                <li class="flex items-start gap-2">
                    <span class="text-primary mt-1">•</span>
                    <span>${item.replace(/OU/g, '<span class="text-label-sm font-bold">OU</span>')}</span>
                </li>`;
        });

        html += `
                </ul>
            </article>
        `;
    });

    html += `</div>`;
    if(conteudo) conteudo.innerHTML = html;
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

function populateSelectAndInit() {
    const momentoSelect = document.getElementById('momentoSelect');
    if(!momentoSelect) return;
    
    momentoSelect.innerHTML = '';
    const momentos = Object.keys(plano);
    momentos.forEach((momento) => {
        const opt = document.createElement('option');
        opt.value = momento;
        opt.textContent = momento;
        momentoSelect.appendChild(opt);
    });

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