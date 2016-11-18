// JavaScript Document
window.onload=function(){
	waterfall('main','box');
	}
	
	var dataInt={"data":[{"src":'images/0.jpg'},{"src":'images/1.jpg'},{"src":'images/24.jpg'},{"src":'images/25.jpg'},{"src":'images/26.jpg'},{"src":'images/27.jpg'},{"src":'images/28.jpg'},{"src":'images/29.jpg'},{"src":'images/30.jpg'},{"src":'images/31.jpg'}]}
	window.onscroll=function(){
		if(checkScrollslide){
			for(var i=0;i<dataInt.data.length;i++){
				var oParent=document.getElementById('main');
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src=dataInt.data[i].src;
				oPic.appendChild(oImg);
				
				}
				waterfall('main','box');
			}
		}
function waterfall(parent,box){
	//将main下所有class为box取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByclass(oParent,box);
	//计算整个页面显示的列数
	var oBoxW=oBoxs[1].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';
	var HArr=[];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			HArr.push(oBoxs[i].offsetHeight);
			}else{
			var minH=Math.min.apply(null,HArr);//求最小值；
			var index=getMinhIndex(HArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=index*oBoxW+'px';
			HArr[index]=minH+oBoxs[i].offsetHeight;	
					
			}
		}
	}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
			}
		}
	}
function getByclass(oParent,clsName){
	var boxArr=new Array(),//用来存储box的元素
	oElements=oParent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
			}
		}
		return boxArr;
	}
function checkScrollslide(){
	var oParent=document.getElementById('main');
	var oBox=getByclass(oparent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//模式不确定
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
	}