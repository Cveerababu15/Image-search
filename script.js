const input = document.getElementById("inputfiled");
const search = document.getElementById("search");
const imagesContainer = document.getElementById("images");

search.addEventListener("click", () => {
  const newtext = input.value.trim();
  if (!newtext) return;

  const API_Key = "FkMTiowVmyNHbiidE-yjdzaVRonE2wGIJwJbD7zmOC0";
  const url = `https://api.unsplash.com/search/photos?query=${newtext}&client_id=${API_Key}&per_page=12`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      imagesContainer.innerHTML = "";
      data.results.forEach(photo => {
        imagesContainer.innerHTML += `
          <div class="gallery">
            <img src="${photo.urls.small}" alt="${photo.alt_description || "Image"}">
            <p>${photo.description || photo.alt_description || "No description available"}</p>
            <small>📸 By ${photo.user.name}</small>
          </div>
        `;
      });
    })
    .catch(err => console.error("Error fetching images:", err));
    input.value=""
});
