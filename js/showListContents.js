//内容の表示切り替え
const open = [];
const n = document.getElementsByClassName("list_article");
for (let i = 0; i < n.length; i++) {
    open.push(false)
}

const openHideArticle = (num) => {
    let listArticle = n[num];
    if (open[num]) {
        listArticle.style.visibility = "hidden";
        open[num] = false
    }
    else {
        listArticle.style.visibility = "visible";
        open[num] = true
    }

    //フェードイン
    document.getElementsByClassName("list_article")[num].classList.toggle("feedin")
}


//リストの横のイラストを反転
const rotate = (e) => {
    e.target.classList.toggle("rotate")
}

