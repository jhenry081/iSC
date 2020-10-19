var lisimu = document.querySelector("#lisimu");
// console.log(lisimu);

function changeThemeTo(theme){
    lisimu.classList.remove("fb", "whatsapp");
    lisimu.classList.add(theme);

    document.querySelector("#themeButtons button.active").classList.remove("active");
    document.querySelector("#themeButtons #" + theme).classList.add("active");
}