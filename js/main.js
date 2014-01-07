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
                var paletteItem = document.createElement('div');
                var rgb = this.style.backgroundColor;

                paletteItem.className = 'palette-item ' + $(this).text().replace(/\s+/g, "-");
                paletteItem.style.backgroundColor=rgb;
                paletteItem.innerHTML = rgb;

                paletteItem.onclick = function() {
                    this.remove();
                    activeColors.pop(activeColors.indexOf($(this).text()));
                };

                $('#palette-container').append(paletteItem);
                activeColors.push($(this).text());
            }

            else {
                var colorClass = '.' + $(this).text().replace(/\s+/g, "-");
                $(colorClass).remove();
                activeColors.pop(activeColors.indexOf($(this).text()));
            }
        })
    });
}

parseData(crayons);
