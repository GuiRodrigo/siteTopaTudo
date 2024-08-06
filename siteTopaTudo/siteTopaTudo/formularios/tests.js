
var booleanRule = false
var booleanValidate = false


function validateSenha(senha, confirmarSenha) {
    const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!senhaRegex.test(senha)) {
        // senhaFormatoErro.classList.add("visible");
        // senhaFormatoErro.textContent =
        //   "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
        booleanRule = false
    } else {
        // senhaFormatoErro.classList.remove("visible");
        booleanRule = true
    }

    if (senha !== confirmarSenha) {
        // senhaErro.classList.add("visible");
        // senhaErro.textContent = "As senhas não coincidem.";
        booleanValidate = false
    } else {
        // senhaErro.classList.remove("visible");
        booleanValidate = true
    }

    if (booleanValidate == true && booleanRule == true) {
        return true
    } else {
        return false
    }
}

// validar idade

function validateAge(dataNasci) {

    const hoje = new Date();
    const dataNasc = new Date(dataNasci);
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade-1;
    }

    if (idade < 18) {
        // isValid = false;
        return false
        // idadeErro.classList.add("visible");
    } else {
        return true
        // idadeErro.classList.remove("visible");
    }
}

function onSubmit(senha, senhaConfir, dataNasc) {
    const senhas = validateSenha(senha, senhaConfir);
    const idade = validateAge(dataNasc)
    if (senhas == true && idade == true) {
        return true
    } else {
        return false
    }
}


module.exports = { validateSenha, validateAge, onSubmit }