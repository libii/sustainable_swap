var sustainable = false;


//open json
fetch(browser.runtime.getURL('data/eco_list.json')) //browser.runtime.getURL()
  .then(response => response.json())
  .then(data => {
    console.log("first call");
    console.log(data);
    var productName = document.querySelector("#productTitle").textContent.toLowerCase();
    var category = "";

    for (var k = 0; k < data.length; ++k) {
      //check if category is checkable
      console.log(data[k].product_search_include);

      if (productName.includes(data[k].product_search_include)) {
        category = data[k].product_search_include;
        var starElement = document.querySelector("#averageCustomerReviews > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > a:nth-child(1) > i:nth-child(1)");

        //add text
        var nodeRef = document.querySelector("#centerCol > hr:nth-child(9)");
        var sustainNoticeElement = document.createElement("b");
        sustainNoticeElement.textContent = "Not Sustainable: ";
        var myParentNode = document.querySelector("#centerCol");
        myParentNode.insertBefore(sustainNoticeElement, nodeRef);

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

        //check if sustainable
        for (var n = 0; n < data[k].product_search_not_include.length; ++n) {
          if (productName.includes(data[k].product_search_not_include[n])) {
            //sustainable
            sustainable = true;
            console.log("sustainable");

            //add text
            sustainNoticeElement.textContent = "Sustainable";

            //change star color
            starElement.style.filter = "hue-rotate(50deg)"; //green
            break;
          }
        }
        if (sustainable == false) {
          //add text
          console.log("not sustainable");
          sustainNoticeElement.textContent = "Not Sustainable: "

          //add pollution color on starts
          starElement.style.filter = "hue-rotate(220deg) saturate(.4)"; //pollution


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
          var myHeader = document.createElement("h3");
          myHeader.textContent = "Product Recommendations";
          popupElement.appendChild(myHeader);

          var closeElement = document.createElement("a");
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

          console.log(data[0].price);
          console.log(Object.keys(data).length); //length
          for (var k = 0; k < Object.keys(data).length - 1; ++k) {
            //row
            if (data[k].product_search_include == category) {
              var myRow = document.createElement("tr");
              myTable.appendChild(myRow);

              var myData = document.createElement("td");
              myRow.appendChild(myData);

              var myImage = document.createElement("img");
              myImage.src = browser.runtime.getURL("images/" + data[k].images);
              myImage.style = "width: 50px; height:48px";
              myData.appendChild(myImage);

              myData = document.createElement("td");
              var myLink = document.createElement("a");
              //myData.textContent = data[k].swaps;
              myRow.appendChild(myData);

              var myLink = document.createElement("a");
              myLink.href = data[k].link;
              myLink.target = "_blank";
              myLink.textContent = data[k].swaps;
              myData.appendChild(myLink);

              myData = document.createElement("td");
              myData.textContent = "$" + data[k].price;
              myRow.appendChild(myData);

              myData = document.createElement("td");

              myData.textContent = data[k].tags.join(', ');
              myRow.appendChild(myData);
            } //if
          } //for check items in categories




          break;
        }
      }
    }

  });

