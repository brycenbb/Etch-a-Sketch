const container = document.getElementsByClassName(".container");

const div1 = document.createElement('div');

// Need to make 4 rows, add to container, and in each row add 4 boxes. Not sure yet

for(let i = 0; i < 4; i++){
    const row = document.createElement('div');
    for(let j = 0; j < 4; j++){
        const box = document.createElement('div');
        row.appendChild(box);
    }
}