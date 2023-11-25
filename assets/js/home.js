/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/** Home page search */


const /**Node Elemen */ $searchField = document.querySelector("[data-search-field]");
const /**Node Elemen */ $searchBtn = document.querySelector("[data-search-btn]");

$searchBtn.addEventListener("click", function () {
    if ($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
});

/**Search with enter button */

$searchField.addEventListener("keydown", e => {
    if (e.key == "Enter") $searchBtn.click();
});

/**Tab panel navigation */

const /** Node List */ $tabBtns = document.querySelectorAll("[data-tab-btn]");
const /** Node List */ $tabPanels = document.querySelectorAll("[data-tab-panel]");

let /** Node Element */[$lastActiveTabPanel] = $tabPanels;
let /** Node Element */[$lastActiveTabBtn] = $tabBtns; 

addEventOnElements($tabBtns, "click", function () {
    $lastActiveTabPanel.setAttribute("hidden", "");
    $lastActiveTabBtn.setAttribute("aria-selected", false);
    $lastActiveTabBtn.setAttribute("tabindex", -1);

    const /**Node Element */ $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPanel.removeAttribute("hidden");
    this.setAttribute("aria-selected", true);
    this.setAttribute("tabindex", 0);

    $lastActiveTabPanel = $currentTabPanel;
    $lastActiveTabBtn = this;
})