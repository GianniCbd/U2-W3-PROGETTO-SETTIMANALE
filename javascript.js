window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
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
      const cardContainer = document.querySelector(".col");

      products.forEach((elem) => {
        const card = document.createElement("div");
        card.className = "card mb-4 d-flex justify-content-center align-items-center text-bg-dark";

        const img = document.createElement("img");
        img.src = elem.imageUrl;
        img.className = "card-img-top w-50";
        card.appendChild(img);
        console.log(elem.imageUrl);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title text-danger";
        cardTitle.textContent = elem.name;
        cardBody.appendChild(cardTitle);

        const cardDescription = document.createElement("p");
        cardDescription.className = "card-text";
        cardDescription.textContent = elem.description;
        cardBody.appendChild(cardDescription);

        const cardPrice = document.createElement("p");
        cardPrice.className = "card-text badge text-bg-secondary d-flex justify-content-center";
        cardPrice.textContent = `${elem.price}€`;
        cardBody.appendChild(cardPrice);

        const cardLink = document.createElement("a");
        cardLink.href = `./dettagli.html?id=${elem._id}`;
        cardLink.className = "btn btn-primary ";
        cardLink.textContent = "Scopri di più";
        cardBody.appendChild(cardLink);

        card.appendChild(cardBody);

        cardContainer.appendChild(card);
      });
    })
    .catch((err) => console.log(err));
};
