
// const moonLanding = new Date();
// console.log(moonLanding.getMonth()+1);

var dateelement = document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button = document.createElement('button');
button.innerHTML = "Display Data";
button.className = "btn btn-primary";
button.setAttribute('type','button');

button.addEventListener('click',displaydata);

document.body.append(button);

function displaydata () {
    let input = document.getElementById("date").value;
    // console.log(typeof(input));
    // console.log(Date.parse(input));
    if(Date.parse(input)) {
       var inputdate = new Date(input);
       var currentdate = new Date();
    //    console.log(inputdate,currentdate); 
      var display = document.createElement('div')
      display.innerHTML= " Entered date is " + inputdate;
      document.body.append(display);

       var millisecdiff = currentdate.getTime()-inputdate.getTime();
       var millisec = document.createElement('div');
       millisec.innerHTML = millisecdiff + " milliseconds";
       document.body.append(millisec);
       console.log(millisecdiff);

       var seconddiff = Math.floor(millisecdiff / 1000);
       var seconds = document.createElement('div');
       seconds.innerHTML = seconddiff + " seconds";
       document.body.append(seconds);
       console.log(seconddiff);

      var minutediff = Math.floor(seconddiff/60);
      var minutes = document.createElement('div');
      minutes.innerHTML = minutediff + " minutes";
      document.body.append(minutes);
      console.log(minutediff);

      var hoursdiff = Math.floor(minutediff/60);
      var hours = document.createElement('div');
      hours.innerHTML = hoursdiff + " hours";
      document.body.append(hours);
      console.log(hoursdiff);

      var daydiff = Math.floor(hoursdiff/24);
      var day = document.createElement('div');
      day.innerHTML = daydiff + " days";
      document.body.append(day);
      console.log(daydiff);

      var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
      var year = document.createElement('div');
      year.innerHTML = yeardiff + " years";
      document.body.append(year);
      console.log(yeardiff);

      var monthdiff = ( yeardiff * 12 ) + (currentdate.getMonth() - inputdate.getMonth());
      var month = document.createElement('div');
      month.innerHTML = monthdiff + " months";
      document.body.append(month);
      console.log(monthdiff);

    } else {
       console.log("give a proper valid date");
    }

}
