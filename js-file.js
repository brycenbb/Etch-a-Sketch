const container = document.querySelector('.container');

//Creates the grid of squares with a tiny border
for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.width = "640px";
    row.style.height = "40px";
    row.style.justifyContent = "center";
    row.style.alignItems = "center";
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        let box = document.createElement('div');
        box.classList.add("boxes");
        box.style.width = "40px";
        box.style.height = "40px";
        box.style.border = "1px solid black"
        row.appendChild(box);
    }
}

//Event handler for when mouse enters/exists

const box = document.querySelectorAll('.boxes');
for(let i = 0; i < box.length; i++){
    box[i].addEventListener('mouseenter', function(){
        box[i].classList.add("hover");
    })
}

//Event handler for resetting the stage
const button = document.querySelector('button');
button.addEventListener('click',function() {
    for(let i = 0; i < box.length; i++){
        box[i].classList.remove("hover");
    }
})

