//this function is moving element for defined length in parameters
function getElementToMove(positionX, positionY, elementId, timeOfInterval, pixelsPerIntervalTime) {
    var getElement = elementId;
    var positionXToAchive = parseInt(positionX);
    var positionYToAchive = parseInt(positionY);
    positionY.toFixed(0);
    var intervalTimeFromParam = timeOfInterval;
    var pixelsPerInteval = pixelsPerIntervalTime;
    var elementToMoveList = $('#' + getElement);
    var elementToMove = document.getElementById(getElement);
    if (elementToMoveList.length != 0) {
        //positionX = positionX + posX;
        //positionY = positionY + posY;
        let posX = elementToMove.offsetLeft;
        let posY = elementToMove.offsetTop;
        // let posX = 0;
        // let posY = 0;
        var interval = setInterval(frame, intervalTimeFromParam);
        function frame() {


            if (posX == positionXToAchive && posY == positionYToAchive) {
                elementToMove.style.left = elementToMove.offsetLeft - (elementToMove.clientWidth / 2) + 'px';
                elementToMove.style.top = elementToMove.offsetTop - (elementToMove.clientHeight / 2) + 'px';
                clearInterval(interval);
            }
            else {
                if (positionXToAchive != 0 && positionXToAchive > posX) {
                    posX = posX + pixelsPerInteval;
                    let pix = posX + 'px';
                    elementToMove.style.left = pix;
                }
                if (positionYToAchive != 0 && positionYToAchive > posY) {
                    posY = posY + pixelsPerInteval;
                    let pix = posY + 'px';
                    elementToMove.style.top = pix;
                }
                if (positionX != 0 && positionX < posX) {
                    posX = posX - pixelsPerInteval;
                    elementToMove.style.left = posX + 'px';
                }
                if (positionY != 0 && positionY < posY) {
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

function getActualXPositionOfElement(elementId) {

    var getElement = document.getElementById(elementId);

    if (getElement != null) {
        var positionElement = getElement.offsetLeft;
        var elementWidth = getElement.clientWidth;
        var retVal = positionElement + (elementWidth / 2);//środekElementu od lewej       
        //var elementHeight = getElement.clientHeight;
        return retVal;
    }
    else {
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}
function getActualYPositionOfElement(elementId) {

    var getElement = document.getElementById(elementId);
    if (getElement != null) {
        var positionElement = getElement.offsetTop;
        //var elementWidth = getElement.clientWidth;
        var elementHeight = getElement.clientHeight;
        var retVal = positionElement + (elementHeight / 2);
        return retVal;
    }
    else {
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}