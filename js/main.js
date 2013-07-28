parseData = function(data) {

    var families = _.chain(data)
        .groupBy(function(d){ return Number(d.family); })
        .value();
        console.log(families);

    _.each(families, makeCircle);

}

makeCircle = function(family) {

    $('#families').append('<div class="family"></div>');

    _.each(family, function(family, i) {
        $('.family').last().append('<div class="crayon"><div class="crayon-tip"></div></div>');
        $('.crayon').last().addClass('pos-' + i);
        $('.crayon').last().css('background', 'rgb(' + family.rgb + ')');
        $('.crayon').last().css('border-bottom-color', 'rgb(' + family.rgb + ')')
        $('.crayon-tip').last().css('border-bottom-color', 'rgb(' + family.rgb + ')');

        $('.crayon').last().on('click', function() {
            var rgb = this.style.background;
            $('.palette-item')[1].innerHTML = rgb;
            $('.palette-item')[1].style.backgroundColor=rgb;
        })
    });

}

parseData(crayons);