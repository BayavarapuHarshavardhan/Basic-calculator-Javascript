jokes = ["Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
  "Today, I asked my phone “Siri, why am I still single?” and it activated the front camera.",
  "My senior relatives liked to tease me at weddings, saying things like, “You’ll be next!” They stopped once I started doing the same to them at funerals.",
  "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me.",
  "If you were born in September, it's pretty safe to assume that your parents started their new year with a bang.",
  "Today was a terrible day. My ex got hit by a bus. And I lost my job as a bus driver!",
  "You don’t need a parachute to go skydiving. You need a parachute to go skydiving twice.",
  "My senior relatives liked to tease me at weddings, saying things like, “You’ll be next!” They stopped once I started doing the same to them at funerals.",
  "The doctor gave me one year to live, so I shot him. The judge gave me 15 years. Problem solved.",
  "If you were born in September, it's pretty safe to assume that your parents started their new year with a bang."
]
const func = ()=>{
    let a = document.getElementById("joke")
    console.log(a)
    let index = Math.floor((Math.random() * 10))
    console.log(index)
    a.innerHTML = jokes[index]
    a.nextElementSibling.style.color = "red"
}
setInterval(func,8000);
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let exptext='';
for(b of buttons){
    b.onclick=(e)=>{
      if(e.target.innerText=='X'){
        exptext+='*'
        screen.value=exptext  
      }
      else if(e.target.innerText=='C') {
        exptext=''
        screen.value=exptext
      }
      else if(e.target.innerText=='=') {
        screen.value = eval(exptext)
      }
      else{
        exptext+=e.target.innerText
        screen.value=exptext
      }
     
    }
}


