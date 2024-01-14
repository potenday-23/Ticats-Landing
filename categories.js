function loopImages(columnId, direction) {
    var column = document.getElementById(columnId);
    column.addEventListener('animationiteration', function () {
        if (direction === 'left') {
            // Move the first image to the end
            column.appendChild(column.firstElementChild);
        } else {
            // Move the last image to the start
            column.insertBefore(column.lastElementChild, column.firstElementChild);
        }
    });
}

loopImages('column1', 'left');
loopImages('column2', 'right');
loopImages('column3', 'left');