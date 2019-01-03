//this function is moving element for defined length in parameters
function getElementToMove(positionX, positionY, elementId, timeOfInterval, pixelsPerIntervalTime) {
    var getElement = elementId;
    var positionXToAchive = parseInt(positionX);
    var positionYToAchive = parseInt(positionY);
    var intervalTimeFromParam = timeOfInterval;
    var pixelsPerInteval = pixelsPerIntervalTime;
    var elementToMoveList = $('#' + getElement);
    var elementToMove = document.getElementById(getElement);
    if (elementToMoveList.length != 0) {
        //positionX = positionX + posX;
        //positionY = positionY + posY;
        let posX = parseInt(elementToMove.style.left);
        let posY = parseInt(elementToMove.style.top);
        // let posX = 0;
        // let posY = 0;
        var interval = setInterval(frame, intervalTimeFromParam);
        function frame() {


            if (posX == positionXToAchive && posY == positionYToAchive) {
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
                if (positionX != 0 && positionXToAchive < posX) {
                    posX = posX - pixelsPerInteval;
                    elementToMove.style.left = posX + 'px';
                }
                if (positionY != 0 && positionYToAchive < posY) {
                    posY = posY - pixelsPerInteval;
                    elementToMove.style.top = posY + 'px';
                }
            }
        }
    }
    else {
        console.log.console.error("Error during moving element, propably wrong id name");
    }
    return interval;
}

function getActualXPositionOfElement(elementId) {

    var getElement = document.getElementById(elementId);

    if (getElement != null) {
        var positionElement = getElement.offsetLeft;
        var margin = positionElement + 20;
        // var elementWidth = getElement.clientWidth;
        // var retVal = positionElement + (elementWidth / 2);//środekElementu od lewej       
        //var elementHeight = getElement.clientHeight;
        return margin;
    }
    else {
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}
function getActualYPositionOfElement(elementId) {

    var getElement = document.getElementById(elementId);
    if (getElement != null) {
        var positionElement = getElement.offsetTop;
        var margin = positionElement + 20;
        //var elementWidth = getElement.clientWidth;
        // var elementHeight = getElement.clientHeight;
        // var retVal = positionElement + (elementHeight / 2);
        return positionElement;
    }
    else {
        console.log.console.error("Error during moving element, propably wrong id name");
    }

}