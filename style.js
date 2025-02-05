document.getElementById("article-sidebar").style.display = "none";

document.getElementById("article").style.marginLeft = "30px";
document.getElementById("article").style.marginRight = "30px";

document.getElementById("article-content").style.lineHeight = "29px";
document.getElementById("article-content").style.fontFamily = "Georgia";
document.getElementById("article-content").style.fontSize = "1.2em";

document.getElementsByClassName("nav")[0].style.display = "none";
document.getElementById("search").style.width = "70%";
document.getElementById("search").style.margin = "auto"
document.getElementById("search").style.display = "block"
document.getElementById("search-form").style.fontSize = "16px"

// document.onkeydown = function (event) {
//    if (event.key == "d") { darkMode() }
// };
//
// function darkMode(){
//     if (document.getElementById("article-content").style.color != "white"){
//         document.getElementById("article-content").style.backgroundColor = "black";
//         document.getElementById("article-content").style.color = "white";
//         document.getElementsByTagName("h1")[0].style.color = "white";
//         let h2 = document.getElementsByTagName("h2")
//         for (item of h2){
//             item.style.color = "white";
//         }
//         let h3 = document.getElementsByTagName("h3")
//         for (item of h3){
//             item.style.color = "white";
//         }
//         let h4 = document.getElementsByTagName("h4")
//         for (item of h4){
//             item.style.color = "white";
//         }
//     }else{
//         document.getElementById("article-content").style.color = "unset"
//         document.getElementById("article-content").style.backgroundColor = "unset"
//         document.getElementsByTagName("h1")[0].style.color = "unset";
//         let h2 = document.getElementsByTagName("h2")
//         for (item of h2){
//             item.style.color = "unset";
//         }
//         let h3 = document.getElementsByTagName("h3")
//         for (item of h3){
//             item.style.color = "unset";
//         }
//         let h4 = document.getElementsByTagName("h4")
//         for (item of h4){
//             item.style.color = "unset";
//         }
//
//     }
// }
