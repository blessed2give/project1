var table_data =
[ { first_name : 'Rose',
    last_name  : 'Tyler',
    home       : 'Earth' },
 { first_name : 'Zoe',
    last_name  : 'Heriot',
    home       : 'Space Station W3'},
 { first_name : 'Jo',
    last_name  : 'Grant',
    home       : 'Earth'},
 { first_name : 'Leela',
    last_name  : null,
    home       : 'Unspecified'},
 { first_name : 'Romana',
    last_name  : null,
    home       : 'Gallifrey'},
 { first_name : 'Clara',
    last_name  : 'Oswald',
    home       : 'Earth'},
 { first_name : 'Adric',
    last_name  : null,
    home       : 'Alzarius'},
 { first_name : 'Susan',
    last_name  : 'Foreman',
    home       : 'Gallifrey'} ];

var createTableRow = function(firstname, lastname, home) {
    var template =
    '<tr class="data-item">'
    + '   <td class="first-name">' + firstname +'</td>'
    + '   <td class="last-name">' + lastname + '</td>'
    + '   <td class="home">' + home + '</td>'
    + '</tr>'
    ;
    
    return template;
};

var setTableData = function(data_set) {
    var dataTable = document.getElementsByClassName('table-data')[0];
    
    for (var i = 0; i < table_data.length; i++) {
        dataTable.innerHTML += createTableRow(data_set[i].first_name, data_set[i].last_name, data_set[i].home);
    }
};

window.onload = function() {
    setTableData(table_data)
}
