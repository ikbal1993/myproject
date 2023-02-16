 const myvalue = ()=>{

    let user = document.getElementById("name").value
    console.log(user);
    if(user == "" || user == null){
        let text = "please Insert to play";
        // text.style.background="red";
        alert(text);
    }
    else
    {
    console.log(user)
    let com = Math.floor(Math.random()*3)
    let com1=["snake","water","gun"]
    
    
    const match=(com1,user)=>{
        if(user==com1){return "tied"}
        else if(user=="snake"&&com1=="gun"){return "loss"}
        else if(user=="snake"&&com1=="water"){return "won"}
        else if(user=="water"&&com1=="snake"){return "loss"}
        else if(user=="water"&&com1=="gun"){return "won"}
        else if(user=="gun"&&com1=="water"){return "loss"}
        else if(user=="gun"&&com1=="snake"){return "won"}
    }
    let result = match(com1[com],user)
    
    if(result=="loss"){
        document.getElementById("demo1").innerHTML="<b>OH !! Sorry You loose this game</b>"
        document.getElementById("demo1").style.background="red"
        document.getElementById("demo1").style.color="white"
    }
    else if(result=="won"){document.getElementById("demo1").innerHTML="<b>Great !! You won this game</b>"
    document.getElementById("demo1").style.background="green"
    document.getElementById("demo1").style.color="white"
    }
    else if(result=="tied"){document.getElementById("demo1").innerHTML="<b>Cheers !! No is looser</b>"
    document.getElementById("demo1").style.background="brown"
    document.getElementById("demo1").style.color="white"
    }
    
    document.getElementById("demo2").style.background="silver"
    document.getElementById("demo2").style.color="black"
    document.getElementById("demo2").innerHTML=
    "<b>The Computer Generated card is</b> "+"<b>"+com1[com]+"</b>"
       }
    }
    
    
    
    
    