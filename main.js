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

//google analytics
var mybtn2 = document.getElementsByClassName("testbtn2")[0];
mybtn2.click();

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84205866-1', 'auto');
  ga('send', 'pageview');

</script>

