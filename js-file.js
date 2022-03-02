const container = document.querySelector('.container');
const pictureFrame = document.querySelector('.lastpic');


function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

function randomNum() {
    return Math.floor(Math.random()*256);
}

function randomColor() {
    return rgb(randomNum(),randomNum(),randomNum());
}

function adjustColor(obj) {
    let bgcolor = obj.style.backgroundColor;
    let vals = bgcolor.substring(bgcolor.indexOf('(') +1, bgcolor.length -1).split(', ').map(Number);
    for(i = 0; i < vals.length;i++){
        vals[i] = Math.floor(vals[i] * 0.9);
    }
    obj.style.backgroundColor = rgb(vals[0],vals[1],vals[2]);
}


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
        box.style.backgroundColor = "white";
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
        // box[i].classList.add("hover");
        //Adding random color functionality
        if(box[i].style.backgroundColor === "white"){
            box[i].style.backgroundColor = randomColor();
        }
        else{
            adjustColor(box[i]);
        }
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

    //Setting the sizes of rows/boxes to fit in 300px square
    let childrows = picture.childNodes;
    console.log(childrows.length);
    for(let i = 0; i < childrows.length; i++) {
        childrows[i].style.width = "300px";
        let rowHeight = 300/childrows.length;
        childrows[i].style.height = String(rowHeight) + "px";
        // if(childrows.length >= 80) {childrows[i].style.border = "0";}
        let childboxes = childrows[i].childNodes;
        for(let j = 0; j < childboxes.length; j++ ) {
            childboxes[j].style.width = String(rowHeight) + "px";
            childboxes[j].style.height = String(rowHeight) + "px";
            // if(childrows.length >= 80) {childboxes[j].style.border = "0";}

        }
    }

    //Somewhere in thesee comments makes the rows go side by side
    // picture.style.maxHeight = "300px";
    // picture.style.maxWidth = "300px";
    // picture.style.display = "flex";
    // picture.style.overflow = "hidden";
    // picture.style.flexShrink = "1";

    //These comments too make rows side by side for now?
    // picture.style.display = "flex";
    // picture.style.flexDirection = "column";
    // picture.style.maxHeight = "300px";
    // picture.style.maxWidth = "300px";
    // picture.style.minWidth = "0";
    // picture.style.minHeight = "0";
    // picture.style.width = "300px";
    // picture.style.height = "300px";






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
            box.style.backgroundColor = "white";
            box.style.minHeight = "0";
            box.style.border = "1px solid black"
            row.appendChild(box);
        }
    }

    //Event handler for when mouse enters/exists

    const box2 = document.querySelectorAll('.container .boxes');
    for(let i = 0; i < box2.length; i++){
        box2[i].addEventListener('mouseenter', function(){
            // box2[i].classList.add("hover");
            //Adding random color functionality
            if(box2[i].style.backgroundColor === "white"){
             box2[i].style.backgroundColor = randomColor();
            }
            else{
                adjustColor(box2[i]);
            }

    })
}
    

})


