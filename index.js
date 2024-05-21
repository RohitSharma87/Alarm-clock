setInterval(()=>{
  let timepc= new Date()
  timeset.innerHTML= timepc.toLocaleTimeString()


},1000)

function setalarm(){
    let h= hourshtml.value;
    let m= minuteshtml.value;
    setalarmtime.innerHTML=h+":"+m+":00"+""
}

function pause(){
    
    location.reload()
   }

let checkinterval=setInterval(()=>{
    let alarmtime=setalarmtime.innerHTML;
    alarmtime=alarmtime.split(":");
    let alarmhours=alarmtime[0];
    let alarmminutes=alarmtime[1];
    let systemtime= new Date();
    let systemhours=systemtime.getHours();
    let systemminutes=systemtime.getMinutes();
    if(systemhours>12){
        systemhours=systemhours-12;
    }
    if(alarmhours==systemhours && alarmminutes==systemminutes){
        alarmsound.play()
        alarmimage.src="Alarm_Clock_GIF_Animation_High_Res.gif"
        
        
    }
},1000)

