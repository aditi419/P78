ImageArray = ["MainImage.jpeg", "GrandpaImage.png", "GrandmaImage.png", 
    "GirlImage.png", "DadImage.jpeg", "BoyImage.jpeg", "MomImage.png"]

NameArray = ["Welcome", "Grandpa", "Grandma", "Girl", "Dad", "Boy", 
             "Mom"]

   var i = 0;
   function nextslide() {
     if (i == 6)
       {
         i=0;
       }
      
     document.getElementById("MainImage").src = ImageArray[i];
     document.getElementById("PersonName").innerHTML = NameArray[i];
      i = i+1;
   }