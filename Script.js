let nivel = 1;
let xp = 0;
let forca = 5;
let inteligencia = 5;
let vida = 100;

function atualizar() {
  document.getElementById("nivel").innerText = nivel;
  document.getElementById("xp").innerText = xp;
  document.getElementById("forca").innerText = forca;
  document.getElementById("int").innerText = inteligencia;
  document.getElementById("vida").innerText = vida;
}

function logar(texto) {
  const log = document.getElementById("log");
  log.innerHTML += `<p>[Sistema] ${texto}</p>`;
  log.scrollTop = log.scrollHeight;
}

function treinar() {
  xp += 20;
  logar("Você treinou. XP +20.");

  if (xp >= 100) {
    subirNivel();
  }
  atualizar();
}

function missao() {
  const sucesso = Math.random() > 0.3;

  if (sucesso) {
    xp += 40;
    forca += 1;
    logar("Missão concluída. XP +40. Força +1.");
  } else {
    vida -= 20;
    logar("Missão falhou. Vida -20.");
  }

  if (xp >= 100) {
    subirNivel();
  }

  atualizar();
}

function subirNivel() {
  nivel++;
  xp = 0;
  vida = 100;
  forca += 2;
  inteligencia += 1;
  logar(`LEVEL UP! Você alcançou o nível ${nivel}.`);
}
