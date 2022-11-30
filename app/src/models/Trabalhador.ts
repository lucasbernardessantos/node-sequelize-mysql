class Trabalhador {
  constructor(
    private id: number,
    private nome: string,
    private email: string,
    private sexo: string,
    private salario: number
  ) {}

  get ID(): number {
    return this.id
  }

  get Nome(): string {
    return this.nome
  }
  set Nome(nome: string) {
    this.nome = nome
  }

  get Email(): string {
    return this.email
  }
  set Email(email: string) {
    this.email = email
  }

  get Sexo(): string {
    return this.sexo
  }
  set Sexo(sexo: string) {
    this.sexo = sexo
  }

  get Salario(): number {
    return this.salario
  }
  set Salario(salario: number) {
    this.salario = salario
  }
}

export { Trabalhador }