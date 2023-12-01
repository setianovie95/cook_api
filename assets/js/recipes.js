/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";




/**Import */
import { fetchData } from "./api.js";
import { $skeletonCard, cardQueries } from "./global.js";
import { getTime } from "./module.js";

/**Accordion */
const /**Node List */ $accordions = document.querySelectorAll("[data-accordion]");

/**
 * 
 * @param {NodeList} $element Accordion Node
 */

const initAccordion = function ($element) {
    const /**Node Element */ $button = $element.querySelector("[data-accordion-btn]");
    let isExpanded = false;

    $button.addEventListener("click", function () {
        isExpanded = isExpanded ? false : true;
        this.setAttribute("aria-expanded", isExpanded);
    });
}

for (const $accordion of $accordions) initAccordion($accordion);

/**Filter bar toggle */

const /**Node Element */ $filterBar = document.querySelector("[data-filter-bar]");
const /**Node List */ $filterTogglers = document.querySelectorAll("[data-filter-toggler]");
const /**Node Element */ $overlay = document.querySelector("[data-overlay]");

addEventOnElements($filterTogglers, "click", function () {
    $filterBar.classList.toggle("active");
    $overlay.classList.toggle("active");
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = bodyOverflow == "hidden" ? "visible" : "hidden";
});

/**Filter Submit and Clear */

const /**Node Element */ $filterSubmit = document.querySelector("[data-filter-submit]");
const /**Node Element */ $filterClear = document.querySelector("[data-filter-clear]");
const /**Node Element */ $filterSearch = $filterBar.querySelector("input[type='search']");

$filterSubmit.addEventListener("click", function () {
    const /**Node List */ $filterCheckboxes = $filterBar.querySelectorAll("input:checked");

    const /**Array */ queries = [];

    if ($filterSearch.value) queries.push(["q", $filterSearch.value]);

    if ($filterCheckboxes.length) {
        for (const $checkbox of $filterCheckboxes) {
            const /**String */ key = $checkbox.parentElement.parentElement.dataset.filter;
            queries.push([key, $checkbox.value]);
        }
    }

    window.location = queries.length ? `?${queries.join("&").replace(/,/g, "=")}` : "/recipes.html";
});

$filterSearch.addEventListener("keydown", e => {
    if (e.key == "Enter") $filterSubmit.click();
});

$filterClear.addEventListener("click", function () {

    const /**Node List */ $filterCheckboxes = $filterBar.querySelectorAll("input:checked");

    $filterCheckboxes?.forEach(elem => elem.checked = false);
    $filterSearch.value &&= "";
});

const /**String */ queryStr = window.location.search.slice(1);
const /**Array */ queries = queryStr && queryStr.split("&").map(i => i.split("="));

const /**Node Element */ $filterCount = document.querySelector("[data-filter-count]");

if (queries.length) {
    $filterCount.style.display = "block";
    $filterCount.innerHTML = queries.length;
} else {
    $filterCount.style.display = "none";
}

queryStr && queryStr.split("&").map(i => {
    if (i.split("=")[0] == "q") {
        $filterBar.querySelector("input[type='search']").value = i.split("=")[1].replace(/%20/g, " ");
    } else {
        $filterBar.querySelector(`[value="${i.split("=")[1].replace(/%20/g, " ")}"]`).checked = true;
    }
});

const /**Node Element */ $filterBtn = document.querySelector("[data-filter-btn]");

window.addEventListener("scroll", e => {
    $filterBtn.classList[window.scrollY >= 120 ? "add" : "remove"]("active");
});

/**Request Recipes */

const /**Node Element */ $grisList = document.querySelector("[data-grid-list]");
const /**Node Element */ $loadMore = document.querySelector("[data-load-more]");
const /**Aray */ defaultQueries = [
    ["mealType", "breakfast"],
    ["mealType", "dinner"],
    ["mealType", "lunch"],
    ["mealType", "snack"],
    ["mealType", "teatime"],
    ...cardQueries 
];

$grisList.innerHTML = $skeletonCard.repeat(20); 

const renderRecipe = data => {

    data.hits.map((item, index) => {

        const {
            recipe: {
                image, 
                label: title, 
                totalTime: cookingTime, 
                uri
            }
        } = item;
    });
}