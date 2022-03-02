const container = document.querySelector('.container');
const pictureFrame = document.querySelector('.lastpic');
//Creates the grid of squares with a tiny border (640px each side)
for(let i = 0; i < 16; i++){
    let row = document.createElement('div');
    row.style.display = "flex";
    row.style.flexShrink = "1";
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
        box.style.flexShrink = "1";
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
    //Only newest 'picture' should be shown
    while(pictureFrame.hasChildNodes()){
        pictureFrame.removeChild(pictureFrame.firstChild);
    }

    //cloning picture for presentation
    let picture = container.cloneNode(true);
    
    //Somewhere in thesee comments makes the rows go side by side
    // picture.style.maxHeight = "300px";
    // picture.style.maxWidth = "300px";
    // picture.style.display = "flex";
    // picture.style.overflow = "hidden";
    // picture.style.flexShrink = "1";

    //These comments too make rows side by side for now?
    picture.style.display = "flex";
    picture.style.flexDirection = "column";
    picture.style.maxHeight = "300px";
    picture.style.maxWidth = "300px";
    picture.style.minWidth = "0";
    picture.style.minHeight = "0";
    picture.style.width = "300px";
    picture.style.height = "300px";






    picture.classList.remove("container");
    pictureFrame.appendChild(picture);


    //Removing boxes. Might be uneeded since I later remove the boxes entirely?
    // for(let i = 0; i < box.length; i++){
    //     box[i].classList.remove("hover");
    // }
    
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
        let side = 960/count;
        let totalwidth = side * count;
        row.style.width = String(totalwidth) + "px";
        row.style.height = String(side) + "px";
        row.style.justifyContent = "center";
        row.style.alignItems = "center";
        row.style.flexShrink = "1";
        row.style.minWidth = "0";
        row.style.minHeight = "0";
        container.appendChild(row);
        for(let j = 0; j < count; j++){
            let box = document.createElement('div');
            box.classList.add("boxes");
            box.style.width = String(side) + "px";
            box.style.height = String(side) + "px";
            box.style.minWidth = "0";
            box.style.minHeight = "0";
            box.style.border = "1px solid black"
            row.appendChild(box);
        }
    }

    //Event handler for when mouse enters/exists

    const box2 = document.querySelectorAll('.container .boxes');
    for(let i = 0; i < box2.length; i++){
        box2[i].addEventListener('mouseenter', function(){
            box2[i].classList.add("hover");
    })
}
    

})


