/**
 * Created by 10212106 on 2017/10/18.
 */

function pageManager() {
    this.columNum = 0
    this.num = 20
    pageManager.prototype.setcolumNum = function (num) {  //设置数据条目数
        this.columNum = num
    }
    pageManager.prototype.getpageNum = function () {   //获得总页数
        return Math.ceil(this.columNum / this.num)
    }
    pageManager.prototype.getCurrentData = function (arr, pageNum) {      //获得当前页面数据
        var dataArray = []
        var count = 0
        while (count < 20) {
            if (!arr[(pageNum - 1) * 20 + count]) {
                break;
            }
            dataArray.push(arr[(pageNum - 1) * 20 + count])
            count++
        }
        return dataArray
    }
    var setLabelClass = function (id, Class) {
        let labelObj = document.getElementById("page" + id.toString());
        if(!labelObj){
            setTimeout(function(){
                labelObj = document.getElementById("page" + id.toString());
                labelObj.setAttribute("class", Class)
            },200)
        }
        else{
            labelObj.setAttribute("class", Class)
        }

    }


    pageManager.prototype.setCurrentLabel = function (id,Class,tag,pageNum) {
            if(pageNum>=7){
                var arr = [1, 2, 3, 4, 5, 6, 7]
            }
            else if(pageNum<7) {
                var i = 1
                var arr = []
                while (i <= pageNum) {
                    arr.push(i)
                    i++
                }
            }
            setLabelClass(id, Class)
            arr.splice(id - 1, 1)
            arr.map(function (item) {
                setLabelClass(item, " ")
            })
            if (tag == -1) {
                setLabelClass(-1, "disabled")
                setLabelClass(-2, " ")
            }
            else if (tag == -2) {
                setLabelClass(-2, "disabled")
                setLabelClass(-1, " ")
            }
            else if (tag == 0){
                setLabelClass(-1, " ")
                setLabelClass(-2, " ")
            }
    }
    pageManager.prototype.setpageNumArray = function(pageNo, Switch, current) {
        var arr = [];
        if(Switch == 1){
            var i = 1;
            while (i <= pageNo) {
                arr.push(i);
                if (i == 7) {
                    break;
                }
                i++
            }
            return arr
        }
        else if(Switch==2){
            var i = 8 ;
            while(pageNo-i<=0)i--
            while(pageNo-i!=pageNo){
                i--
                arr.push(pageNo-i)
            }
            return arr
        }
        else if(Switch==3){
            arr.push(current-3,current-2,current-1,current,current+1,current+2,current+3)
            return arr
        }
    }
}