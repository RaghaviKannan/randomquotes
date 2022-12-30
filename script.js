function getquote(){
    var data = fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    var quote=document.getElementById("quote");
    quote.setAttribute("class","card")
    data.then(d=>{return d.json()}).then(res=>{
        quote.innerHTML=res.text;
    })
}