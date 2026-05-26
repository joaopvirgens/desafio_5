// Classe chamada "contato"
class contato {
  constructor(nome, sobrenome, email, cpf, telefone, tipo) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.tipo = tipo;
  }
}

// Função chamada quando o formulário é enviado
function Post(form) {
  const tipoContato = form.contato.value;

  // Se não selecionar nada
  if (tipoContato === "") {
    alert("Por favor selecione a opção desejada");
    return false;
  }

  // Cria objeto com os dados
  let data = new contato(
    form.nome.value,
    form.sobrenome.value,
    form.email.value,
    form.cpf.value,
    form.telefone.value,
    tipoContato
  );

  // Salva no console
  console.log(data);

  // Mensagem de sucesso
  alert("Dados enviados com sucesso!");

  return false;
}