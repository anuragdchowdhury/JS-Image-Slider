var img = [
'https://i.ibb.co/sjSC4y6/2040740.jpg', 
'https://i.ibb.co/gt05ZNp/2040735.jpg', 
'https://i.ibb.co/4Fk77dP/2040739.jpg'];

var num=0;
function back(){
  console.log("Back Button was Clicked");  
  var slider = document.getElementById("slider");
  if(num>0)
  {
      num--;
      slider.src = img[num];
      document.getElementById("alerttext").innerHTML = " ";
  }
  else
  {
     document.getElementById("alerttext").innerHTML = "This is the First Image";
  }
}

function next(){
    var slider = document.getElementById("slider");
    if(num<img.length-1)
    {
        num++;
        slider.src = img[num];
        document.getElementById("alerttext").innerHTML = " ";
    
    }
    else
    {
        document.getElementById("alerttext").innerHTML = "This is the Last Image";
    }
}