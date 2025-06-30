const wel=document.createElement("h1");
wel.textContent="🎯 Challenge: Build a User Welcome Card Page (JS Only)";
document.body.appendChild(wel);

// div container
const headingWrapper = document.createElement("div");
document.body.appendChild(headingWrapper);

headingWrapper.style.display="flex"
headingWrapper.style.margin="2px auto"
headingWrapper.style.backgroundColor="green";
headingWrapper.style.alignItems="center"
headingWrapper.style.justifyContent="center"
headingWrapper.style.width="100%"
headingWrapper.style.height="6rem"
// headingWrapper.style.gap=""

// navbar
const logo=document.createElement("img");
headingWrapper.appendChild(logo);
logo.src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740";
logo.style.alt="logo";
logo.style.width="50px";
logo.style.height="50px";
logo.style.borderRadius = "50%";

const title=document.createElement("h2");
title.textContent
headingWrapper.appendChild(title);