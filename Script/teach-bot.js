let chatBox=document.getElementById("chat-box");
let para=document.getElementById("chat-ans");
function answrite()
{
    para.innerText="I am J.A.R.V.I.S.";
    chatBox.append(para);
}

function ques()
{
    para.innerText="";
    let question=document.getElementById("chat-bot-qus").value;
    if(question !="")
        answrite();
    console.log(question);
}