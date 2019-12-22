

function convert(){


//AJAX requesting a JSON file using currency API   
    
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
        var curr = document.getElementById('currency').value;
        var amount = parseFloat(document.getElementById('amt').value);
        var txt = data.base;
        
        if (curr == "CAD") {
        var rate = data.rates.CAD;
        } else if (curr == "AUD") {
         var rate = data.rates.AUD;   
        } else if (curr == "GBP") {
         var rate = data.rates.GBP;   
        } else if (curr == "JPY") {
         var rate = data.rates.JPY;   
        } else if (curr == "PHP") {
         var rate = data.rates.PHP;   
        } else if (curr == "COP") {
         var rate = data.rates.COP;   
        } else if (curr == "ALL") {
         var rate = data.rates.ALL;   
        } else if (curr == "AFN") {
         var rate = data.rates.AFN;   
        }
    
        
        var conversion = amount*rate.toFixed(4);
          
        
         document.getElementById("output").innerHTML = amount + " " + txt + " = " +  conversion + " " + curr;
       
        }
    
}

function addcurr() {
    var newcurr = document.getElementById('addcurrency').value;
    var c = document.getElementById("currency");
    var option = document.createElement("option");
    option.text = newcurr;
    c.add(option);
}