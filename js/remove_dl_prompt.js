
// Author: cqhudson

// log to check if script is loaded
console.log("removal script loaded");

// This function removes the element
function removeElement(classPattern) {
    document.querySelectorAll(classPattern).forEach(function(element) {
        element.remove();
    }); 
}

// Check for changes in the DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if(mutation.addedNodes.length > 0) {
            removeElement("div.download-cta.svelte-y8yzcx");
        }
    });
});

// Start observing the document
observer.observe(document.body, { childList: true, subtree: true });