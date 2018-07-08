$(function(){
    $('.navbar-toggle').on('click',function(){
        $('.dropdown .dropdown-toggle').attr('data-toggle','dropdown');
    });

  lubo();
})


function lubo(){
    var swiper = new Swiper('.swiper-container', {
        paginationType: 'fraction',
        nextButton: '#next',
        prevButton: '#prev',
        onSlideChangeEnd: function(swiper){
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            $('.b-img').removeClass('active');
            $('.b-img').eq(swiper.activeIndex).addClass('active');
          }
    
    });
    
    $('#next').on('click',btn);
    $('#prev').on('click',btn);
}

//绑定按扭事件
function btn(){
    $('.b-img').removeClass('active');
    $(this).addClass('active');
}