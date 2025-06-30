const container=document.createElement("h1");
container.textContent="🎯 Challenge: Build a User Welcome Card Page (JS Only)";
document.body.appendChild(container);
container.style.textAlign = "center";
container.style.paddingBottom = "5rem";

// div container
const headingWrapper = document.createElement("div");
container.appendChild(headingWrapper);

headingWrapper.style.display="flex"
headingWrapper.style.margin="2px auto"
headingWrapper.style.backgroundColor="#ebe6e7";
headingWrapper.style.alignItems="center"
headingWrapper.style.justifyContent="center"
headingWrapper.style.width="100%"
headingWrapper.style.height="6rem"
headingWrapper.style.gap="1rem"

// navbar
const logo=document.createElement("img");
headingWrapper.appendChild(logo);
logo.src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740";
logo.style.alt="logo";
logo.style.width="50px";
logo.style.height="50px";
logo.style.borderRadius = "50%";

const title=document.createElement("h2");
title.textContent="Flying Bird";
headingWrapper.appendChild(title);

// input element
const input=document.createElement("input");
container.appendChild(input);
input.placeholder="Enter your name";
input.style.padding = "10px";
input.style.fontSize="1rem";
input.style.border = "1px solid #ccc";
input.style.outline="none"
input.style.width = "250px";
input.style.marginTop="2rem"

const label=document.createElement("label");
input.appendChild(label);
input.type = "text";
label.text="Enter your name";

// button element
const btn=document.createElement("button");
const br=document.createElement("br");
container.appendChild(br);
container.appendChild(btn);
btn.textContent="Show Welcome"
btn.style.marginTop="1.5rem"
btn.style.padding="1rem"
btn.style.fontSize="1rem"
btn.style.borderRadius="2rem"
btn.style.backgroundColor="#edd3db"
btn.style.border="none"

const br1=document.createElement("br");
container.appendChild(br1);

btn.addEventListener("mouseover", ()=>{
    btn.style.backgroundColor="#e8a7bc"
    btn.style.fontSize="1.5rem"
    btn.style.transition="1s ease-in"
    btn.style.cursor="pointer"
})

btn.addEventListener("mouseleave", ()=>{
    btn.style.backgroundColor="#edd3db"
    btn.style.fontSize="1rem"
})

const text=document.createElement("span");
container.appendChild(text);

text.textContent="Welcome, ";
text.style.backgroundColor="#f5d5e8";
text.style.padding="2rem";
text.style.fontSize="1.5rem";
text.style.display="none"

btn.addEventListener("onclick", ()=>{
    text.style.display="block"
    btn.style.display="none"
})