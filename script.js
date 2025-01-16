
/*hghfhg















13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.

/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.
*/

function somar(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    let result = n1 + n2;
    alert("Resultado: " + result);
}

// 2. Verificação de Par ou Ímpar
// Descrição:
// Peça ao usuário um número e diga se ele é par ou ímpar.
// Tarefas:
// Crie uma função que receba um número.
// Verifique se o número é divisível por 2.
// Exiba no console "O número é par" ou "O número é ímpar".

function parimpar(){
    var n1 = parseInt(document.getElementById('n3').value);
    console.log(n1);
    
    if (n1 % 2 == 0){
        var result = "Par";
    }else{
        var result = "Ímpar";
    }
    alert("O número " + n1 + " é " + result);
    
}
// 3. Contagem de Números
// Descrição:
// Exiba os números de 1 a 10 usando um loop.
// Tarefas:
// Utilize um loop for para imprimir os números no console.
// Modifique o exercício para usar um while.
function lupe(){
    
    let result = [];
    
    for (let i = 1; i < 11; i++){
        result.push(i);
    }
    console.log(result);
    const divNum = document.getElementById('divNum');
    const paragrafo = document.createElement("p");
    paragrafo.innerText = "Contagem: " + result;
    divNum.appendChild(paragrafo);
}
document.getElementById("botao").addEventListener('click',function(){
    // event.preventDefault;
    lupe();
})

//funçao p/ apagar o output dos exercicios ( ondeLimpar -> ID da tag a ser limpada

const apagarTextoPorID = (ondeLimpar) => document.getElementById(ondeLimpar).innerText = "";

// function apagarTextoPorID(ondeLimpar)
//     document.getElementById(ondeLimpar).innerText = "";
// }

document.getElementById("btn-clean").addEventListener('click',function(){
    apagarTextoPorID("divNum");
})

// 4. Tabuada de um Número
// Descrição:
// Crie uma tabuada para um número informado pelo usuário.
// Tarefas:
// Peça ao usuário um número.
// Use um loop for para multiplicar o número de 1 a 10.
// Exiba o resultado no console.

function tabuada(n){
    
    let na = Number(n);
    let tabu = [];
    for (let i = 1; i < 11; i++){
        let resultado = i*na;
        let frase = `${i} x ${na} = ${resultado}`;
        tabu.push(frase);
    }
    return tabu;
}
//Escutador de evento para realizar o cálculo SE o número for digitado corretamente
document.getElementById('tabu-btn').addEventListener('click',function(){
    let numTabu = parseInt(document.getElementById('tabu-input').value);
    if (isNaN(numTabu)) {
        document.getElementById('tabuResult').innerText = "Por favor, insira um número válido.";
        return;
    }
    document.getElementById('tabuResult').innerText = tabuada(numTabu).join('\n');
})
document.getElementById('btn-clean1').addEventListener('click',function(){
    apagarTextoPorID("tabuResult");
    document.getElementById('tabu-input').value = '';
});

// 5. Encontrar o Maior Número em uma Lista
// Descrição:
// Dado um array de números, encontre o maior valor.
// Tarefas:
// Crie um array como [3, 7, 2, 9, 5].
// Use um loop para comparar os números e encontrar o maior.
// Exiba o maior número no console.

numLista = [];
//funcao que mostra o maior da lista de numeros que o usuario inserir
function mostrarMaior(){
    numSolo = document.getElementById('maior-input').value;
    numLista.push(numSolo);
    let numMaior = Math.max.apply(null,numLista);
    console.log(numMaior);
    fraseResult = `O maior número da lista é: ${numMaior}`;
    document.getElementById('div-lista').innerText = `${numLista}`;
    return fraseResult;
}
//funcao que verifica se o usuario nao inseriu um valor nulo
function verificacao(){
    if (document.getElementById('maior-input').value == ''){
        document.getElementById('maiorResult').innerText = "Digite um número válido. ";
    }else{
        return true;
    }
}
document.getElementById('btn-maior').addEventListener('click',function(){
    //condicao que impede a adicao de valores nulos à lista
    if(verificacao()){
        document.getElementById('maiorResult').innerText = mostrarMaior();
        document.getElementById('maior-input').value = '';
    }
})

