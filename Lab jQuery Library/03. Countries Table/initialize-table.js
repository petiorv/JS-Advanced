function initializeTable() {
    $('#createLink').click(function (){
        let countyName = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        appendCountryToTable(countyName, capital);
    });



    function appendCountryToTable(countryName, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(countryName))
            .append($('<td>').text(capital));
        let upLink = $('<a href=#>[Up]</a>')
            .click(moveUp);
        let delLink = $('<a href=#>[Delete]</a>')
            .click(deleteItem);
        let downLink = $('<a href="#">[Down]</a>')
            .click(down)
        tr.append($('<td>')
            .append(upLink)
            .append(' ')
            .append(downLink)
            .append(' ')
            .append(delLink)
        );

        //tr.append(actionsTd);

        $('#countriesTable').append(tr);
    }

    let countriesTable = $('#countriesTable');
    $('#createLink').on('click', createRow);
    createRow('', 'Bulgaria', 'Sofia');
    createRow('', 'Germany', 'Berlin');
    createRow('', 'Russia', 'Moscow');


    function deleteItem() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixRowActions();
        })

    }
    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function (){
            row.prev().insertAfter(row);
            row.fadeIn();
            fixRowActions();
        });


    }

    function down() {
        let row = $(this).parent().parent();
        row.fadeOut(function (){
            row.next().insertBefore(row);
            row.fadeIn();
            fixRowActions();
        });

    }

    function fixRowActions() {
        let rows= $('#countriesTable tr').toArray();
        $(rows).find('td a').show();
        $(rows[2]).find('td a:contains("Up")').hide();
        $(rows[rows.length-1]).find("td a:contains('Down')").hide()
    }

}