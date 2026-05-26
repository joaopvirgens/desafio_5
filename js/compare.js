// Array global que armazena os carros selecionados para comparação
let carArr = [];

// Classe que representa um carro
class Car {
  // O constructor é executado sempre que um novo objeto Car é criado
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image,
  ) {
    // Atribui os valores recebidos às propriedades do objeto
    this.nome = nome; // Nome do carro
    this.preco = preco; // Preço do carro
    this.alturaCacamba = alturaCacamba; // Altura da caçamba
    this.alturaVeiculo = alturaVeiculo; // Altura total do veículo
    this.alturaSolo = alturaSolo; // Altura do solo
    this.capacidadeCarga = capacidadeCarga; // Capacidade de carga
    this.motor = motor; // Tipo de motor
    this.potencia = potencia; // Potência do motor
    this.volumeCacamba = volumeCacamba; // Volume da caçamba
    this.roda = roda; // Tipo/tamanho da roda
    this.image = image; // Caminho da imagem do carro
  }
}

// Função que verifica se um carro já está no array
function GetCarArrPosition(arr, carClass) {
  // Percorre todo o array
  for (let i = 0; i < arr.length; i++) {
    // Compara o nome do carro atual com o nome do carro recebido
    if (arr[i].nome === carClass.nome)
      // Se encontrar, retorna a posição (índice)
      return i;
  }

  // Se não encontrar, retorna -1 (padrão de "não encontrado")
  return -1;
}

// Função responsável por adicionar ou remover carros da comparação
function SetCarToCompare(el, carClass) {
  // Verifica se o carro já está no array e guarda a posição
  let pos = GetCarArrPosition(carArr, carClass);

  // Se o checkbox foi MARCADO
  if (el.checked) {
    // Limita a comparação a no máximo 2 carros
    if (carArr.length >= 2) {
      alert("Só pode comparar até 02 carros"); // Mostra alerta
      el.checked = false; // Desmarca o checkbox automaticamente
      return; // Encerra a função
    }

    // Se o carro ainda NÃO está no array
    if (pos === -1) {
      carArr.push(carClass); // Adiciona o carro ao array
    }
  } else {
    // Se o checkbox foi DESMARCADO

    // Verifica se o carro existe no array
    if (pos !== -1) {
      carArr.splice(pos, 1); // Remove o carro da posição encontrada
    }
  }
}

// Função que exibe a tabela de comparação
function ShowCompare() {
  // Verifica se existem pelo menos 2 carros selecionados
  if (carArr.length < 2) {
    alert("Só pode marcar 02 carros para comparar"); // Alerta
    return; // Encerra a função
  }

  // Atualiza os dados da tabela com os carros selecionados
  UpdateCompareTable();

  // Torna a área de comparação visível (display block)
  document.getElementById("compare").style.display = "block";
}

// Função que esconde a tabela de comparação
function HideCompare() {
  // Define o display como none (esconde o elemento)
  document.getElementById("compare").style.display = "none";
}

// Função que preenche a tabela com os dados dos carros
function UpdateCompareTable() {
  // Loop para os dois carros selecionados (posição 0 e 1)
  for (let i = 0; i < 2; i++) {
    // Pega o carro atual do array
    let car = carArr[i];

    // Insere a imagem do carro na tabela usando HTML
    document.getElementById(`compare_image_${i}`).innerHTML =
      `<img src="${car.image}" width="150">`;

    // Preenche cada campo da tabela com os dados do carro
    document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
    document.getElementById(`compare_alturacacamba_${i}`).innerText =
      car.alturaCacamba;
    document.getElementById(`compare_alturaveiculo_${i}`).innerText =
      car.alturaVeiculo;
    document.getElementById(`compare_alturasolo_${i}`).innerText =
      car.alturaSolo;
    document.getElementById(`compare_capacidadecarga_${i}`).innerText =
      car.capacidadeCarga;
    document.getElementById(`compare_motor_${i}`).innerText = car.motor;
    document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
    document.getElementById(`compare_volumecacamba_${i}`).innerText =
      car.volumeCacamba;
    document.getElementById(`compare_roda_${i}`).innerText = car.roda;

    // Formata o preço adicionando "R$"
    document.getElementById(`compare_preco_${i}`).innerText = "R$ " + car.preco;
  }
}
