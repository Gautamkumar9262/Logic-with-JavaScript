// document.write("Hello");
// h=document.createElement("h2");
const h=document.getElementById("heading1");
const text=h.getAttribute("id");
document.write(text);
document.write(h);
document.write("<br>",h.innerHTML);
document.write("</br>",h.innerText);
document.write("</br>",h.innerContent);

h.innerHTML="My Custom Heading";
h.style.color="purple";
h.style.textDecoration="underline";
h.style.textAlign="center";
h.style.backgroundColor="yellow";

h.setAttribute("class","headings");
document.write(h.getAttribute("class"));

const paras=document.getElementsByTagName("p");
document.write("<br> Total paragraphs: "+paras.length);
paras[1].style.color="red";

const d1=document.getElementsByClassName(".container");
document.write("<br>",+d1.length);

d1.style.backgroundColor="blue";