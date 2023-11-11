// const URL = "https://striveschool-api.herokuapp.com/api/product";

const HandleSubmit = async (event) => {
  event.preventDefault();

  const newProduct = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    brand: document.getElementById("brand").value
  };

  const payload = {
    name: productName,
    price: productPrice,
    brand: productBrand
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product${productId}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWUzYjI1NGU4ODAwMTgzZjE4ODUiLCJpYXQiOjE2OTk2MDYwNzUsImV4cCI6MTcwMDgxNTY3NX0.ZrsWYLRX6766AQkDpebZPutiDasm5ZIeDo3FONiGrYA"
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => console.log("Product created:", data))
    .catch((error) => console.error("Error creating product:", error));
};

function updateProduct() {
  const productId = prompt("Enter the Product ID to update:");
  if (!productId) return;

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productBrand = document.getElementById("productBrand").value;

  const payload = {
    name: productName,
    price: productPrice,
    brand: productBrand
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWUzYjI1NGU4ODAwMTgzZjE4ODUiLCJpYXQiOjE2OTk2MDYwNzUsImV4cCI6MTcwMDgxNTY3NX0.ZrsWYLRX6766AQkDpebZPutiDasm5ZIeDo3FONiGrYA"
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => console.log("Product updated:", data))
    .catch((error) => console.error("Error updating product:", error));
}

function deleteProduct() {
  const productId = prompt("Enter the Product ID to delete:");
  if (!productId) return;

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWUzYjI1NGU4ODAwMTgzZjE4ODUiLCJpYXQiOjE2OTk2MDYwNzUsImV4cCI6MTcwMDgxNTY3NX0.ZrsWYLRX6766AQkDpebZPutiDasm5ZIeDo3FONiGrYA"
    }
  })
    .then((response) => response.json())
    .then((data) => console.log("Product deleted:", data))
    .catch((error) => console.error("Error deleting product:", error));
}

function resetForm() {
  document.getElementById("productForm").reset();
}
