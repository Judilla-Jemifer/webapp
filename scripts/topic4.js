function requestJSON() {
    var xml = new XMLHttpRequest();
    
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
            var parsedData = JSON.parse(xml.responseText);
            getData(parsedData)
            
        }
    };
    xml.open("GET","https://openexchangerates.org/api/latest.json?app_id=36375bca15ed42aa919e91844e01a6f4");
    xml.send();
    
    function getData(data) {
        var txt = data.base;
        var conversion = data.rates.CAD;
    
    
        txt += "</p>";
         document.getElementById("jsonoutput").innerHTML = txt + " " + conversion;
        }
   
    }
    
    
    
