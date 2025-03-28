document.getElementById("btn").addEventListener("click",() =>{
    const fact = document.getElementById("fun-fact-text");
    if(fact.style.display === "none"){
        fact.style.display = "block";
    }else{
        fact.style.display = "none"
    }
});
