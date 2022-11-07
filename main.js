function createGame(player1, hour, player2) {
  return ` <!-- acentos graves fazem quebra de linha -->
   <li> <!--itens da lista--> 
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation=delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul> <!--lista nao ordenada-->
       ${games}
      </ul>
    </div>
   <!--  <div class="card2"></div> extra meu-->
  `
}

document.querySelector("#app").innerHTML = `
  <header> <!--cabeçalho-->
        <img src="./assets/logo.svg" alt="Logo da NLW" />
  </header>
  <main id="cards">
    ${createCard(
      "24/11",
      "quinta",
      createGame("brazil", "16:00", "serbia")
    )} <!-- chamado de interpolação, troca o $ pela função do javascript que eu colocar ali dentro-->

    ${createCard(
      "28/11",
      "segunda",
      createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")
    )}

  
    ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
    <!-- string sem quebra de linha uso aspas sinmples ' ' -->
  </main>
`
