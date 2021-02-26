const partyHeader = document.getElementById("party");

export const htmlGenerator = (string, htmlElement, tag) => {
  const p = document.createElement(tag);
  p.append(string);
  if (Array.from(htmlElement.children).length) {
    htmlElement.replaceChildren(p);
  } else {
    htmlElement.append(p);
  }
};

htmlGenerator("Party Time.", partyHeader, "p");
