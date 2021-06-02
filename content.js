let myBody=document.getElementsByTagName("body")[0]
updateBody()

//elements
let asgarForm=document.getElementById("asgar-form")
let asgar=document.getElementById("asgar-cheater")
let closeBtn=document.getElementById("close-asgar")
let openBtn=document.getElementById("open-asgar")
let notes=document.getElementById("asgar-notes")


//helpers
function closeAsgar(){
    myBody.classList.remove("hide")
    asgar.style.display="none"
}
function openAsgar(){
    asgar.style.display="flex"
    asgar.style.flexDirection="column"
    myBody.classList.add("hide")
}
function updateBody(){
const insta=`https://i.pinimg.com/736x/c8/95/2d/c8952d6e421a83d298a219edee783167.jpg`
myBody.innerHTML=myBody.innerHTML+`<button id="open-asgar">Mocuzeni baslat <img id="insta" src=${insta}>@asgaraliyev</button><div id="asgar-cheater" class="display-column">
<button id="close-asgar">Bağla</button>
<form id="asgar-form" class="display-row">
  <input type="text" name="query" placeholder="Fayl linki">
    <input type="submit" value="Fayli deyisdir">
    </form>
    <iframe src="${localStorage.getItem("asgar-url")}" id="asgar-notes">
    </iframe>
</div>`

}


//listeners
closeBtn.addEventListener("click",()=>{
    closeAsgar()
})
openBtn.addEventListener("click",()=>{
    openAsgar()
})

asgarForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const url=e.target.query.value
    localStorage.setItem("asgar-url",url)
    updateBody()
})