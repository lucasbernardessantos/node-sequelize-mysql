class Trabalhador {
  constructor(
    private id: number,
    private nome: string,
    private email: string
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
}

export { Trabalhador }