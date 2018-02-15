class pageButton{
	constructor(options){
		this.pageNum = options.pageNum;
		this.dom = undefined;
	}


	init(param){
		if(this.pageNum<=1)return;

		function createDiv(str,opt){
			let div = document.createElement('div');
			for(let i in opt){
				div.setAttribute(i,opt[i]); 
			}
			let style = 'flex:auto;border-style:outset solid;border-width:thin;'+((opt&&opt.style)?opt.style:'');
			console.log(style)
			div.setAttribute('style',style)
			div.innerText = str;
			return div
		}

		let outDiv = document.createElement('div');
		outDiv.setAttribute('style','display:flex');
		outDiv.appendChild(createDiv('Last Page',{id:'last'}))


		if(this.pageNum<=7){
			for(let i=0;i<this.pageNum;i++){
				outDiv.appendChild(createDiv(i,{id:i+'page'}))
			}
		}else{
			outDiv.appendChild(createDiv('...',{style:'display:invisiable',id:"front"}));
			for(let i=0;i<7;i++){
				outDiv.appendChild(createDiv(i,{id:i+"page"}))
			}
			outDiv.appendChild(createDiv('...',{id:"end"}));
		}
		outDiv.appendChild(createDiv('Next Page',{id:'next'}));
		this.dom = outDiv;
		param.appendChild(this.dom);
	}

	addEvent(){
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

let page = new pageButton(5);
let div = document.getElementById('test2');
page.init(div);
page.addEvent()
