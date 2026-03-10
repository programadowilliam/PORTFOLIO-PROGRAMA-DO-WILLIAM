function copiarEmail(){
  //seleciona o texto do email

  //o const serve para criar uma variável que não pode ser alterada, ou seja, o valor dela é constante

  //o document.getElemntById serve para "pegar" um elemento do html, ou seja, ele seleciona o elemento que tem o id "meuEmail"
  const emailtexto = document.getElementById("meuEmail").innerText;

     // Copia para a área de transferência
     //O navigadotor.clipboard.writeText serve para copiar o texto para a área de transferência, ou seja, ele copia o texto selecionado para que possa ser colado em outro lugar
     navigator.clipboard.writeText(emailtexto).then(() => {
        // Exibe uma mensagem de sucesso
        alert("EMAIL COPIADO COM SUCESSO!!");
     });
    }