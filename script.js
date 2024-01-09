const container = document.getElementById("container");







for (let i = 1; i <= 16; i++) {

    //create a new container div for each row
    let rowContainer = document.createElement("div")

    for (let j = 1; j <= 16; j++) {
        let div = document.createElement('div');
        div.classList.add('blocks')
        rowContainer.appendChild(div);

    }

    //append the row container to the main container
    container.appendChild(rowContainer)
};


container.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('blocks')) {
        event.target.classList.add('hovered');
    }
});