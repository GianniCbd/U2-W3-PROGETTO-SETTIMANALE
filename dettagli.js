const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

window.onload = () => {
  if (!productId) {
    console.error("Product ID is missing in the URL");
    return;
  }

  const container = document.getElementById("details");

  fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWUzYjI1NGU4ODAwMTgzZjE4ODUiLCJpYXQiOjE2OTk2MDYwNzUsImV4cCI6MTcwMDgxNTY3NX0.ZrsWYLRX6766AQkDpebZPutiDasm5ZIeDo3FONiGrYA"
    }
  })
    .then((resp) => resp.json())
    .then((productObj) => {
      container.innerHTML = `
        <p>${productObj.name}</p>
        <p>${productObj.description}</p>
        <p>${productObj.price}€</p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
};
