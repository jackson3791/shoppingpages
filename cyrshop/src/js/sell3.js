var  sell3_li = $('.sell3_box>ul').find('li');
     sell3_ul = $('.sell3_box').find('ul');
    width = $('.sell3_box>ul').width()
    sell3_ul.index = 0
    // console.log(sell3_li.length)

        $('.btn-prev').hide();
        $('.sell3_box>.btn-next').click(function(){
            sell3_ul.index ++;
            $('.btn-prev').show();
            $(".sell3_box>ul").animate({
                "marginLeft": -(sell3_ul.index*width)
            },500)
            // console.log(sell3_ul.index)

        if((sell3_ul.index+1)*5 == sell3_li.length){
        $('.btn-next').hide();
        $('.btn-prev').show();
        };
        })
    
        $('.sell3_box>.btn-prev').click(function(){
            sell3_ul.index--;
            $('.btn-next').show();
            $(".sell3_box>ul").animate({
                "marginLeft": -(sell3_ul.index*width)
            },500)
            // console.log(sell3_ul.index*width)
            if(sell3_ul.index == 0){
                $('.btn-next').show();
                $('.btn-prev').hide();
            };
        })

 

        
       
     

        
                