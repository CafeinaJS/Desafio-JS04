const frm = document.querySelector("form");
const outCarro = document.querySelector("#outCarro");
const outEntrada = document.querySelector("#outEntrada");
const outParcelas = document.querySelector("#outParcelas");

frm.addEventListener("submit", (e) => {
    const carro = frm.inCarro.value;
    const preco = Number(frm.inPreco.value);
    const entrada = Number(frm.inEntrada.value);
    const numParcelas = Number(frm.inParcelas.value);

    const valorEntrada = preco * (entrada / 100);
    const valorParcelas = (preco - valorEntrada) / numParcelas;

    outCarro.innerText = `Promoção ${ carro } sem juros!`;
    outEntrada.innerText = `Entrada de R$ ${ valorEntrada.toFixed(2) }`;
    outParcelas.innerText = `saldo em ${ numParcelas }x de ${ valorParcelas.toFixed(2)}`;

    e.preventDefault();
});