const heading= document.querySelector(".heading");
const arr=["App Developer","Freelincer","Web Designer","Web Developer"];
let arrEelement=0;
let elementlength=0;
function type(){
    elementlength++;
    heading.innerHTML=`I am a ${arr[arrEelement].slice(0,elementlength)}`
    if(elementlength==arr[arrEelement].length){
        elementlength=0;
        arrEelement++;
        
    }
    if(arrEelement == arr.length){
        arrEelement=0
    }
    setTimeout(type,150);
}
type();