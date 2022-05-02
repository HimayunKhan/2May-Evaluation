// write js code here corresponding to matches.html

var arr2=JSON.parse(localStorage.getItem("schedule"))||[]
    var favourites=JSON.parse(localStorage.getItem("favourites"))||[]


    var venue = document.querySelector('#filterVenue')
    venue.addEventListener("change",ff)

    function ff(e){
      if(e.target.venue === "none")
      {
        display(arr2)
        return;
      }
      var data = arr2.filter(el => el.venue === e.target.value)
      display(data);
    }

    display(arr2)
    function display(arr2){
      // event.preventDefault()
      document.querySelector("tbody").innerHTML = null;

      arr2.forEach(function(elem){
       
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.Matchnumber
        var td2=document.createElement("td")
        td2.innerText=elem.teamA
        var td3=document.createElement("td")
        td3.innerText=elem.teamB
        var td4=document.createElement("td")
        td4.innerText=elem.date
        var td6=document.createElement("td")
        td6.innerText=elem.venue


        var td5=document.createElement("td")
        td5.innerText="Add as Favourites"
        td5.style.color="green"
        td5.style.cursor="pointer"
        td5.addEventListener("click",function(){
         
          addfav(elem)
        })


        tr.append(td1,td2,td3,td4,td6,td5)
        document.querySelector("tbody").append(tr)
      })
      
      function addfav(elem){
      
      var flag=true;
      favourites.forEach( function (apple){

      if(apple.Matchnumber==elem.Matchnumber && apple.teamA==elem.teamA && apple.teamB==elem.teamB && apple.date==elem.date && apple.venue==elem.venue)
      {
        flag=false
      }

      })

      if(flag){
       
        favourites.push(elem)
      localStorage.setItem("favourites",JSON.stringify(favourites))
     
      alert("favourites created successfully")

      }
      else{
        alert("favourites already exist")
      }


      



      }
    }