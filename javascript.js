window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWUzYjI1NGU4ODAwMTgzZjE4ODUiLCJpYXQiOjE2OTk2MDYwNzUsImV4cCI6MTcwMDgxNTY3NX0.ZrsWYLRX6766AQkDpebZPutiDasm5ZIeDo3FONiGrYA"
    }
  })
    .then((resp) => {
      if (resp.ok) return resp.json();
      throw new Error("Errore nella richiesta del server");
    })
    .then((products) => {
      const list = document.querySelector(".list-product");
      products.forEach((elem) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex flex-column mt-4 fs-4";

        const img = document.createElement("img");
        img.src = elem.imageUrl;
        li.appendChild(img);

        li.innerHTML += `<span class="me-auto text-danger fs-1">${elem.name}</span> <span class="me-4">${elem.description}</span> <span>${elem.price}€</span> <a href="./dettagli.html?prod=${elem._id}">Scopri di più</a> `;
        list.appendChild(li);
      });
    })
    .catch((err) => console.error(err));
};
