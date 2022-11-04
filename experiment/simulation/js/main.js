var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function sandSpecimen()
{
	document.getElementById("simulation").innerHTML="<img src='images/compressionTestSpecimen.jpg' width='70%'>";
	document.getElementById("sandSpecimen").style.display = "none";
	document.getElementById("readingDial").style.display = "block";
}

function readingDial()
{
	document.getElementById("simulation").innerHTML="<img src='images/readingDial.gif' width='80%'>";
	document.getElementById("readingDial").style.display = "none";
	setTimeout(() => {
	document.getElementById("specimen1").style.display = "block";
	}, 3500);
}

function specimen1()
{
	document.getElementById("simulation").innerHTML="<img src='images/compressionSpecimen1.gif' width='70%'>";
	document.getElementById("specimen1").style.display = "none";
	setTimeout(() => {
	document.getElementById("compressionSpecimen2").style.display = "block";
	}, 6000);
}

function specimen2()
{
	document.getElementById("simulation").innerHTML="<img src='images/compressionSpecimen2.gif' width='70%'>";
	document.getElementById("compressionSpecimen2").style.display = "none";
	setTimeout(() => {
	document.getElementById("compressionSpecimen3").style.display = "block";
	}, 6000);
}

function specimen3()
{
	document.getElementById("simulation").innerHTML="<img src='images/compressionSpecimen3.gif' width='70%'>";
	document.getElementById("compressionSpecimen3").style.display = "none";
	setTimeout(() => {
	document.getElementById("compressionTestResult").style.display = "block";
	}, 7000);
}

function compressionTestResult()
{
	document.getElementById("simulation").style.display = "none";
	document.getElementById("compressionTestResult").style.display = "none";
	document.getElementById("compressionTestTable").style.display = "block";
}

function shearSpecimen1()
{
	document.getElementById("simulation").innerHTML="<img src='images/shearSpecimen1.gif' width='70%'>";
	document.getElementById("specimen1").style.display = "none";
	setTimeout(() => {
	document.getElementById("shearSpecimen2").style.display = "block";
	}, 6000);
}

function shearSpecimen2()
{
	document.getElementById("simulation").innerHTML="<img src='images/shearSpecimen2.gif' width='70%'>";
	document.getElementById("shearSpecimen2").style.display = "none";
	setTimeout(() => {
	document.getElementById("shearSpecimen3").style.display = "block";
	}, 6000);
}

function shearSpecimen3()
{
	document.getElementById("simulation").innerHTML="<img src='images/shearSpecimen3.gif' width='70%'>";
	document.getElementById("shearSpecimen3").style.display = "none";
	setTimeout(() => {
	document.getElementById("shearTestResult").style.display = "block";
	}, 8000);
}

function shearTestResult()
{
	document.getElementById("simulation").style.display = "none";
	document.getElementById("shearTestResult").style.display = "none";
	document.getElementById("shearTestTable").style.display = "block";
}

function tensileSpecimen1()
{
	document.getElementById("simulation").innerHTML="<img src='images/tensileSpecimen1.gif' width='70%'>";
	document.getElementById("specimen1").style.display = "none";
	setTimeout(() => {
	document.getElementById("tensileSpecimen2").style.display = "block";
	}, 6000);
}

function tensileSpecimen2()
{
	document.getElementById("simulation").innerHTML="<img src='images/tensileSpecimen2.gif' width='70%'>";
	document.getElementById("tensileSpecimen2").style.display = "none";
	setTimeout(() => {
	document.getElementById("tensileSpecimen3").style.display = "block";
	}, 6000);
}

function tensileSpecimen3()
{
	document.getElementById("simulation").innerHTML="<img src='images/tensileSpecimen3.gif' width='70%'>";
	document.getElementById("tensileSpecimen3").style.display = "none";
	setTimeout(() => {
	document.getElementById("tensileTestResult").style.display = "block";
	}, 6000);
}

function tensileTestResult()
{
	document.getElementById("simulation").style.display = "none";
	document.getElementById("tensileTestResult").style.display = "none";
	document.getElementById("tensileTestTable").style.display = "block";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}