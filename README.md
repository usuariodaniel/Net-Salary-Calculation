## Net Salary Calculation

This project is a simple tax-based net salary calculation in Brazil. It considers gross salary, taxes and state benefits.

# How to use

Set gross salary and state benefit.
The taxCalc(payment) function calculates the tax rate based on gross salary.
Net pay is calculated by subtracting taxes from gross pay and adding the state benefit.

# How it works

```javascript
let payment = parseFloat("10578");
let stateBenefit = parseFloat("744");
```

In these two lines, we are defining two variables: payment and stateBenefit. payment is the gross salary, and stateBenefit is the state benefit. Both variables are initialized with string values that represent numbers. The parseFloat() function is used to convert these strings to floating point numbers

```javascript
const taxes = taxesCalc(payment);
```

Here, we are calling the taxesCalc(payment) function, which calculates the tax rate based on gross salary. The tax rate is a percentage of the salary that is deducted as taxes. The function returns the amount of taxes calculated based on the tax rate and gross salary.

```javascript
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
```

The taxesCalc(payment) function uses an if-else control structure to determine the tax rate based on gross salary. If the gross salary is between 0 and R$1.100,00 the rate is 5%. If it is between R$1.100,01 and R$2.500,00 the rate is 10%. For any value above R$2.500,00 the rate is 15%.

```javascript
const exit = payment - taxes + stateBenefit;
```

In this line, we are calculating the net salary by subtracting taxes from the gross salary and adding the state benefit. The result is stored in the exit variable.

```javascript
console.log("Salário líquido de: " + exit.toFixed(2));
```

Finally, in this line, we are printing the net salary in the console. The toFixed(2) method is used to format the number with two decimal places.

In summary, this code calculates a person's net salary, taking into account gross salary, taxes and state benefit

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge
