// ==UserScript==
// @name         botForYandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["Гобой","Как звучит флейта", "Тромбон", "Что такое валторна", "Фагот", "Скрипка", "Виолончель "];
let keyword = keywords[getRandom(0,keywords.length)];
let btnK = document.getElementsByClassName("button")[0];
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeKeyWord(word){
    let i=0
    let timerID = setInterval(()=>{
        document.getElementById("text").value+=word[i];
        i++
        if (i==word.length){
            clearInterval(timerID);
            btnK.click();
        }
    },1000)
}

if (btnK != undefined)
    writeKeyWord(keyword);
else {
let links = document.links;
    for (let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            links[i].setAttribute("target", "_self");
            links[i].click();
            break;
        }
    }
}
