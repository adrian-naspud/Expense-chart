console.log('linked js')

import ChartsArray from './data.json' assert {type: 'json'};

console.log(ChartsArray)

//const charts = document.querySelector('#charts');
const charts = document.getElementById("charts");

let eachDay = ChartsArray.map(
  (e) =>
    `<div id="charts-child">
      <div id="day"> ${e.day} </div>
      <div id="amount"> $ ${e.amount} </div>
    </div>
`
);

charts.innerHTML = eachDay.join(' ');

////

// grab ChartsChild and amount for hover and height
const chartsChild = document.querySelectorAll("#charts-child");
const amount = document.querySelectorAll("#amount");

// loop for all chartsChild and amount
for (let i = 0; i < chartsChild.length; i++) {
  // Display amount when the user hover
  chartsChild[i].addEventListener("mouseover", function () {
    amount[i].style.visibility = "visible";
  });
  chartsChild[i].addEventListener("mouseout", function () {
    amount[i].style.visibility = "hidden";
  });

  // set the charts-child height using array
  chartsChild[i].style.height = `${ChartsArray[i].amount * 2.5}px`;
}

// change color of today

// chartsChild[new Date().getDay()].style.backgroundColor = "#76B5BB";
