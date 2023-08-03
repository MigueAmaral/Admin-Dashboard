let sidebarT = document.querySelector(".sidebar");
sidebarT.addEventListener("mouseover", () => {
    let sidebar = document.querySelectorAll(".sidebarMembersInit")
    sidebar.forEach(element => element.setAttribute("class", "sidebarMembers"));
}, false,
)

let sidebar = document.getElementById("sidebar");
sidebar.addEventListener("mouseout", (e) => {
    let sidebarT = document.querySelectorAll(".sidebarMembers:not(.first)");
    sidebarT.forEach(element => element.setAttribute("class", "sidebarMembersInit"));
}
)