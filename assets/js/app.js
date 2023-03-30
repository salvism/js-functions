function Calculate() {
  let loanAmount = document.getElementById("amount").value;
  let loanTerm = document.getElementById("term").value;
  let interestRate = document.getElementById("rate").value;

  interestRate = interestRate / 100 + 1;
  let payment = (loanAmount / loanTerm) * interestRate;
  let totalAmount = loanAmount * interestRate;
  payment = payment.toFixed(2);
  totalAmount = totalAmount.toFixed(2);
  document.getElementById("monthly_payment").innerHTML = payment;
  document.getElementById("total_amount").innerHTML = totalAmount;
}
