document.getElementById("star-5").innerHTML = starReturn(5);
document.getElementById("star5").innerHTML = starReturn(5);
document.getElementById("star4").innerHTML = starReturn(4);
document.getElementById("star-4").innerHTML = starReturn(4);
document.getElementById("star_4").innerHTML = starReturn(4);
document.getElementById("star4_").innerHTML = starReturn(4);
document.getElementById("star3").innerHTML = starReturn(3);
document.getElementById("star-3").innerHTML = starReturn(3);
document.getElementById("star2").innerHTML = starReturn(2);

function starReturn(num) {
    var star = "<img src='./images/star.png' alt='star' />";
    var ret = "";
    for (let i = 0; i < num; i++) {
        ret += star;
    }
    return ret;
}
