var zoom = 15;
var latitude = 41.038966;
var longitude = 28.984451;
var customMap=true;


$(document).ready(function() {
     if(customMap){setupCustomMap();}else{setupMap();}
     function setupMap(){
       
        if($('.map-holder').length>0){
            $('.map').gmap3({
                map:{
                    options:{
                        center:[latitude, longitude],
     
                        zoom:zoom,
                        mapTypeControl: true,
   
                        navigationControl: true,
                        scrollwheel: true,
                        streetViewControl: false
                    }
                },
                marker:{
                    latLng:[latitude, longitude]
                }
            });
        }
    }
    
    
function setupCustomMap(){
      if($('.map-holder').length>0){
    var styles = [ {
        featureType: 'road.highway', 
        elementType: 'geometry', 
        stylers: [ {
            hue: '#13ACD9'
        }, {
            saturation: -16
        }, {
            lightness: -28
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'road', 
        elementType: 'all', 
        stylers: [ {
            hue: '#3CC6EE'
        }, {
            saturation: -16
        }, {
            lightness: -9
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'water', 
        elementType: 'geometry', 
        stylers: [ {
            hue: '#cccccc'
        }, {
            saturation: -100
        }, {
            lightness: 17
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'transit', 
        elementType: 'all', 
        stylers: [ {
            hue: '#1BBCEB'
        }, {
            saturation: 84
        }, {
            lightness: -32
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'landscape', 
        elementType: 'all', 
        stylers: [ {
            hue: '#119DC6'
        }, {
            saturation: 78
        }, {
            lightness: -53
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'poi', 
        elementType: 'all', 
        stylers: [ {
            hue: '#1BBCEB'
        }, {
            saturation: 72
        }, {
            lightness: -34
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'road.local', 
        elementType: 'all', 
        stylers: [ {
            hue: '#ffffff'
        }, {
            saturation: -100
        }, {
            lightness: 100
        }, {
            visibility: 'off'
        } ]
    },{
        featureType: 'road.highway', 
        elementType: 'labels', 
        stylers: [ {
            hue: '#1496BC'
        }, {
            saturation: -19
        }, {
            lightness: -36
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'road', 
        elementType: 'labels', 
        stylers: [ {
            hue: '#1496BC'
        }, {
            saturation: -19
        }, {
            lightness: -36
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'road.local', 
        elementType: 'all', 
        stylers: [ {
            visibility: 'off'
        } ]
    } ];
    var options = {
        mapTypeControlOptions: {
            mapTypeIds: [ 'Styled']
        },
        center: new google.maps.LatLng(latitude, longitude),
        zoom: zoom,
        mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');




    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, {
        name: 'Styled'
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude), 
        map: map
    });
    map.mapTypes.set('Styled', styledMapType);


}
}
    
 $("a[data-rel^='prettyPhoto']").prettyPhoto();
 if($('html').hasClass('ie8')){
  counter=0;
      $('.skill').each(function(){
            var el=$(this);
            var level=el.find('input').attr('value');
           
                el.append("<div class='bar-holder'><div class='progress-bar'></div></div>")
           
        
            el.find('.progress-bar').delay(counter*100).animate({width:level+'%'}, 1500,'easeOutBack')
            

            
            counter++;
        }); 
 }else{
      $(".skill input").knob({
        readOnly:true,
        bgColor:'#CACACA',
        fgColor:'#02AFF1',
            displayPrevious :false,
            thickness:.06,
           width:150,
           height:150,
            displayInput:false
            
         
     });
 }

  $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
  
   $("#portfolio-slides").carousel();
    
     $('.prev-btn').click(function(){
            $("#portfolio-slides").carousel('prev');
     });
      $('.next-btn').click(function(){
            $("#portfolio-slides").carousel('next');
     });
     
$('.nav-menu a').address($(this).attr('href'));

    $.address.change(function(event) {  
     
    var pageID=event.value.split('/')[1];
   if(pageID!=''){
    
     var el=$(".nav-menu [href=#"+pageID+"]");
     
        $('.nav-menu .active').removeClass('active');
        el.parent().addClass('active');
     $('select.nav option').each(function(){
        
         var val=$(this).val();
      
         if(val==="#"+pageID){
              $('select.nav option:selected').removeAttr('selected');
              $(this).attr('selected','selected');
         }
        
     });
    
    
     scrollToSection("#"+pageID);
   }    
}); 

 $('select.nav').change(function(){
      var loc=($(this).find('option:selected').val());
     
     scrollToSection(loc);
  })
  
  checkContactForm();
function checkContactForm(){
   
        //  triggers contact form validation
        var formStatus=$(".contact-form").validate();
        //   ===================================================== 

        //sending contact form
        $(".contact-form").submit(function(e){
            e.preventDefault();
            if(formStatus.errorList.length===0)
            { 
                $(".contact-form .submit").fadeOut(function(){
                    $('#loading').css('visibility','visible');
                    $.post('submit.php',$(".contact-form").serialize(),
				
                        function(data){
                            $(".contact-form input,.contact-form textarea").not('.submit').val('');
                                
                            $('.message-box').html(data);
						
						
                            $('#loading').css('visibility','hidden');
                            $(".contact-form .submit").removeClass('disabled').css('display','block');
                        }
				
                        ); 
                });     
 
				
            }
			
        });	
			
        }
function scrollToSection(destSection){
  
     
    $('html, body').stop().animate({
            scrollTop: $(destSection).offset().top -50
        }, 1500,'easeInOutExpo');
 
}

 $('.nav-menu a').bind('click',function(event){
        var clickedMenu = $(this);
        $('.nav-menu .active').toggleClass('active');
clickedMenu.parent().toggleClass('active');
  
        scrollToSection(clickedMenu.attr('href'));

        event.preventDefault();
    });



 
});


// Sticky Nav
$(window).scroll(function(e) {
    var nav_anchor = $('.top-menu').height();

    if ($(this).scrollTop() >= nav_anchor && $('.top-menu').css('position') != 'fixed') 
    {    
         
        $('.top-menu').css({
            'position': 'fixed',
            'top': '-60px'
        }).addClass('splited');
        
        $('.top-menu').stop(true,true).animate({
            
            top: 0
        })

      
    } 
    else if ($(this).scrollTop() < nav_anchor && $('.top-menu').css('position') != 'relative') 
    {   
      
    

 


    $('.top-menu').css({
            'position': 'relative',
            'top':0
        }).removeClass('splited'); 

       
    }
});