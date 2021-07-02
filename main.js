number="";

function change() {
    number=parseInt(number+1);
    if(number==1){
        document.getElementById("text").innerHTML="Happy Birthday Jeevanth"
    }
    if(number==2){
        document.getElementById("text").innerHTML="You Always Adjust For Us To Have Fin"
    }
    if(number==3){
        document.getElementById("text").innerHTML="I Want To Thank You For Fun That We Had"
    }

    if(number==4) {
        window.location.replace("birthdayhat.html")
    }
}