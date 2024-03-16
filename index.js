const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateForm()
{
    clearmessage();
    let errorFlag=false;
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be blank";
        errorFlag=true;
    }
    if(!emailIsValid(email.value))
    {
        errorNodes[1].innerText="Invalid Email";
        errorFlag=true;
    }
    if(message.value.length<1)
    {
        errorNodes[2].innerText="Message cannot be blank";
        errorFlag=true;
    }
    if(errorFlag==false)
    {
        success.innerText="Validation Successful";
    }


}
function emailIsValid(email)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}

function clearmessage()
{
    for (var i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerHTML = '';
      }

}