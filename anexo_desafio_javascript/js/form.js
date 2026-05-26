
class contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome        = nome;
        this.email       = email;
        this.telefone    = telefone;
        this.tipoContato = tipoContato;
        this.mensagem    = mensagem;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value);

    console.log(data);

  Enviar(data);

    form.reset();

}

function Enviar(data) {

    if (data.nome != "") {
        alert('Obrigado ' + data.nome + ', os seus dados foram enviados com sucesso!');
    }

}