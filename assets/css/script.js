document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null;
let interval2 = null;
let interval3 = null;

document.getElementById("country").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval1);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.getElementById("title").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval2);
    
    interval2 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval2);
      }
      
      iteration += 1 / 3;
    }, 30);
  }

  document.getElementById("name").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval3);
    
    interval3 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval3);
      }
      
      iteration += 1 / 3;
    }, 30);
  }

