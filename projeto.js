// Calculadora de partidas Rankeadas


function nivelJogador(vitorias, derrotas) {
    const totalVitorias = vitorias - derrotas
   
    let nivel;
    if (vitorias < 10) {
        nivel = "ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
    }else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    }else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendario";

    } else {    
    nivel = "Imortal";
    }
    console.log("Heroi tem um saldo de " + totalVitorias + " e esta no nivel de " + nivel)
   }

   nivelJogador(50, 5)