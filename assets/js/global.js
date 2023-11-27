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


export const /**Array */ cardQueries = [
    ["field", "uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"]
];


/**Skeleton Card */

export const /**String */ $skeletonCard = `


    <div class="card skeleton-card">

        <div class="skeleton card-banner"></div>

        <div class="card-body">
            <div class="skeleton card-title"></div>
            <div class="skeleton card-text"></div>
        </div>



    </div>
`;