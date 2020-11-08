const $d=document;
const name=["visa.png","paypal.png","mastercard.png"];

$d.addEventListener("click",(e)=>{
   console.log(e.target.innerHTML);
   if(e.target.matches("#paso")){
    const $select=document.getElementById("paso");
    const $img=document.querySelector(".form-card__img");
    console.log($select.value); 
    switch($select.value){
        case "visa":
            $img.setAttribute("src",`asset/img/${name[0]}`);
        break;
        case "paypal":
            $img.setAttribute("src",`asset/img/${name[1]}`);
        break;
        case "mastercard":
            $img.setAttribute("src",`asset/img/${name[2]}`);
        break;
    }
   }
 
});
$d.addEventListener("submit",(e)=>{
    e.preventDefault();
})

