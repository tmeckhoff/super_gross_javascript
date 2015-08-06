var preAdjective = []; //arrays declared globally
var adjective = [];
var noun = [];

function randomIndex (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min); //generic random math function
}

$(document).ready(function (){
    $('.ventBox').append("<p>retrieving data...</p>");  //lets user know data is being sent for
    $.when(                                             //when function that doesn't let button be appended
        console.log("When starting"),                   //until data is received
        $.ajax({
            url: "/data/preadjective",
            success: function(data){
                $.each(data, function() {
                    preAdjective.push(this.name);
                });
            }
        }),
        $.ajax({
            url: "/data/adjective",
            success: function(data){
                $.each(data, function() {
                    adjective.push(this.name);
                });
            }
        }),
        $.ajax({
            url: "/data/noun",
            success: function(data){
                $.each(data, function() {
                    noun.push(this.name);
                });
            }
        })
    ).then(function() {
        console.log("When in the... then");
        $('.ventBox').children().remove();
        $('body').prepend('<button class="ventButton">Vent? ... VENT!!!!1</button>');
    });

    $('body').on('click','.ventButton', function() {//add data attributes
        $('.ventBox').children().remove();
        var preAdjectiveApp = preAdjective[randomIndex(0, (preAdjective.length - 1))];
        var adjectiveApp = adjective[randomIndex(0, (adjective.length- 1))];
        var nounApp = noun[randomIndex(0, (noun.length- 1))];
        $('.ventBox').append('<p>' + preAdjectiveApp + ' ' + adjectiveApp + ' ' + nounApp + '</p>');
        $('.ventBox').append('<p class="insult">your moms a(n) ' + nounApp + '</p>');
    });
});