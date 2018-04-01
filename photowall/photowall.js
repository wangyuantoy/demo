/*
 * 按下后选中图片背景色变为深蓝色，被碰撞的图片背景色变红；位置变化完成后颜色变成原始色
 * 没有碰撞，位置复原;多个碰撞和接触面积最大的交换位置
 * 交换位置时，选中的图片在最上层划过去
 * */
let boxList = $('#box>li');
//进入页面先记录下每个图片的初始位置，并绑定事件
for (let i = boxList.length - 1; i >= 0; i--) {
    let curLi = boxList[i];
    curLi.originTop = curLi.offsetTop;
    curLi.originLeft = curLi.offsetLeft;

    $(curLi).css({
        position: "absolute",
        margin: 0, //绝对定位的时候就不需要margin了
        top: curLi.originTop,
        left: curLi.originLeft
    });
    $(curLi).on("mousedown", down);
    $(curLi).on("dragstart", increaseIndex);
    $(curLi).on("dragstart", preventDefault);
    $(curLi).on("drag", boxMove);
    $(curLi).on("drag", preventDefault);
    $(curLi).on("dragend", changePos);
    $(curLi).on("dragend", preventDefault);
}
//提升zIndex,拖拽谁，谁的zIndex提升
let zIndex = 0;
function increaseIndex() {
    $(this).css({
        zIndex: ++zIndex,
        backgroundColor: "darkBlue"
    })
}
//浏览器默认元素不可拖拽，阻止浏览器默认行为
function preventDefault(e) {
    e.preventDefault()
}
//按下鼠标记录位置
function down(e) {
    this.startX = e.pageX;
    this.startY = e.pageY;
    this.startL = this.offsetLeft;
    this.startT = this.offsetTop;
//鼠标和拖拽元素绑定，但是只有FF IE支持setcapture；因为元素不会逃脱出docuemnt，其它浏览器使用事件委托，把事件绑定给document，此时move和up的this会变为document，需要处理this问题；在各阶段触发相应drag事件
    if (this.setCapture) {
        this.setCapture();
        $(this).on("mousemove", move);
        $(this).on("mouseup", up)
    } else {
        //processThis返回的是匿名函数，为确保能解除事件绑定，给匿名函数命名并保存在this上
        this.MOVE = processThis(move, this);
        this.UP = processThis(up, this);
        $(document).on("mousemove", this.MOVE);
        $(document).on("mouseup", this.UP)
    }
    $(this).trigger("dragstart");
}
function move(e) {
    let curL = e.pageX - this.startX + this.startL;
    let curT = e.pageY - this.startY + this.startT;
    $(this).css({left: curL, top: curT});
    $(this).trigger("drag");
}
function up() {
    if (this.setCapture) {
        this.setCapture();
        $(this).off("mousemove", move);
        $(this).off("mouseup", up)
    } else {
        $(document).off("mousemove", this.MOVE);
        $(document).off("mouseup", this.UP);
    }
    $(this).trigger("dragend");
}
//拖拽对象移动
function boxMove() {
    this["crashList"] = [];
    for (let i = 0; i < boxList.length; i++) {
        let curLi = boxList[i];
        if (this != curLi) {
            if (crashTest(this, curLi)) {//有碰撞
                $(curLi).css("backgroundColor", "red");
                this["crashList"].push(curLi)
            } else {//无碰撞
                $(curLi).css("backgroundColor", "lightBlue")
            }
        }
    }
}
//拖拽结束后，变换位置
function changePos() {
    $(this).off("mousedown", down);
    let ary = this["crashList"];
    if (ary && ary.length > 0) {  //有碰撞
        let crashParam = [];
        for (let i = 0; i < ary.length; i++) {
            let crashTarget = ary[i];
            let distance = Math.sqrt(Math.pow(this.offsetTop - crashTarget.offsetTop, 2) + Math.pow(this.offsetLeft - crashTarget.offsetLeft, 2));
            crashParam.push({
                target: crashTarget,
                distance: distance
            })
        }
        //碰撞元素数组按照distance 升序排列
        crashParam.sort(function (a, b) {
            return a.distance - b.distance;
        });
        let minTarget = crashParam[0].target;
        $(this).animate({
            left: minTarget.originLeft,
            top: minTarget.originTop
        }, 300, function () {
            $(this).on("mousedown", down);
        });
        $(minTarget).animate({
            left: this.originLeft,
            top: this.originTop
        }, 300);
        for (let j = 0; j < boxList.length; j++) {
            $(boxList[j]).css("backgroundColor", "lightBlue")
        }
        let tempT = this.originTop;
        let tempL = this.originLeft;
        this.originTop = minTarget.originTop;
        this.originLeft = minTarget.originLeft;
        minTarget.originTop = tempT;
        minTarget.originLeft = tempL;
    } else {//无碰撞
        processThis(goHome, this)();
        $(this).on("mousedown", down);
    }
}

function crashTest(a, b) {
    if ((a.offsetLeft + a.offsetWidth) < b.offsetLeft || (a.offsetTop + a.offsetHeight) < b.offsetTop || a.offsetLeft > (b.offsetLeft + b.offsetWidth) || a.offsetTop > (b.offsetTop + b.offsetHeight)) {
        return false;
    }
    return true;
}
//返回原来的位置
function goHome() {
    $(this).css({
        left: this.originLeft,
        top: this.originTop,
        backgroundColor: "lightBlue"
    })
}
//改变this
function processThis(fn, context) {
    let outerArg = Array.prototype.slice.call(arguments, 2);
    return function () {
        let innerArg = Array.prototype.slice.call(arguments, 0);
        fn.apply(context, outerArg.concat(innerArg));
    }
}