// 6. Inverter uma Palavra
// Descrição:
// Peça ao usuário uma palavra e exiba-a invertida.
// Tarefas:
// Crie uma função que receba uma string.
// Converta a string para um array com o método split.
// Inverta a ordem com o método reverse e transforme novamente em string com join.
document.getElementById("btn-6").addEventListener('click',function(){
    inverterPalavra();
})

function inverterPalavra(){
    
    palavra = document.getElementById('input-6').value.split("").reverse().join("");
    
    
    
    const divWord = document.getElementById('result-6');
    const paragrafo = document.createElement("p");
    paragrafo.innerText = palavra;
    divWord.appendChild(paragrafo);

}
document.getElementById("clear-6").addEventListener('click',function(){
    apagarTextoPorID("result-6");
})

// 7. Soma de Elementos de um Array
// Descrição:
// Calcule a soma dos elementos de um array.
// Tarefas:
// Crie um array como [1, 2, 3, 4, 5].
// Use um loop ou o método reduce para somar os valores.
// Exiba o resultado no console.

arroz = [1, 2, 3, 4, 5];
soma = 0;
arroz.forEach(element => {
    soma += element;
    return soma;
});
console.log(soma)

// 8. Número Primo
// Descrição:
// Verifique se um número informado pelo usuário é primo.
// Tarefas:
// Crie uma função que receba um número.
// Verifique se ele é divisível apenas por 1 e por ele mesmo.
// Exiba "É primo" ou "Não é primo".

//Primo Ou Nao



function PON(numP) {
    
    if (numP <= 1) {
        console.log("Não é primo");
        return;
    }

    for (let i = 2; i <= (numP**(1/2)); i++) { 
        if (numP % i === 0) {
            console.log("Não é primo");
            return;
        }
    }

    console.log("É primo");
}


// 9. Fatorial de um Número
// Descrição:
// Calcule o fatorial de um número informado pelo usuário.
// Tarefas:
// Crie uma função que receba um número.
// Use um loop para multiplicar os números de 1 até o número informado.
// Exiba o resultado no console.
document.getElementById("btn-9").addEventListener('click', function() {
    fatorial();
});
function fatorial(num){
    num = document.getElementById("input-9").value;
    antecessor = num-1
    let fatorialNum = num
    while (antecessor > 0){

        fatorialNum *= antecessor;
        antecessor-=1;

    }
    
    document.getElementById("result-9").innerText = `${num}! = ${fatorialNum}`;
    
}


// 10. Verificar Palíndromo
// Descrição:
// Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
// Tarefas:
// Crie uma função que receba uma string.
// Inverta a string e compare com o original.
// Exiba no console se a palavra é ou não um palíndromo.
document.getElementById("btn-10").addEventListener('click', function() {
    isPalindrome();
});

function isPalindrome() {
    // Pega o valor do input e remove espaços extras
    const originalWord = document.getElementById("input-10").value.trim();
    
    
    const reversedWord = originalWord.split("").reverse().join("");
    
    
    if (originalWord === reversedWord) {
        document.getElementById("result-10").innerText = "É palíndromo";
    } else {
        document.getElementById("result-10").innerText = "Não é palíndromo";
    }
}

// 11. Contar Vogais em uma Frase
// Descrição:
// Dada uma frase, conte o número de vogais.
// Tarefas:
// Peça ao usuário uma frase.
// Use um loop para verificar cada caractere.
// Conte as vogais (a, e, i, o, u) e exiba o total.
document.getElementById("btn-11").addEventListener('click',function(){
    vogaisEx();
});
document.getElementById("clear-11").addEventListener('click',function(){
    apagarTextoPorID("result-11");
})
function vogaisEx(){
    
    let frase = document.getElementById("input-11").value.toLowerCase();
    let vogais = "a,e,i,o,u";
    let counter = 0;
    for(let letra of frase){
        if (vogais.includes(letra)){
            counter++;
        }
    }
    return document.getElementById("result-11").innerText = `A frase contém ${counter} vogais.`;
}
document.getElementById("btn-12").addEventListener('click',function(){
    gerarAleatorio();
});

function gerarAleatorio(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}