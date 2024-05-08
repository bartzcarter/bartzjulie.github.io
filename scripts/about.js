document.addEventListener("DOMContentLoaded", function() {
    var sidemenu = document.getElementById("sidemenu");

    function openMenu() {
        sidemenu.classList.add("active");
    }

    function closeMenu() {
        sidemenu.classList.remove("active");
    }

    // Add event listeners to menu icons
    document.querySelector(".fa-bars").addEventListener("click", openMenu);
    document.querySelector(".fa-x").addEventListener("click", closeMenu);
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    // Prevent default behavior of the event
    event.preventDefault();

    // Remove "active-link" class from all tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    // Remove "active-tab" class from all tab contents
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    // Add "active-link" class to the clicked tab link
    event.target.classList.add("active-link");
    // Add "active-tab" class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
