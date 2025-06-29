// created a container and added it to the body!
const container = document.createElement("div");
document.body.appendChild(container);

// styling container
container.style.textAlign="center";
container.style.backgroundColor="#f7edf7";
container.style.margin="2rem";

// Added a heading
const heading1=document.createElement("h1");
heading1.textContent="Manali";
const heading2= document.createElement("h2");
heading2.textContent="Town in Himachal Pradesh";
container.appendChild(heading1);
container.appendChild(heading2);

// styling heading
heading1.style.fontStyle="italic";
heading1.style.fontSize="3rem";
heading1.style.paddingBottom="-0.5rem";
heading1.style.backgroundColor="#ced0f5";
heading1.style.fontFamily = "Arial, sans-serif";

// added a image
// const image= document.createElement("img");
// container.appendChild(image);

// added a paragraph
const para = document.createElement("p");
para.textContent="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.";
container.appendChild(para);
