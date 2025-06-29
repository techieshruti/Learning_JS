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

//added a image
const image= document.createElement("img");
image.src="https://media.istockphoto.com/id/1496660180/photo/the-sissu-valley.jpg?s=612x612&w=0&k=20&c=eYg4cuYIQTZUuNa6x19ZBQI-xm-tV-t8h6MecSlYQRE=";
container.appendChild(image);

image.style.width="auto";
image.style.boxShadow="10px 10px 10px rgb(177, 188, 229)";
image.style.width = "90%";
image.style.maxWidth = "600px";
image.style.margin = "10px auto";
image.style.borderRadius = "16px";
image.style.transition = "box-shadow 0.8s ease-in-out"; 

image.addEventListener("mouseover", ()=>{
    image.style.boxShadow="10px 10px 10px rgb(121, 122, 123)"
    image.style.cursor="pointer";
})

image.addEventListener("mouseleave", ()=>{
    image.style.boxShadow="10px 10px 10px rgb(177, 188, 229)";
})

// added a paragraph
const para = document.createElement("p");
para.textContent="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.";
container.appendChild(para);

const secondPara = document.createElement("p");
secondPara.textContent="One of the must-visit places in Manali is the Hadimba Devi Temple, dedicated to Hadimba, the wife of Bhima, a hero of the Pandava clan in the epic Mahabharata. A unique fact of the temple is that it was built to honour a demoness. The temple's Pagoda-style architecture, with its four-tiered structure made of wood and stones, a metal roof, and a 24-metre-high Shikhara is a captivating feature. The nearby Vashisht village is well-known for its 4,000-year-old Vashisht temple, one of the seven great Vedic sages, known as the Saptarishis and sulphurous hot springs said to have extraordinary therapeutic properties. Adjacent to the springs, are temples honouring Lord Shiva and Lord Rama.";
container.appendChild(secondPara);

// added paragraph style
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


para.style.padding="2rem";
secondPara.style.padding="2rem";
secondPara.style.paddingTop="0.1rem";

para.addEventListener("mouseenter",()=>{
    para.style.color="#0b5215";
    para.style.fontSize="1.5rem";
    para.style.transition="5s ease-in-out";
})

para.addEventListener("mouseleave", ()=>{
    para.style.color="#000";
    para.style.fontSize="1rem";
})

secondPara.addEventListener("mouseenter", ()=>{
    secondPara.style.color=getRandomColor();
});

secondPara.addEventListener("mouseleave", ()=>{
    secondPara.style.color="#000";
})