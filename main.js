getJson();

function getJson() {

    var info = "info.json";

    $.getJSON(info, function (data) {

        //        console.log(data);

        var allData = data.products

        //        console.log(allData);

        createElement(allData);
        createTable(allData);
        createList(allData);
        createGrid(allData);
    });

}

function createElement(allData) {

    //    var thirdElement = allData[2];

    //        console.log(thirdElement);

    var $area1 = $('<div class="mp3"/>');
    var $name = $('<div class="name"/>');
    var $image = $('<div class="image"/>');
    var $descr = $('<div class="descr"/>');
    var $price = $('<div class="price"/>');

    var name = allData[2].name;
    var image = "<img src=" + allData[2].image + ">";
    var descr = allData[2].description;
    var price = allData[2].price + "€"

    $name.append(name);
    $image.append(image);
    $descr.append(descr);
    $price.append(price);
    $area1.append($name)
        .append($image)
        .append($descr)
        .append($price);

    $(".thirdEL").append($area1);

}

function createTable(allData) {

    //    console.log(allData);

    $('.tbody').empty();

    $.each(allData, function (key, value) {

        var row = document.createElement("tr");

        for (key in value) {
            row.insertCell().innerHTML = value[key];
        }

        $('.tbody').append(row);

        $('td:nth-child(4),th:nth-child(4)').hide();

    });

}

function createList(allData) {

    //        console.log(allData);
    
    $.each(allData, function(key,value){
        
    var url = value.image;

    var $area3 = $('<ul class="outer"/>');
    var $area2 = $('<li class="outof"/>')
    var $list1 = $('<ul class="inner"/>')
    var $name = $('<li class="nameL"/>');
    var $descr = $('<li class="descrL"/>');
    var $price = $('<li class="priceL"/>');

    var name = $("<a/>").attr("href", url).text(value.name);
    var descr = value.description;
    var price = value.price + "€";
        
        $name.append(name);
        $descr.append(descr);
        $price.append(price);
        $list1.append($price)
                .append($descr);
        $area2.append($name);
        $area2.append($list1);
        $area3.append($area2);
        
        $('.list').append($area3);
        

   

    });
}

function createGrid(allData) {

    $.each(allData, function (key, value) {

        var $flipcontainer = $('<div class="flip-container item"/>');
        var $flipper = $('<div class="flipper"/>');
        var $front = $('<div class="front"/>');
        var $back = $('<div class="back"/>');
        var $name = $('<div class="nameG"/>');
        var $image = $('<div class="imageG"/>');
        var $descr = $('<div class="descrG"/>');
        var $price = $('<div class="priceG"/>');

        var image = "<img src=" + value.image + ">";
        var name = value.name;
        var descr = value.description;
        var price = value.price + "€";

        //        console.log(descr);

        $image.append(image);
        $name.append(name);
        $descr.append(descr);
        $price.append(price);
        $front.append($image);
        $back.append($name)
            .append($descr)
            .append($price);
        $flipper.append($front)
            .append($back);
        $flipcontainer.append($flipper);

        $('.grid').append($flipcontainer);

    });
}
