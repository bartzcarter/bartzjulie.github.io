var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // Remove "active-link" class from all tab links
    for(var i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active-link");
    }
    // Remove "active-tab" class from all tab contents
    for(var i = 0; i < tabcontents.length; i++){
        tabcontents[i].classList.remove("active-tab");
    }
    // Add "active-link" class to the clicked tab link
    event.target.classList.add("active-link");
    // Add "active-tab" class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
