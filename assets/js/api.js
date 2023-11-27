/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /**String */ APP_ID = "9edb1cc2";
const /**String */ API_KEY = "f931ce150ccc0c2326211d298a7a7def";
const /**String */ TYPE = "public";

/**
 * 
 * @param {Array} queries Query Array
 * @param {Function} successCallback Success call back function
 */

export const fetchData = async function (queries, successCallback) {
    const /**String */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

    const /**String */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /**Object */ response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}