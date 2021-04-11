myParentNode=document.querySelector(".placeHolder");

  //make button
  var buttonElement = document.createElement("a");
  buttonElement.classList.add("myButton");
  buttonElement.href = "#myPopup";
  buttonElement.textContent = "Get Sustainable Swap";
  // function makeButton(myParentNode);
  myParentNode.appendChild(buttonElement);

  //make pop up
  buttonElement = document.createElement("div");
  buttonElement.id = "myPopup";
  buttonElement.classList.add("overlay");
  myParentNode.appendChild(buttonElement);

  var popupElement = document.createElement("div");
  popupElement.classList.add("popup");
  buttonElement.appendChild(popupElement);

  //header
  var myHeader=document.createElement("h3");
  myHeader.textContent = "Product Recommendations";
  popupElement.appendChild(myHeader);

  var closeElement=document.createElement("a");
  closeElement.classList.add("close");
  closeElement.href = "#";
  closeElement.textContent = "x";
  popupElement.appendChild(closeElement);
  


  //create list
  var myList = document.createElement("div");
  myList.classList.add("myList");
  popupElement.appendChild(myList);

  var myTable = document.createElement("table");
  myList.appendChild(myTable);

  //data
  // $.get("https://storage.googleapis.com/eco_swap_small/eco_list.json", function(data) {
  //   console.log((data["date"])); // this will show the info it in firebug console
  // });

  // var jaSon = require('./eco_list.json'); 
  // console.log(jaSon);

  // var theData = JSON.parse("eco_list.json");
  // console.log(theData[0].product_search_include);


  // fetch('https://storage.googleapis.com/eco_swap_small/eco_list.json')
  // .then(response => response.json())
  // .then(data => console.log(data));
  // // console.log(data["date"]);



  fetch('data/eco_list.json')
  .then(response => response.json())
  .then(data => {console.log(data);
    console.log(data[0].price);
    console.log(Object.keys(data).length); //length
    for(var k = 0; k < Object.keys(data).length-1; ++k){
      //row
      var myRow = document.createElement("tr");
      myTable.appendChild(myRow);

      var myData = document.createElement("td");
      myRow.appendChild(myData);
    
      var myImage = document.createElement("img");
      myImage.src = "images/" +data[k].images;
      myImage.style = "width: 50px; height:48px";
      myData.appendChild(myImage);
    
      myData = document.createElement("td");
      var myLink = document.createElement("a");
      //myData.textContent = data[k].swaps;
      myRow.appendChild(myData);

      var myLink = document.createElement("a");
      myLink.href = data[k].link;
      myLink.target="_blank";
      //mylink.innerText = data[k].swaps;
      myData.appendChild(myLink);
    
      myData = document.createElement("td");
      myData.textContent = "$" + data[k].price;
      myRow.appendChild(myData);
    
      myData = document.createElement("td");
      myData.textContent = "label 1, label 2";
      myRow.appendChild(myData);

    }
  });

    //rows
    // var myRow = document.createElement("tr");
    // myTable.appendChild(myRow);
    
    // //data entries
    // var myData = document.createElement("td");
    // myRow.appendChild(myData);
  
    // var myImage = document.createElement("img");
    // myImage.src = "https://lh3.ggpht.com/hWCPw3isbmqesoj5e4Td8qfCU_ELq6nkJAuvi79EEtzhKQFI4iwAzJdgXE8w58o88w=w170";
    // myImage.style = "width: 50px; height:48px";
    // myData.appendChild(myImage);
  
    // myData = document.createElement("td");
    // myData.textContent = "Product Name";
    // myRow.appendChild(myData);
  
    // myData = document.createElement("td");
    // myData.textContent = "$" + 11.11;
    // myRow.appendChild(myData);
  
    // myData = document.createElement("td");
    // myData.textContent = "label 1, label 2";
    // myRow.appendChild(myData);


  
  


//add button