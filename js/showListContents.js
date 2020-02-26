//内容の表示切り替え
let open = [false, false, false, false, false];

const openHideArticle = (num) => {
    let listArticle = document.getElementsByClassName("list_article")[num];
    if (open[num]) {
        listArticle.style.visibility = "hidden";
        open[num] = false
    }
    else {
        listArticle.style.visibility = "visible";
        open[num] = true
    }
}

//リストの横のイラストを反転
const rotate = (e) => {
    e.target.classList.toggle("rotate")
}