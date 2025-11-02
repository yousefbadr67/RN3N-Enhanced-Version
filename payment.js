const paymentForm = document.getElementById("paymentForm");

function showForm(type) {
  let html = "";
  if (type === "card") {
    html = `
      <h3>Pay with Card</h3>
      <input type="text" placeholder="Card Number" required><br>
      <input type="text" placeholder="MM/YY" required><br>
      <input type="text" placeholder="CVV" required><br>
      <button class="btn-pay">Confirm Payment</button>
    `;
  } else if (type === "vodafone") {
    html = `
      <h3>Pay with Vodafone Cash</h3>
      <input type="text" placeholder="Enter Vodafone Number" required><br>
      <button class="btn-pay">Send Payment Request</button>
    `;
  } else if (type === "fawry") {
    html = `
      <h3>Pay with Fawry</h3>
      <p>A payment code will be generated for you.</p>
      <button class="btn-pay">Generate Fawry Code</button>
    `;
  }

  paymentForm.innerHTML = html;
  paymentForm.style.display = "block";
}

document.getElementById("card").onclick = () => showForm("card");
document.getElementById("vodafone").onclick = () => showForm("vodafone");
document.getElementById("fawry").onclick = () => showForm("fawry");