$.circleProgress.defaults.size = 160;
$.circleProgress.defaults.startAngle = -Math.PI/2;
$.circleProgress.defaults.thickness = 14;

$('.carousel').carousel({
    interval: false
}) 



var c1 = $('.first.circle'),
    c2 =$('.second.circle'),
    c3 = $('.third.circle'),
    c4 =$('.forth.circle');
    inited = false,



c1.circleProgress({
    fill:{color: "#3c989e"}
})

c2.circleProgress({
    fill: {color: "#ed5276"}
})

c3.circleProgress({
    fill: {color: "#5db5a4"}  
})

c4.circleProgress({
    fill: {color: "#f57a82"}  
})

c1.appear({ force_process: true });

c1.on('appear', function() {
  if (!inited) {
    
    c1.circleProgress({ value: 0.9 }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2));
    });

    c2.circleProgress({ value: 0.75 }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2));
    });

    c3.circleProgress({ value: 0.7 }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2));
    });

    c4.circleProgress({ value: 0.85 }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2));
    });
        
    inited = true;
  }
});

$('label').toggle();

$("#sbm").click (function() {
    
    var postLenght = $('.message').val().length;
    if (!postLenght) {
        $('.form-group.mess').toggleClass('has-error');
        $('label').toggle();           
    }
})
    





