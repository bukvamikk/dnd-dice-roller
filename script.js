$(document).ready(function () {
    let increaseButton = $('.increase');
    let decreaseButton = $('.decrease');

    increaseButton.click((e) => {
        let diceType = $(e.currentTarget).parents().data('dice');
        console.log(diceType);
        let dicePieces = Number($(`[data-counter="${diceType}"]`).html());

        $(`[data-counter="${diceType}"]`).html(dicePieces + 1)


    });

    decreaseButton.click((e) => {
        let diceType = $(e.currentTarget).parents().data('dice');
        let dicePieces = Number($(`[data-counter="${diceType}"]`).html());

        $(`[data-counter="${diceType}"]`).html((dicePieces - 1))

        if (dicePieces - 1 === -1) {
            $(`[data-counter="${diceType}"]`).html('0');
            dicePieces = 0;
        }

    });
});