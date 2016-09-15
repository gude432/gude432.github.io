// Tabs
function openGroup(evt, groupName) {
    var i;
    var x = document.getElementsByClassName("group");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    var activebtn = document.getElementsByClassName("testbtn");
    for (i = 0; i < x.length; i++) {
        activebtn[i].className = activebtn[i].className.replace(" w3-theme", "");
    }
    if (groupName != "Home") {
        document.getElementById("Name").style.display = "block";
    }

    document.getElementById(groupName).style.display = "block";
    evt.currentTarget.className += " w3-theme";

}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

function filterGroup(evt, groupName) {
    var i;
    var x = document.getElementsByClassName("pgroup");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    var activebtn = document.getElementsByClassName("testbtn2");
    for (i = 0; i < x.length + 1; i++) {
        activebtn[i].className = activebtn[i].className.replace(" w3-theme-d1", "");
    }
    if (groupName != "all") {
        document.getElementById("Name").style.display = "block";

        document.getElementById(groupName).style.display = "block";
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    }
    evt.currentTarget.className += " w3-theme-d1";

}

var mybtn2 = document.getElementsByClassName("testbtn2")[0];
mybtn2.click();




// // Slideshows
// var slideIndex = 1;

// function plusDivs(n) {
    // slideIndex = slideIndex + n;
    // showDivs(slideIndex);
// }

// function showDivs(n) {
    // var x = document.getElementsByClassName("mySlides");
    // if (n > x.length) {
        // slideIndex = 1
    // }
    // if (n < 1) {
        // slideIndex = x.length
    // };
    // for (i = 0; i < x.length; i++) {
        // x[i].style.display = "none";
    // }
    // //x[slideIndex-1].style.display = "block";
// }

// showDivs(1);

// // Progress Bars
// function move() {
    // var elem = document.getElementById("myBar");
    // var width = 1;
    // var id = setInterval(frame, 10);

    // function frame() {
        // if (width == 100) {
            // clearInterval(id);
        // } else {
            // width++;
            // elem.style.width = width + '%';
            // document.getElementById("demoprgr").innerHTML = width * 1 + '%';
        // }
    // }
// }
