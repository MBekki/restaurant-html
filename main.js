const images = [
  {
    img: "./0.jpg",
  },
  {
    img: "./1.jpg",
  },
  {
    img: "./2.jpg",
  },
];

let imageGroup = document.getElementById("image-group");

let modal = document.getElementById("modal");

let index = 0;
function Close() {
  modal.style = "display:none";
}

function Open() {
  modal.style = "display:flex";
  let img = document.getElementById("modal_img");
  img.src = `./${index}.jpg`;
}

function Next() {
  let img = document.getElementById("modal_img");
  index = index + 1;
  if (index <= images.length - 1) {
    img.src = `./${index}.jpg`;
  } else {
    index = 0;
    img.src = `./${index}.jpg`;
  }
}

function Prev() {
  let img = document.getElementById("modal_img");
  index = index - 1;
  if (index >= 0) {
    img.src = `./${index}.jpg`;
  } else {
    index = images.length - 1;
    img.src = `./${index}.jpg`;
  }
}
for (let i = 0; i < images.length; i++) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = images[i].img;
  img.id = `img${i}`;
  img.style = "width:100%;height:500px;object-fit:cover;object-position:center";
  img.onclick = () => {
    index = i;
    Open();
  };
  div.appendChild(img);
  imageGroup.appendChild(div);
}
