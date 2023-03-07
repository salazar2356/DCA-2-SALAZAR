const appendList = (parent) => (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  parent.appendChild(li);
};

export const renderCharacter = ({
  name,
  thumbnail,
  description,
  comics,
  series,
}) => {
  const figure = document.createElement("figure"); //el contenedor jefe = importar el contenedor
  figure.classList.add("personajes-card");

  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const h3Comics = document.createElement("h3Comics");
  const UlComics = document.createElement("UlComics");
  const h3Series = document.createElement("h3Series");
  const ulSeries = document.createElement("ulSeries");

  img.src = thumbnail;
  h2.textContent = name;
  p.textContent = description;
  h3Comics.textContent = "Cómics";
  h3Series.textContent = "series";

  comics.foreach(appendListItem(UlComics));
  series.foreach(appendListItem(ulSeries));

  figure.appendChild(img);
  figure.appendChild(h2);
  figure.appendChild(p);
  figure.appendChild(h3Comics);
  figure.appendChild(UlComics);
  figure.appendChild(h3Series);
  figure.appendChild(UlComics);

  return figure;
};
