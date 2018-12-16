//this function is moving element for defined length in parameters
function getElementToMove(positionX, positionY, elementId, timeOfInterval, pixelsPerIntervalTime) {
    var getElement = elementId;
    var intervalTimeFromParam = timeOfInterval;
    var pixelsPerInteval = pixelsPerIntervalTime;
    var elementToMoveList = $('#' + getElement);
    var elementToMove = document.getElementById(getElement);
    if (elementToMoveList.length != 0) {
        let posX = elementToMove.offsetLeft;
        let posY = elementToMove.offsetTop;
        positionX = positionX + posX;
        positionY = positionY + posY;
        var interval = setInterval(frame, intervalTimeFromParam);
        function frame() {
            if (posX == positionX && posY == positionY) {
                clearInterval(interval);
            }
            else {
                if (positionX != 0 && posX != positionX && positionX > posX) {
                    posX = posX + pixelsPerInteval;
                    elementToMove.style.left = posX + 'px';
                }
                if (positionY != 0 && posY != positionY && positionY > posY) {
                    posY = posY + pixelsPerInteval;
                    elementToMove.style.top = posY + 'px';
                }
                if (positionX != 0 && posX != positionX && positionX < posX) {
                    posX = posX - pixelsPerInteval;
                    elementToMove.style.left = posX + 'px';
                }
                if (positionY != 0 && posY != positionY && positionY < posY) {
                    posY = posY - pixelsPerInteval;
                    elementToMove.style.top = posY + 'px';
                }
            }
        }
    }
    else {
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}

function getActualXPositionOfElement(elementId){

    var getElement = document.getElementById(elementId);
    if(getElement != null){
        var positionElement = getElement.offsetLeft;
        return positionElement;
    }
    else{
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}
function getActualYPositionOfElement(elementId){

    var getElement = document.getElementById(elementId);
    if(getElement != null){
        var positionElement = getElement.offsetTop;
        return positionElement;
    }
    else{
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}