let indice = 13;
let soma = 0;
let k = 0;
while(k<indice){
    k = k + 1
    soma = soma + k
    console.log(`${soma} quando k for igual a ${k} `)
}

// o Valor de soma sempre será o seu úlitmo valor mais o valor atual de k, rodando por 13 vezes, o último valor é 91
console.log(soma)