let amigosIncluidos = [];
// Código com logica aleatória própria
// let numerosSorteados1 = [];
// let numerosSorteados2 = [];
//let i = 0;
let sorteioRealizado = false;

function adicionar()
{
    let nomeAmigo = document.getElementById("nome-amigo").value;
    nomeAmigo = nomeAmigo.toUpperCase();

    if (nomeAmigo == "") alert("Insira um nome.");
    else if(amigosIncluidos.includes(nomeAmigo)) alert("Participante já adicionado.");
    else
        {

            amigosIncluidos.push(nomeAmigo);

            document.getElementById("lista-amigos").innerText = amigosIncluidos;
            document.getElementById("nome-amigo").value = "";
        }
    
}

//Modificação somente para ter que fazer uma versão pelo git

function igual(str1, str2)
{
    if ( str1.toUpperCase() == str2.toUpperCase())
    {
        return true;
    }
    else
    {
        return false;
    }
}

function sortear()
{
    if(sorteioRealizado) alert ("Reinicie antes de fazer um novo sorteio.");
    else
    {
        let listaSorteio = document.getElementById("lista-sorteio");
        let sorteios = parseInt(amigosIncluidos.length);
        sorteios--;

        if(amigosIncluidos.length == 0) alert("Lista de amigos vazia, inclua pelo menos 3.");
        else if(amigosIncluidos.length < 3) alert("Número mínimo para sorteio: 3");
        else
        {

            embaralha(amigosIncluidos);

            for(let i = 0; i < amigosIncluidos.length; i++)
            {

                if(i == (amigosIncluidos.length) - 1)
                {
                    let tempListaSorteio = (`${amigosIncluidos[i]} -> ${amigosIncluidos[0]} <br>`);
                    listaSorteio.innerHTML = listaSorteio.innerHTML + tempListaSorteio;
                }
                else
                {
                    let tempListaSorteio = (`${amigosIncluidos[i]} -> ${amigosIncluidos[i+1]} <br>`);
                    listaSorteio.innerHTML = listaSorteio.innerHTML + tempListaSorteio;
                }

            }

            // Código com logica aleatória própria
            // while(i <= sorteios)
            // {
            //     let numeroSorteado1;
            //     let numeroSorteado2;
            //     numeroSorteado1 = Math.floor(Math.random() * (sorteios - 0 + 1)) + 0;
            //     numeroSorteado2 = Math.floor(Math.random() * (sorteios - 0 + 1)) + 0;

            //     if(numeroSorteado1 == numeroSorteado2)
            //     {
            //         sortear();
            //     }
            //     else if(numerosSorteados1.includes(numeroSorteado1) || numerosSorteados2.includes(numeroSorteado2))
            //     {
            //         sortear();
            //     }
            //     else
            //     {
            //         numerosSorteados1.push(numeroSorteado1);
            //         numerosSorteados2.push(numeroSorteado2);

            //         let tempListaSorteio = `${amigosIncluidos[numeroSorteado1]} -> ${amigosIncluidos[numeroSorteado2]} <br>`;

            //         console.log(tempListaSorteio);

            //         listaSorteio.innerHTML = listaSorteio.innerHTML + tempListaSorteio;

            //         i++;
            //     }
            
            // }
            sorteioRealizado = true;
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

function reiniciar()
{
    document.getElementById("lista-amigos").innerText = "";
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-sorteio").innerText = "";
    amigosIncluidos = [];
    numerosSorteados1 = [];
    numerosSorteados2 = [];
    i = 0;
    sorteioRealizado = false;
}