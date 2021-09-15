x = document.querySelector('.fa-bars');
x.addEventListener('click',function(){
    console.log("Ban vua click vao toi");
    document.querySelector('.container').classList.toggle('sangphai');
    document.querySelector('.hiden_menu').classList.toggle('sangphai');
    document.querySelector('.black').classList.toggle('black1');

})
y = document.querySelector('.fa-times-circle');
y.addEventListener('click',function(){
    console.log("Ban vua click vao toi 2");
    document.querySelector('.container').classList.toggle('sangphai');
    document.querySelector('.hiden_menu').classList.toggle('sangphai');
    document.querySelector('.black').classList.toggle('black1');
})
 //Khi người dùng cuộn chuột thì gọi hàm scrollFunction
 window.onscroll = function() {scrollFunction()};
 // khai báo hàm scrollFunction
 function scrollFunction() {
     // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         //nếu lớn hơn 20px thì hiện button
         document.getElementById("myBtn").style.display = "block";
     } else {
          //nếu nhỏ hơn 20px thì ẩn button
         document.getElementById("myBtn").style.display = "none";
     }
 }
 //gán sự kiện click cho button
 document.getElementById('myBtn').addEventListener("click", function(){
     //Nếu button được click thì nhảy về đầu trang
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 });