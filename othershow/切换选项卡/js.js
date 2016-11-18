/**
 * Created by Dream on 2016/5/17.
 */
window.onload=function(){
 var omian=document.getElementById('main');
   var oul=omian.getElementsByTagName('ul')[0];
    var olis=oul.getElementsByTagName('li');
    var odiv=omian.getElementsByTagName("div");
    for(var i=0;i<olis.length;i++){
        olis[i].index=i;
        olis[i].onmousemove=function() {
            for (var n = 0;n<olis.length;n++)
            {
                olis[n].className="";
                odiv[n].className="hid";
            }
            this.className="active";
            odiv[this.index].className="";
        }
    }
};