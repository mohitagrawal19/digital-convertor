let r=document.querySelector('.me');
console.log(r);
let p=document.querySelector('.ce');
console.log(p);
r.addEventListener('input',qwe);
function qwe(){
	let m=this.value;
	let c=m*12;
	p.value=c;
}
p.addEventListener('input',abc);
function abc(){
	let cet=this.value;
	let met=cet/12;
	r.value=met;
}