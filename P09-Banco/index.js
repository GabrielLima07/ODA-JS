class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
        // Atributos(propiedades)
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipoConta;
        this.agencia = agencia;
    };

    // Métodos
    buscarSaldo = () => {
        return this.saldo;
    };

    depositar = (valor) => {
        this.saldo += valor;
    };

    sacar = (valor) => {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Transação não autorizada. Valor de saque maior que o saldo.")
        };
    };

    numeroConta = () => {
        return this.conta;
    };
};

// Instanciação do objeto
let novaConta = new Banco("3187", 654.2, "Conta Corrente", "0001");

// Testando os métodos
console.log("Saldo atual:", novaConta.buscarSaldo());  // buscarSaldo()

novaConta.depositar(150);                               // depositar()
console.log("Saldo atual:", novaConta.buscarSaldo());  

novaConta.sacar(70);                                    // sacar()
console.log("Saldo atual:", novaConta.buscarSaldo());
novaConta.sacar(2000);                                  // Tentando sacar valor maior que saldo

console.log("Número da conta:", novaConta.numeroConta());                   // numeroConta()