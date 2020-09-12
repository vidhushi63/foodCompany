function run(){
var one=document.getElementById("one");

var three=document.getElementById("three");

    if(one.style.display="block"){
        one.style.display="none";
        three.style.display="block";
    }
   
}
var x=setInterval(run,5000);
function show1(){
    let a=document.getElementById("first_customer");
    let b=document.getElementById("sec_customer");
    let c=document.getElementById("third_customer");
    let d=document.getElementById("fourth_customer");
    let btn=document.getElementById("btn");
    if(a.style.display='block')
{
    a.style.display= 'block';
    b.style.display='none';
    c.style.display= 'none';
    d.style.display= 'none';
}
}
function show2(){
    let a=document.getElementById("first_customer");
    let b=document.getElementById("sec_customer");
    let c=document.getElementById("third_customer");
    let d=document.getElementById("fourth_customer");
    let btn=document.getElementById("btn");
    if(b.style.display='none')
    {
        b.style.display= 'block';
        a.style.display= 'none';
        c.style.display= 'none';
        d.style.display= 'none';

    }
    }
    function show3(){
        let a=document.getElementById("first_customer");
        let b=document.getElementById("sec_customer");
        let c=document.getElementById("third_customer");
        let d=document.getElementById("fourth_customer");
        let btn=document.getElementById("btn");
        if(c.style.display='none')
        {
            c.style.display= 'block';
            b.style.display= 'none';
            a.style.display= 'none';
            d.style.display= 'none';
        }
        }
        function show4(){
            let a=document.getElementById("first_customer");
            let b=document.getElementById("sec_customer");
            let c=document.getElementById("third_customer");
            let d=document.getElementById("fourth_customer");
            let btn=document.getElementById("btn");
            if(d.style.display='none')
            {
                d.style.display= 'block';
                b.style.display= 'none';
                a.style.display= 'none';
                c.style.display= 'none';
            }
            }
        
         function Open_nav(){
         let btn=document.getElementById("nav_symbol");
         let nav=document.getElementById("lists");
         if(lists.style.display='none')
         {
            nav.style.display="block";
            btn.style.display="none";
           
         }
        }
       
        
     
      


