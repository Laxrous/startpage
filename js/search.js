//Mostly forked one-search-bar-multiple-search function 

var searchInput = document.getElementById('search');
var regex1 = new RegExp("^[^(^(http|https)://)]?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
var regex2 = new RegExp("^(^(http|https)://)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");

function search(query){
    if(query.substr(0,2) == "yt"){
        query = query.substr(3);
        window.location = "https://www.youtube.com/results?search_query=" + query;
    }
    else if(query.substr(0,3) == "/r/"){
        query = query.substr(3);
        window.location = "https://www.reddit.com/r/" + query;
    }
    else if(query.substr(0,3) == "mdl"){
        query = query.substr(4);
        window.location = "https://mydramalist.com/search?q=" + query;
    }
    else if(query.substr(0,2) == "ka"){
        query = query.substr(3);
        window.location = "http://kissasian.ch/Search/Drama/" + query;
    }
    else if(regex1.test(query)){
        window.location = "http://" + query;
    }
    else if(regex2.test(query)){
        window.location = query;
    }
    else {
        window.location="https://www.google.com/#q=" + query;
    }
}

//Focus to search bar on keypress
function handleKeydown(event) {
    var ignoredKeys = [9,13,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,91,92,93,112,113,114,115,116,117,118,119,120,121,122,123,144,145];
    if  (searchInput === document.activeElement || 
        ignoredKeys.includes(event.keyCode))
    return;
    searchInput.focus();
}
 
window.onload = function(){
    if(searchInput){
        searchInput.addEventListener('keypress', function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
    
    document.addEventListener('keydown', function(event) { handleKeydown(event); });
 
}