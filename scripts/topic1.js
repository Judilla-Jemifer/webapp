

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
        } else if (curr == "ARS") {
         var rate = data.rates.ARS;   
        } else if (curr == "AWG") {
         var rate = data.rates.AWG;   
        } else if (curr == "AZN") {
         var rate = data.rates.AZN;   
        } else if (curr == "BSD") {
         var rate = data.rates.BSD;   
        } else if (curr == "BBD") {
         var rate = data.rates.BBD;   
        } else if (curr == "BYN") {
         var rate = data.rates.BYN;   
        } else if (curr == "BZD") {
         var rate = data.rates.BZD;   
        } else if (curr == "BMD") {
         var rate = data.rates.BMD;   
        } else if (curr == "BOB") {
         var rate = data.rates.BOB;   
        } else if (curr == "BAM") {
         var rate = data.rates.BAM;   
        } else if (curr == "BWP") {
         var rate = data.rates.BWP;   
        } else if (curr == "BGN") {
         var rate = data.rates.BGN;   
        } else if (curr == "BRL") {
         var rate = data.rates.BRL;   
        } else if (curr == "BND") {
         var rate = data.rates.BND;   
        } else if (curr == "KHR") {
         var rate = data.rates.KHR;   
        } else if (curr == "KYD") {
         var rate = data.rates.KYD;   
        } else if (curr == "CLP") {
         var rate = data.rates.CLP;   
        } else if (curr == "CNY") {
         var rate = data.rates.CNY;   
        } else if (curr == "CRC") {
         var rate = data.rates.CRC;   
        } else if (curr == "HRK") {
         var rate = data.rates.HRK;   
        } else if (curr == "CUP") {
         var rate = data.rates.CUP;   
        } else if (curr == "CZK") {
         var rate = data.rates.CZK;   
        } else if (curr == "DKK") {
         var rate = data.rates.DKK;   
        } else if (curr == "DOP") {
         var rate = data.rates.DOP;   
        } else if (curr == "XCD") {
         var rate = data.rates.XCD;   
        } else if (curr == "EGP") {
         var rate = data.rates.EGP;   
        } else if (curr == "SVC") {
         var rate = data.rates.SVC;   
        } else if (curr == "EUR") {
         var rate = data.rates.EUR;   
        } else if (curr == "FKP") {
         var rate = data.rates.FKP;   
        } else if (curr == "FJD") {
         var rate = data.rates.FJD;   
        } else if (curr == "GHS") {
         var rate = data.rates.GHS;   
        } else if (curr == "GIP") {
         var rate = data.rates.GIP;   
        } else if (curr == "GTQ") {
         var rate = data.rates.GTQ;   
        } else if (curr == "GGP") {
         var rate = data.rates.GGP;   
        } else if (curr == "GYD") {
         var rate = data.rates.GYD;   
        } else if (curr == "HNL") {
         var rate = data.rates.HNL;   
        } else if (curr == "HKD") {
         var rate = data.rates.HKD;   
        } else if (curr == "HUF") {
         var rate = data.rates.HUF;   
        } else if (curr == "ISK") {
         var rate = data.rates.ISK;   
        } else if (curr == "INR") {
         var rate = data.rates.INR;   
        } else if (curr == "IDR") {
         var rate = data.rates.IDR;   
        } else if (curr == "IRR") {
         var rate = data.rates.IRR;   
        } else if (curr == "IMP") {
         var rate = data.rates.IMP;   
        } else if (curr == "ILS") {
         var rate = data.rates.ILS;   
        } else if (curr == "JMD") {
         var rate = data.rates.JMD;   
        } else if (curr == "JEP") {
         var rate = data.rates.JEP;   
        } else if (curr == "KZT") {
         var rate = data.rates.KZT;   
        } else if (curr == "KPW") {
         var rate = data.rates.KPW;   
        } else if (curr == "KRW") {
         var rate = data.rates.KRW;   
        } else if (curr == "KGS") {
         var rate = data.rates.KGS;   
        } else if (curr == "LAK") {
         var rate = data.rates.LAK;   
        } else if (curr == "LBP") {
         var rate = data.rates.LBP;   
        } else if (curr == "LRD") {
         var rate = data.rates.LRD;   
        } else if (curr == "MKD") {
         var rate = data.rates.MKD;   
        } else if (curr == "MYR") {
         var rate = data.rates.MYR;   
        } else if (curr == "MUR") {
         var rate = data.rates.MUR;   
        } else if (curr == "MXN") {
         var rate = data.rates.MXN;   
        } else if (curr == "MNT") {
         var rate = data.rates.MNT;   
        } else if (curr == "MZN") {
         var rate = data.rates.MZN;   
        } else if (curr == "NAD") {
         var rate = data.rates.NAD;   
        } else if (curr == "NPR") {
         var rate = data.rates.NPR;   
        } else if (curr == "ANG") {
         var rate = data.rates.ANG;   
        } else if (curr == "NZD") {
         var rate = data.rates.NZD;   
        } else if (curr == "NIO") {
         var rate = data.rates.NIO;   
        } else if (curr == "NGN") {
         var rate = data.rates.NGN;   
        } else if (curr == "NOK") {
         var rate = data.rates.NOK;   
        } else if (curr == "OMR") {
         var rate = data.rates.OMR;   
        } else if (curr == "PKR") {
         var rate = data.rates.PKR;   
        } else if (curr == "PAB") {
         var rate = data.rates.PAB;   
        } else if (curr == "PYG") {
         var rate = data.rates.PYG;   
        } else if (curr == "PEN") {
         var rate = data.rates.PEN;   
        } else if (curr == "PLN") {
         var rate = data.rates.PLN;   
        } else if (curr == "QAR") {
         var rate = data.rates.QAR;   
        } else if (curr == "RON") {
         var rate = data.rates.RON;   
        } else if (curr == "RUB") {
         var rate = data.rates.RUB;   
        } else if (curr == "SHP") {
         var rate = data.rates.SHP;   
        } else if (curr == "SAR") {
         var rate = data.rates.SAR;   
        } else if (curr == "RSD") {
         var rate = data.rates.RSD;   
        } else if (curr == "SCR") {
         var rate = data.rates.SCR;   
        } else if (curr == "SGD") {
         var rate = data.rates.SGD;   
        } else if (curr == "SBD") {
         var rate = data.rates.SBD;   
        } else if (curr == "SOS") {
         var rate = data.rates.SOS;   
        } else if (curr == "ZAR") {
         var rate = data.rates.ZAR;   
        } else if (curr == "LKR") {
         var rate = data.rates.LKR;   
        } else if (curr == "SEK") {
         var rate = data.rates.SEK;   
        } else if (curr == "CHF") {
         var rate = data.rates.CHF;   
        } else if (curr == "SRD") {
         var rate = data.rates.SRD;   
        } else if (curr == "SYP") {
         var rate = data.rates.SYP;   
        } else if (curr == "TWD") {
         var rate = data.rates.TWD;   
        } else if (curr == "THB") {
         var rate = data.rates.THB;   
        } else if (curr == "TTD") {
         var rate = data.rates.TTD;   
        } else if (curr == "TRY") {
         var rate = data.rates.TRY;   
        } else if (curr == "TVD") {
         var rate = data.rates.TVD;   
        } else if (curr == "UAH") {
         var rate = data.rates.UAH;   
        } else if (curr == "UYU") {
         var rate = data.rates.UYU;   
        } else if (curr == "UZS") {
         var rate = data.rates.UZS;   
        } else if (curr == "VEF") {
         var rate = data.rates.VEF;   
        } else if (curr == "VND") {
         var rate = data.rates.VND;   
        } else if (curr == "YER") {
         var rate = data.rates.YER;   
        } else if (curr == "ZWD") {
         var rate = data.rates.ZWD;   
        } else {
            document.getElementById("output").innerHTML = "Sorry, we don't seem to have the conversion value of that currency in our database. Please check your code and try again."
        }
    
        
        var conversion = amount*rate.toFixed(4);
          
        
         document.getElementById("output").innerHTML = amount + " " + txt + " = " +  conversion + " " + curr;
        
        document.getElementById("outputdiv").style.animation = "first 4s infinite";
       
        }
    
}

function addcurr() {
    var newcurr = document.getElementById('addcurrency').value;
    var c = document.getElementById("currency");
    var option = document.createElement("option");
    option.text = newcurr;
    c.add(option);
}