const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const title = document.querySelector(".meme-generator .meme-title");
const author = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, memeTitle, memeAuthor) => {
  memeImage.setAttribute("src", url);

  title.innerHTML = memeTitle;
      author.innerHTML = memeAuthor;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
      
    });
};

generateMemeBtn.addEventListener("click", generateMeme);



    
  
  
  