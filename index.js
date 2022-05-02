document.querySelector("#masaiForm").addEventListener("submit",myfunction)
    
    var arr=JSON.parse(localStorage.getItem("schedule"))||[];
    function myfunction(){
      event.preventDefault()
      var form=document.querySelector("#masaiForm")
     var obj={
       Matchnumber:form.matchNum.value,
       teamA:form.teamA.value,
       teamB:form.teamB.value,
       date:form.date.value,
       venue:form.venue.value,
     }
    
     arr.push(obj);
    
     localStorage.setItem("schedule",JSON.stringify(arr))
    }