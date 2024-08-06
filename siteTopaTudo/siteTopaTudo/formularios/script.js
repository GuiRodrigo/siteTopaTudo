document.addEventListener("DOMContentLoaded", function () {
  const estadoSelect = document.getElementById("estado");
  const cidadeSelect = document.getElementById("cidade");
  const cadastroForm = document.getElementById("cadastroForm");
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmarSenha");
  const senhaErro = document.getElementById("senhaErro");
  const senhaFormatoErro = document.getElementById("senhaFormatoErro");
  const dataNascimento = document.getElementById("dataNascimento");
  const idadeErro = document.getElementById("idadeErro");
  const cpf = document.getElementById("cpf");
  const cpfErro = document.getElementById("cpfErro");
  const email = document.getElementById("email");
  const emailErro = document.getElementById("emailErro");
  const successMessage = document.getElementById("successMessage");
  const cancelarCadastro = document.getElementById("cancelarCadastro");

  var booleanRule = false
  var booleanValidate = false

  const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Santos"],
    RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
    MG: ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
    ES: ["Vitória", "Vila Velha", "Serra"],
  };

  estadoSelect.addEventListener("change", function () {
    const estado = estadoSelect.value;
    cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';

    if (estado) {
      cidadesPorEstado[estado].forEach(function (cidade) {
        const option = document.createElement("option");
        option.value = cidade;
        option.textContent = cidade;
        cidadeSelect.appendChild(option);
      });
    }
  });

  senha.addEventListener("input", validateSenha);
  confirmarSenha.addEventListener("input", validateSenha);
  email.addEventListener("input", validateEmail);

  function validateSenha(senha,confirmarSenha) {
    const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!senhaRegex.test(senha.value)) {
      // senhaFormatoErro.classList.add("visible");
      // senhaFormatoErro.textContent =
      //   "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
      booleanRule = false
    } else {
      // senhaFormatoErro.classList.remove("visible");
      booleanRule = false
    }

    if (senha.value !== confirmarSenha.value) {
      // senhaErro.classList.add("visible");
      // senhaErro.textContent = "As senhas não coincidem.";
      booleanValidate = false
    } else {
      // senhaErro.classList.remove("visible");
      booleanValidate = true
    }

    if(booleanValidate && booleanRule ){
      return true
    }else{
      return false
    }
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailErro.classList.add("visible");
      emailErro.textContent = "Formato de email inválido.";
    } else {
      emailErro.classList.remove("visible");
    }
  }

  cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    let isValid = true;

    // Verificação de senha
    const senhaRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!senhaRegex.test(senha.value)) {
      isValid = false;
      senhaFormatoErro.classList.add("visible");
    } else {
      senhaFormatoErro.classList.remove("visible");
    }

    if (senha.value !== confirmarSenha.value) {
      isValid = false;
      senhaErro.classList.add("visible");
    } else {
      senhaErro.classList.remove("visible");
    }

    // Verificação de idade
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento.value);
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
      }
      
      if (idade < 18) {
        isValid = false;
        idadeErro.classList.add("visible");
      } else {
        idadeErro.classList.remove("visible");
      }

    // Verificação de CPF
    if (!validarCPF(cpf.value)) {
      isValid = false;
      cpfErro.classList.add("visible");
    } else {
      cpfErro.classList.remove("visible");
    }

    // Verificação de Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      isValid = false;
      emailErro.classList.add("visible");
    } else {
      emailErro.classList.remove("visible");
    }

    if (isValid) {
      successMessage.classList.add("visible");
    } else {
      successMessage.classList.remove("visible");
    }
  });

  cancelarCadastro.addEventListener("click", function () {
    window.location.href = "../index.html";
  });

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }
});

let isInverted = false;

// Adiciona o evento ao botão de inversão de cores
function toggleInvertColors() {
  const body = document.body;
  isInverted = !isInverted; // Alterna o estado da inversão de cores

  if (isInverted) {
    body.style.filter = "invert(1)"; // Aplica o filtro de inversão de cores
  } else {
    body.style.filter = "invert(0)"; // Remove o filtro de inversão de cores
  }
}

// Adiciona o listener de evento ao botão de inversão de cores
document
  .getElementById("invert-colors")
  .addEventListener("click", toggleInvertColors);

//text area function
const textarea = document.getElementById("textarea");
const charCount = document.getElementById("char-count");
const maxLength = 150;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength}/${maxLength} caracteres`;
});

// aumenta ou diminui o tamanho da font
document.addEventListener("DOMContentLoaded", function () {
  let currentFontSize = parseInt(window.localStorage.getItem("fontSize")) || 16;

  document.body.style.fontSize = currentFontSize + "px";

  document
    .querySelector("#increase-font")
    .addEventListener("click", function () {
      if (currentFontSize < 100) {
        // Verifica se o tamanho não ultrapassa 100px
        currentFontSize += 2; // Aumenta o tamanho da fonte
        document.body.style.fontSize = currentFontSize + "px";
        window.localStorage.setItem("fontSize", currentFontSize);
      }
    });

  document
    .querySelector("#decrease-font")
    .addEventListener("click", function () {
      if (currentFontSize > 10) {
        // Verifica se o tamanho não é menor que 10px
        currentFontSize -= 2; // Diminui o tamanho da fonte
        document.body.style.fontSize = currentFontSize + "px";
        window.localStorage.setItem("fontSize", currentFontSize);
      }
    });
});

