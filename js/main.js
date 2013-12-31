parseData = function(data) {

    var families = _.chain(data)
        .groupBy(function(d){ return Number(d.family); })
        .value();

    _.each(families, makeFamily);

}

makeFamily = function(family) {

    var activeColors = [];

    $('#families').append('<div class="family"></div>');

    _.each(family, function(family, i) {
        $('.family').last().append('<div class="crayon"><div class="crayon-text"></div><div class="crayon-tip"></div></div>');
        // $('.crayon').last().addClass('pos-' + i);
        $('.crayon').last().css('background', 'rgb(' + family.rgb + ')');
        $('.crayon').last().css('border-left-color', 'rgb(' + family.rgb + ')');
        $('.crayon-text').last().html(family.name);
        $('.crayon-tip').last().css('border-left-color', 'rgb(' + family.rgb + ')');

        $('.crayon').last().on('click', function() {
            if (!_.contains(activeColors, $(this).text())) {
                var palette_item = document.createElement('div');
                var rgb = this.style.backgroundColor;

                palette_item.className = 'palette-item';
                palette_item.style.backgroundColor=rgb;
                palette_item.innerHTML = rgb;

                palette_item.onclick = function() {
                    this.remove();
                    activeColors.pop(activeColors.indexOf($(this).text()));
                };

                $('#palette-container').append(palette_item);
                activeColors.push($(this).text());
            }
        })
    });
}

parseData(crayons);
