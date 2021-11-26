function copyToClipboard(text) {
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("URL Copied.");
}

function mailto() {
    window.location.href = "mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://www.sunitech.eu/.";
}

var cookieList = function(cookieName) {
    
    var cookie = $.cookie(cookieName);
    var items = cookie ? cookie.split(/,/) : new Array();
    
    return {

        "add": function(val) {           
            items.push(val);          
            $.cookie(cookieName, items.join(','), {
                            expires : 30,
                            
                            path    : '/',
                            
                            domain  : 'localhost',
                            
                            secure  : true
            });
        },

        "remove": function (val) {           
            indx = items.indexOf(val); 
            if(indx!=-1) items.splice(indx, 1); 
            $.cookie(cookieName, items.join(','));
        },

        "clear": function() {
            items = null;          
            $.cookie(cookieName, null);
        },

        "items": function() {
            return items;
        }
    }
} 

$(document).ready(function() {
    if(typeof $.cookie("history") !== undefined) {
        var historyList = new cookieList("history");
    }

    var title = $(document).find("title").text();
    
    historyList.add(title);

    var pageArray = new Array();

    pageArray = historyList.items();

    console.log(pageArray);

    const distinctPage = [...new Set(pageArray)];

    console.log(distinctPage);

    for (var key in distinctPage) {
        $('#table').append('<tr><td>' + distinctPage[key] + '</td></tr>');
    }
});



