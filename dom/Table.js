/*

*	create a table that contains specific data
*	@param {str} str 		The Id of the target div which you want to insert the table to
*	@param {object} obj 	The object which contains title and data 
*	@param {number} num 	How many columns of data do you want to show in each page
	
*/
class Table{
	constructor(options){
		this.rowNum = options.num;
		this.pageNum = options.arr.length/this.rowNum||0;
		this.pageNum = Math.ceil(this.pageNum);
		this.columnName = options.title||"";
		this.columnNum = this.columnName.length;
		this.targetDiv = document.getElementById(options.str);
		this.data = options.arr;
	}

	getPageNum(){
		return this.pageNum;
	}

	groupData(pageNum){
		let temp = (pageNum-1)*this.rowNum;
		let tempArr = [];
		for(let i=0;i<this.rowNum;i++){
			tempArr.push(this.data[i])
		}
		return tempArr;
	}

	update(param){
		data = groupData(param)
		try{
			if(data.length>this.rowNum) throw('data length overflow');
		}catch(e){
			throw(e)
		}
		for(let i=0;i<this.rowNum;i++){
			if(data[i]==undefined){
				break;
			}
			for(let j=0;j<this.columnNum;j++){
				let tempth = document.getElementById(i.toString()+j.toString());
				tempth.innerText = data[i][j]
			}
		}
	}

	create(){
		this.table = document.createElement('table');
		this.title = document.createElement('tr');
		for(let i=0;i<this.columnNum;i++){
			let tempth = document.createElement('th');
			tempth.innerText = this.columnName[i];
			this.title.appendChild(tempth)
		}
		this.table.appendChild(this.title)



		for(let i=0;i<this.rowNum;i++){
			let tempte = document.createElement('tr');
			for(let j=0;j<this.columnNum;j++){
				let tempth = document.createElement('th')
				tempth.innerText = this.data[i][j]
				tempth.setAttribute('id',i.toString()+j.toString())
				tempte.appendChild(tempth)
			}
			tempte.setAttribute('id',i);
			this.table.appendChild(tempte)
		}
		this.targetDiv.appendChild(this.table)
	}

}



