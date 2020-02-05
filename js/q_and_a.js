function openArticle(num){
    let listArticle = document.getElementsByClassName("list_article")[num];
    listArticle.style.visibility = "visible";
}

function hideArticle(num){
    let listArticle = document.getElementsByClassName("list_article")[num];
    listArticle.style.visibility = "hidden";
}

let counterList = [1,1,1,1,1];
function openHideArticle(num){
    let listArticle = document.getElementsByClassName("list_article")[num];
    if(counterList[num]%2===1){
        openArticle(num);
        counterList[num] ++;
    }else{
        hideArticle(num)
        counterList[num] ++;
    }
}
/*
(function main() {
    let listArticle = document.getElementsByClassName("list_article")[0];
    console.log(listArticle.style.visibility.value)
}());
*/
