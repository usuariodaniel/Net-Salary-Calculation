let payment = parseFloat("10578");
let stateBenefit = parseFloat("744");

const taxes = taxesCalc(payment);

const exit = payment - taxes + stateBenefit;
console.log("Salário líquido de: " + exit.toFixed(2));

function taxesCalc(payment) {
  let aliquota;
  if (payment >= 0 && payment <= 1100) {
    aliquota = 0.05;
  } else if (payment >= 1100.01 && payment <= 2500.0) {
    aliquota = 0.1;
  } else {
    aliquota = 0.15;
  }
  return aliquota * payment;
}
