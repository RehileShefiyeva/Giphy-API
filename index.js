var giphy = function () {
    $(".btn").on('click', function (e) {

        e.preventDefault()

        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=G3I9C1sSZqlunXM3Z38WXwJ98wyXeZFX&q=" + $(this).text() + "&limit=25&offset=0&rating=g&lang=en",
            method: "GET",
            success: function (e) {
                $(".giphy-section img").remove();
                for (let i = 0; i <= 10; i++) {
                    var img = $('<img id="newGif">');
                    img.attr('src', e.data[i].images.original.url);
                    img.appendTo('.giphy-section');
                }
            }
        });

    });
}

$(".buttons").on("click", giphy);
$("#submit").click(function () {
    var giphyName = $(".search-section input");
    var btn = $('<button class="btn" type="submit" id="animal">');
    btn.html(giphyName.val());
    $(".buttons").append(btn);
    giphyName.val();
});