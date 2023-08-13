function home() {window.location.href = "bt.html";}
function stuff() {
    window.location.href = "stuff.html";
}
function addin(){
    var dt = document.getElementsByName("count");
    for (let i = 0; i < dt.length; ++i){
        if (Number(dt[i].value) > 0){
            alert("Sản phẩm đã được chỉnh sửa-thêm vào giỏ hàng");
            localStorage.setItem(i+1, dt[i].value);
        }else if (Number(dt[i].value) == 0){
            localStorage.setItem(i+1, dt[i].value);
        }
    }
}
