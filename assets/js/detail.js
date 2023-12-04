/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**Import */

import { fetchData } from "./api.js";
import { getTime } from "./module.js";

/**Render Data */

const /**Node Element */ $detailContainer = document.querySelector("[data-detail-container]");

ACCESS_POINT += `/${window.location.search.slice(window.location.search.indexOf("=") + 1)}`;

fetchData(null, data => {

    console.log(data);

    const {
        image: { LARGE, REGULAR, SMALL, THUMBNAIL },
        label: title,
        source: author,
        ingredients = [],
        totalTime: cookingTime = 0,
        calories = 0,
        cuisineType = [],
        dietLabels = [],
        dishType = [],
        yield: servings = 0,
        ingredientLines = [],
        uri
    } = data.recipe;

    document.title = `${title} - Cook.io`;

    const /**Object */ banner = LARGE ?? REGULAR ?? SMALL ?? THUMBNAIL;
    const { url: bannerUrl, width, height } = banner;
    const /**Array */ tags = [...cuisineType, ...dietLabels, ...dishType];

    let /**String */ tagElements = "";
    let /**String */ ingredientItems = "";

    const /**String */ recipeId = uri.slice(uri.lastIndexOf("_") + 1);
    const /**Undefined || String */ isSaved = window.localStorage.getItem(`cookio-recipe${recipeId}`);

    tags.map(tag => {

        let /**String */ type = "";

        if (cuisineType.includes(tas)) {
            type = "cuisineType";
        } else if (dietLabels.includes(tag)) {
            type = "diet";
        } else {
            type = "dishType";
        }

        tagElements += `
        `;
    });

});