function isVisible(el) {
    while (el) {
        if (el === document) {
            return true;
        }

        const $style = window.getComputedStyle(el, null);

        if (!el) {
            return false;
        } else if (!$style) {
            return false;
        } else if ($style.display === 'none') {
            return false;
        } else if ($style.visibility === 'hidden') {
            return false;
        } else if (+$style.opacity === 0) {
            return false;
        } else if (($style.display === 'block' || $style.display === 'inline-block') &&
            $style.height === '0px' && $style.overflow === 'hidden') {
            return false;
        } else {
            return $style.position === 'fixed' || isVisible(el.parentNode);
        }
    }
}

setInterval(function () {
    // let j = 0;
    const elements = document.querySelectorAll('.carousel__control--forward');
    // for (let i = (elements.length - 1); i > -1; i--) {
    //     if (isVisible(elements[i])) j = i;
    // }
    // elements[j].click();

    let i = 0;
    while(!isVisible(elements[i])) i++;
    
    elements[i].click();

}, 7000);
