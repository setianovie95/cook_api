/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**Add Event on multiple element
 * 
 * @param {NodeList} $elements Nodelist
 * @param {String} eventType event type string
 * @param {Function} callback callback function
 * 
 */

window.addEventOnElements = ($elements, eventType, callback) => {
    for (const $element of $elements) {
        $element.addEventListener(eventType, callback);
    }
}