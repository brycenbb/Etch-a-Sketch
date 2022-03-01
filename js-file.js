const container = document.querySelector('.container');

//Creates the grid of squares with a tiny border (640px each side)
for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.width = "960px";
    row.style.height = "60px";
    row.style.justifyContent = "center";
    row.style.alignItems = "center";
    container.appendChild(row);
    for(let j = 0; j < 16; j++){
        let box = document.createElement('div');
        box.classList.add("boxes");
        box.style.width = "60px";
        box.style.height = "60px";
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

//Event handler for resetting the stage and setting the box count, max 100, min 4
const button = document.querySelector('button');
button.addEventListener('click',function() {
    for(let i = 0; i < box.length; i++){
        box[i].classList.remove("hover");
    }
    
    //Setting box count
    let count = Number(prompt("Please enter the amount of boxes on each side you would like:"))
    while(!Number.isInteger(count)) {
        count = Number(prompt("Please enter a valid number between 4 and 100"));
    }
    if(count > 100) {count = 100};
    if(count < 4) {count = 4};

    //removing current boxes
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    // //adding new boxes according to 'count'
    for(let i = 0; i < count; i ++){
        let row = document.createElement('div');
        row.style.display = "flex";
        row.style.flexDirection = "row";
        var side = Math.floor(640/count);
        row.style.width = side * count;
        row.style.height = side;
        row.style.justifyContent = "center";
        row.style.alignItems = "center";
        container.appendChild(row);
        console.log("I was here");
        for(let j = 0; j < count; j++){
            let box = document.createElement('div');
            box.classList.add("boxes");
            box.style.width = side;
            box.style.height = side;
            box.style.border = "1px solid black"
            row.appendChild(box);
        }
    }
    console.log(side);
    console.log(count);
    console.log(typeof side);
    console.log(typeof count);

})

