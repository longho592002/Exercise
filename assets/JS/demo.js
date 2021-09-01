//  $(document).ready(function () {
//     $('#btn-next').click(function(event) {
//         var slide_sau = $('.active').next();
//         if(slide_sau.length!=0){
//            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
//               $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
//            });
//            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
//               $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//            });
//            // xử lý nút 
//        $('.nut-slide ul li').removeClass('active_nut');
//        $('.nut-slide ul li:nth-child('+(vi_tri_hien_tai+1)+')').addClass('active_nut');
//         }else{
//            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
//               $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
//            });
//            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
//               $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//            });
//        // xử lý nút 
//        $('.nut-slide ul li').removeClass('active_nut');
//        $('.nut-slide ul li:nth-child(1)').addClass('active_nut');
//         }
//      });
//       $('.nut-slide ul li').click(function(event) {
//          clearInterval(autoLoad);
//          var vi_tri_hien_tai = $('.active_nut').index()+1;
//          var vi_tri_click = $(this).index()+1;
//          $('.nut-slide ul li').removeClass('active_nut');
//          $(this).addClass('active_nut');
//          if(vi_tri_click>vi_tri_hien_tai){
//             $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
//                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
//             });
//             $('.slide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
//                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//             });
//          }
//          if(vi_tri_click<vi_tri_hien_tai){
//             $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
//                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
//             });
//             $('.slide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
//                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
//             });
//          }
                
//       });
//  });


const countdown = () => {
    const countDate = new Date("October 1, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // How does time work 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate
    const textDay =Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = textDay
    document.querySelector('.hour').innerHTML = textHour
    document.querySelector('.minute').innerHTML = textMinute
    document.querySelector('.second').innerHTML = textSecond

}
setInterval(countdown,1000);