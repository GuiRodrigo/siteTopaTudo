var booleanRule = false;
var booleanValidate = false;

function validateSenha(senha) {
  const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/;
  if (!senhaRegex.test(senha)) {
    // senhaFormatoErro.classList.add("visible");
    // senhaFormatoErro.textContent =
    //   "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
    return false;
  } else {
    // senhaFormatoErro.classList.remove("visible");
    return true;
  }
}

function confirSenha(senha, confirmarSenha) {
  if (senha !== confirmarSenha) {
    // senhaErro.classList.add("visible");
    // senhaErro.textContent = "As senhas não coincidem.";
    return false;
  } else {
    // senhaErro.classList.remove("visible");
    return true;
  }
}

// validar idade

function validateAge(dataNasci) {
  const hoje = new Date();
  const dataNasc = new Date(dataNasci);
  const idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mes = hoje.getMonth() - dataNasc.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade - 1;
  }

  if (idade < 18) {
    // isValid = false;
    return false;
    // idadeErro.classList.add("visible");
  } else {
    return true;
    // idadeErro.classList.remove("visible");
  }
}

function onSubmit(senha, senhaConfir, dataNasc) {
  const senhas = validateSenha(senha, senhaConfir);
  const confirSenha = validateSenha(senha, senhaConfir);
  const idade = validateAge(dataNasc);
  if (senhas == true && idade == true && confirSenha == true) {
    return true;
  } else {
    return false;
  }
}

module.exports = { validateSenha, validateAge, onSubmit, confirSenha };
