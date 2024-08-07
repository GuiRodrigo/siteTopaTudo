const {
  validateSenha,
  validateAge,
  onSubmit,
  confirSenha,
} = require("./tests");

it("Testa se a senha está na regra", () => {
  expect(validateSenha("Pri1", "Pri1")).toBe(true);
});
it("Testa se a senha não tem um numero", () => {
  expect(validateSenha("Pri")).toBe(false);
});
it("Testa se a senha não tem uma letra maiuscula", () => {
  expect(validateSenha("pri1")).toBe(false);
});
it("Testa se a senha não tem uma letra minuscula", () => {
  expect(validateSenha("PRI1")).toBe(false);
});

it("Testa se as senhas coicidem", () => {
  expect(confirSenha("Pri1", "Pri1")).toBe(true);
});
it("Testa se as senhas não coicidem", () => {
  expect(confirSenha("pri2", "pri1")).toBe(false);
});

it("Testa se reconhece que a pessoa é de menor", () => {
  expect(validateAge("Dec 25, 2010")).toBe(false);
});
it("Testa se reconhece que a pessoa é de maior", () => {
  expect(validateAge("Dec 25, 2002")).toBe(true);
});

it("Verifica se ambas funções estão certas", () => {
  expect(onSubmit("Pri1", "Pri1", "Dec 25, 2005")).toBe(true);
});
it("Verifica se ambas funções estão erradas", () => {
  expect(onSubmit("Pri1", "Pri1", "Dec 25, 2015")).toBe(false);
});
