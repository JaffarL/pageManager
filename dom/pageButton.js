class pageButton{
	constructor(options){
		this.pageNum = options.pageNum;
		this.mountDivName = options.str;
		this.currentPage = 1;
		this.dom = undefined;
	}

	mount(){
		let div = document.getElementById(this.mountDivName);
		div.appendChild(this.dom)
	}



	init(){
		if(this.pageNum<=1)return;

		function createDiv(str,opt){
			let div = document.createElement('div');
			for(let i in opt){
				div.setAttribute(i,opt[i]); 
			}
			let style = 'flex:auto;border-style:outset solid;border-width:thin;'+((opt&&opt.style)?opt.style:'');
			div.setAttribute('style',style)
			div.innerText = str;
			return div
		}

		let outDiv = document.createElement('div');
		outDiv.setAttribute('style','display:flex');
		outDiv.appendChild(createDiv('Last Page',{id:'last'}))


		if(this.pageNum<=7){
			for(let i=0;i<this.pageNum;i++){
				outDiv.appendChild(createDiv(i+1,{id:i+1+'page'}))
			}
		}else{
			outDiv.appendChild(createDiv('...',{style:'display:none',id:"front"}));
			for(let i=0;i<7;i++){
				outDiv.appendChild(createDiv(i+1,{id:i+1+"page"}))
			}
			outDiv.appendChild(createDiv('...',{id:"end"}));
		}
		outDiv.appendChild(createDiv('Next Page',{id:'next'}));
		this.dom = outDiv;
	}



	addEvent(tableObj){
		this.dom.onclick = function(e){
			let ev = e || window.event;
			let target = ev.target||ev.srcElement;
			switch(target.id){
				case 'front':
					// func call
					console.log(target.id)
					break;
				case 'end':
					//func call
					console.log(target.id)
					break;
				case 'last':
					//func call
					console.log(target.id)
					break;
				case 'next':
					//func call
					console.log(target.id)
					break;
				default:
					console.log(target.id)
					//func call;
			}
		}
	}



	update(){

	}
}
