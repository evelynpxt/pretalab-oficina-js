Desafio medalhas


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ranking = {};

function calcularTotalMedalhas(ouro, prata, bronze) {
    return ouro + prata + bronze;
}

function exibirRanking(ranking) {
    console.log("\n# Ranking de Medalhas:");
    const paisesOrdenados = Object.keys(ranking).sort((a, b) => ranking[b] - ranking[a]);

    paisesOrdenados.forEach(pais => {
        console.log(`#${pais}: ${ranking[pais]} medalhas`);
    });
}

function solicitarDados() {
    rl.question("Digite o nome do país (ou 'sair' para encerrar): ", (pais) => {
        if (pais.toLowerCase() === 'sair') {
            exibirRanking(ranking);
            rl.close();
            return;
        }

        rl.question(`Digite o número de medalhas de ouro para ${pais}: `, (ouro) => {
            rl.question(`Digite o número de medalhas de prata para ${pais}: `, (prata) => {
                rl.question(`Digite o número de medalhas de bronze para ${pais}: `, (bronze) => {
                    const totalMedalhas = calcularTotalMedalhas(
                        parseInt(ouro),
                        parseInt(prata),
                        parseInt(bronze)
                    );

                    ranking[pais] = totalMedalhas;
                    console.log(`Total de medalhas para ${pais}: ${totalMedalhas} medalhas\n`);
                    
                    solicitarDados(); // Volta para pedir o próximo país
                });
            });
        });
    });
}

solicitarDados();

  