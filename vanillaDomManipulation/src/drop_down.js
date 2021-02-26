const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function handleEnter() {
    document.querySelectorAll(".dog-link").forEach((link) => {
      link.classList.remove("hidden");
    });
}

function handleLeave() {
  document.querySelectorAll(".dog-link").forEach((link) => {
    link.classList.add("hidden");
  });
}

function dogLinkCreator () {
  const objArray = Object.keys(dogs);
  const dogArray = []
  objArray.forEach((dog) => {
    const a = document.createElement("a");
    // debugger
    a.innerHTML = dog;
    a.href = dogs[dog];
    const li = document.createElement("li");
    li.classList.add('dog-link');
    li.classList.add('hidden');
    li.append(a);
    dogArray.push(li);
  })
  return dogArray;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  dogLinks.forEach((link) => {
    document.querySelector(".drop-down-dog-list").append(link);
  });
}


attachDogLinks();
document.querySelector(".drop-down-dog-nav").addEventListener("mouseenter", handleEnter);
document.querySelector(".drop-down-dog-nav").addEventListener("mouseleave", handleLeave);




