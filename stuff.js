function home() {window.location.href = "bt.html"};
function stuff() {window.location.href = "stuff.html"};
function resetlocal(){
    localStorage.clear();
    alert("Đơn hàng đã được xóa");
    window.location.href = "stuff.html";
}
let sanpham = [
        {
            stt: 1,
            name: "Da cá trứng muối",
            price_under: 62,
            price_above: 58
        },
        {
            stt: 2,
            name: "Ghẹ sữa rim",
            price_under: 63,
            price_above: 59
        },
        {
            stt: 3,
            name: "Mực rim sate",
            price_under: 69,
            price_above: 58
        },
        {
            stt: 4,
            name: "Thập cẩm bể",
            price_under: 38,
            price_above: 34
        }
    ];
function see(){
    const h = document.getElementById("sp");
    let tongtien = 0;
    for (let i = 1; i <= sanpham.length; ++i){
        let str = sanpham.find(sanpham => sanpham.stt === i);
        let soluong = localStorage.getItem(i);
        if (soluong > 0){
            let dongia = 0;
            if (soluong < 5 && soluong > 0) dongia = str.price_under;
            else dongia = str.price_above
            let sotien = String(soluong * dongia) + ".000đ";
            tongtien += soluong*dongia
            h.innerHTML += `
                <style>
                    .dieuchinh{
                        text-align: center;
                        font-size:20px;
                        width: 3%;
                    }
                    .dieuchinhsoluong{
                        width: 8%;
                    }
                    .dieuchinhstt{
                        width: 2%;
                    }
                    .dieuchinhten{
                        width: 10%;
                    }
                    .dieuchinhdongia{
                        width: 10%;
                    }
                    .dieuchinhgiatien{
                        width: 10%;
                    }
                </style>
                <tr class = "dttr">
                    <td class = "dieuchinhstt">${i}</td>
                    <td class = "dieuchinhten"> ${str.name} </td>
                    <td class = "dieuchinhdongia"> ${String(dongia)+".000đ"} </td>
                    <td class = "dieuchinhsoluong"> ${soluong} </td>
                    <td class ="dieuchinhgiatien"> ${sotien} </td>
                </tr>
            `;
        }
    }
    h.innerHTML += `
        <table>
        <tr> 
            <td></td>
            <td></td>
            <td></td>
            <td> Tổng tiền </td>
            <td> ${String(tongtien)+".000đ"} </td>
        </tr>
        </table>
        <br>
        <br>
    `;
}
function dathang(){
    let fname = document.getElementById("fname").value;
    let sdt = document.getElementById("sdt").value;
    let wdta = "";
    for (let i = 1; i <= localStorage.length; ++i){
    let str = sanpham.find(sanpham => sanpham.stt === i);
    let soluong = localStorage.getItem(i);
    wdta += str.name + " " + String(soluong) + " ";
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ4YOowpMzp5GpbHQ5kruEm0YWt-9HeZbBH03vk9MzWRAvCDAU9_tqlJVERy4NGcye/exec'
    const form = document.forms['contact-form'];
    let form_data = new FormData();
    form_data.append("your-name", fname);
    form_data.append("your-number", sdt);
    form_data.append("message", wdta);
    form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: form_data})
    .then(response => alert("Đơn hàng đã được đặt-Xin cảm ơn quý khách"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
    })
  
}