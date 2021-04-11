// function makebutton(myParentNode){
// hmmm
// }


//change color
var sustainable = false;

var productName = document.querySelector("#productTitle").textContent;

//open json
fetch('eco_list.json')
.then(response => response.json())
.then(data => {console.log(data);
});
//loop through json i
     //check categories
     //check if zero waste
          //if(productName=??stringcontain.)


var starElement = document.querySelector("#averageCustomerReviews > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > a:nth-child(1) > i:nth-child(1)");

if (sustainable == true) {
  starElement.style.filter = "hue-rotate(50deg)";
} else {
  starElement.style.filter = "hue-rotate(220deg) saturate(.4)";
}

//add text
var nodeRef = document.querySelector("#centerCol > hr:nth-child(9)");
var sustainNoticeElement = document.createElement("b");
sustainNoticeElement.textContent = "Not Sustainable: ";
var myParentNode = document.querySelector("#centerCol");
myParentNode.insertBefore(sustainNoticeElement, nodeRef);


if (sustainable == true) {
  sustainNoticeElement.textContent = "Sustainable";

} else {
  sustainNoticeElement.textContent = "Not Sustainable: ";

  //add css
  var styles = `.myButton {
    font-size: 0.86em;
    padding: 10px;
    color: #648d64;
    border: 2px solid #648d64;
    border-radius: 22px/30px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  .myButton:hover {
    background: #6fe171;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
    z-index: 999;
  }
  .overlay:target {
    visibility: visible;
    opacity: 1.0;
  }
  
  .thePopup {
    background: #fff;
    border-radius: 5px;
    margin: 70px auto;
    padding: 20px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
  }
  
  .thePopup h3 {
    font-family: Arial, sans-serif;
    margin-top: 0;
    color: #333;
  }
  .thePopup .close {
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    text-decoration: none;
    color: #333;
  }
  .thePopup .close:hover {
    color: #06D85F;
  }
  .thePopup .content {
    max-height: 30%;
    overflow: auto;
  }`

  var styleSheet = document.createElement("style");
  styleSheet.id = "pleaseHelp";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  //make button
  var buttonElement = document.createElement("a");
  buttonElement.classList.add("myButton");
  buttonElement.href = "#myPopup";
  buttonElement.textContent = "Get Sustainable Swap";
  // function makeButton(myParentNode);
  myParentNode.insertBefore(buttonElement, nodeRef);

  //make pop up
  buttonElement = document.createElement("div");
  buttonElement.id = "myPopup";
  buttonElement.classList.add("overlay");
  myParentNode.insertBefore(buttonElement, nodeRef);

  var popupElement = document.createElement("div");
  popupElement.classList.add("thePopup");
  buttonElement.appendChild(popupElement);

  //header
  var myHeader=document.createElement("h3");
  myHeader.textContent = "Product Recommendations";
  popupElement.appendChild(myHeader);

  var closeElement=document.createElement("a");
  closeElement.classList.add("close");
  closeElement.href = "#";
  closeElement.textContent = "";
  popupElement.appendChild(closeElement);
  
  //list
  var myList = document.createElement("div");
  myList.classList.add("myList");
  popupElement.appendChild(myList);

  //make table
  var myTable = document.createElement("table");
  myList.appendChild(myTable);

  // var myRow = document.createElement("tr");
  // myTable.appendChild(myRow);

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
      myLink.textContent = data[k].swaps;
      myData.appendChild(myLink);
    
      myData = document.createElement("td");
      myData.textContent = "$" + data[k].price;
      myRow.appendChild(myData);
    
      myData = document.createElement("td");
      myData.textContent = "label 1, label 2";
      myRow.appendChild(myData);

    }
  });

}



//add button