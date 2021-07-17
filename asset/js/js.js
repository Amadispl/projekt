
function popup(img)
{
    var x = img;
    document.getElementById("image").src="asset/img/img"+x+".jpg";
    document.getElementById("imagewrap").style.display= "none";
    document.getElementById("popup").style.display= "flex";
    next(x);
}
function back()
{
    document.getElementById("imagewrap").style.display= "flex";
    document.getElementById("popup").style.display= "none";
}
