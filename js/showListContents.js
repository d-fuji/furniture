//内容の表示切り替え
const open = [];
const n = document.getElementsByClassName("list_article");
for (let i = 0; i < n.length; i++) {
    open.push(false)
}

const openHideArticle = (num) => {
    if (open[num]) {
        document.getElementsByClassName("list_article")[num].classList.remove("fadein")
        document.getElementsByClassName("list_article")[num].classList.add("fadeout")
        open[num] = false
    }
    else {
        document.getElementsByClassName("list_article")[num].classList.remove("fadeout")
        document.getElementsByClassName("list_article")[num].classList.add("fadein")
        open[num] = true
    }
    // document.getElementsByClassName("list_article")[num].classList.("feedin")
    // document.getElementsByClassName("list_article")[num].classList.toggle("feedout")
}

//リストの横のイラストを反転
const rotate = (e) => {
    e.target.classList.toggle("rotate")
}


