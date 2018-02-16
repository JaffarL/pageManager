
let arr = {
	title:['name','age','size'],
	arr:[['lyz','18','18'],['xyq','18','C'],
	['lyz','19','18'],['xyq','19','C'],
	['lyz','20','18'],['xyq','20','C'],
	['lyz','21','18'],['xyq','18','C'],
	['lyz','22','18'],['xyq','18','C'],
	['lyz','23','18'],['xyq','18','C'],
	['lyz','24','18'],['xyq','18','C'],
	['lyz','25','18'],['xyq','18','C'],
	['lyz','26','18'],['xyq','18','C'],
	['lyz','27','18'],['xyq','18','C']],  
	str:'test',
	num:3
}
// let date =[['lyz','19','18'],['xyq','19','C']]
// let table = new Table(arr);
// table.create();
// table.update(date);


// let page = new pageButton(5);
// let div = document.getElementById('test2');
// page.init(div);
// page.addEvent()

;(function run(param){
	let table = new Table(param);
	table.create();
	// table.update(date);
	let page = new pageButton({pageNum:table.getPageNum(),str:param.str});
	page.init();
	page.mount();
	page.addEvent(table);
})(arr);
