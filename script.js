var presentationY,aboutY,projectsY,hobbyY,contactsY;function start(){var t=document.getElementById("about").getBoundingClientRect().y;document.body.scrollTop=t,document.documentElement.scrollTop=t}function backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function resetActiveLink(){document.getElementById("presentationLink").classList.remove("active"),document.getElementById("aboutLink").classList.remove("active"),document.getElementById("projectsLink").classList.remove("active"),document.getElementById("hobbyLink").classList.remove("active"),document.getElementById("contactsLink").classList.remove("active")}function checkScrolling(){var t=document.documentElement.scrollTop;resetActiveLink(),0<=t&&t<=aboutY?document.getElementById("presentationLink").classList.add("active"):aboutY<=t&&t<=projectsY?document.getElementById("aboutLink").classList.add("active"):projectsY<=t&&t<=hobbyY?document.getElementById("projectsLink").classList.add("active"):hobbyY<=t&&t<=contactsY?document.getElementById("hobbyLink").classList.add("active"):contactsY<=t&&document.getElementById("contactsLink").classList.add("active")}window.onload=function(){presentationY=document.getElementById("presentation").getBoundingClientRect().y,aboutY=document.getElementById("about").getBoundingClientRect().y,projectsY=document.getElementById("projects").getBoundingClientRect().y,hobbyY=document.getElementById("hobby").getBoundingClientRect().y,contactsY=document.getElementById("contacts").getBoundingClientRect().y},document.addEventListener("scroll",checkScrolling,!1);