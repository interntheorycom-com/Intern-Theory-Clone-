studennt_Register_arr = JSON.parse(localStorage.getItem("studennt_Register_arr")) || [];
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    var frstName = document.querySelector("#firstname").value
    var secondName = document.querySelector("#lastname").value
    var email = document.querySelector("#email").value
    var pass = document.querySelector("#password").value
    var phone = document.querySelector("#number").value
    studennt_Register_Obj = {
        frstName:frstName,
        secondName:secondName,
        email : email,
        pass : pass,
        phone : phone
    }
    var eml = true;
    var phon = true;
    console.log(studennt_Register_Obj.email)
    for(var i=0; i<studennt_Register_arr.length; i++)
    {
        if(studennt_Register_arr[i].email == studennt_Register_Obj.email &&studennt_Register_arr[i].phone== studennt_Register_Obj.phone )
        {
            eml = false;
            phon = false;
            break;
        }
        else if(studennt_Register_arr[i].email == studennt_Register_Obj.email )
        {
            eml = false;
            break;
        }
        else if(studennt_Register_arr[i].phone== studennt_Register_Obj.phone )
        {
            phon = false;
            break;
        }
    } 
    if(eml==true && phon==true)
    {
    studennt_Register_arr.push(studennt_Register_Obj);
    localStorage.setItem("studennt_Register_arr",JSON.stringify(studennt_Register_arr))||[];
    alert("Account Success Fully Created")
    window.location.href="studentLoginAndCompnayLogin.html"
    document.querySelector("#firstname").value=""
     document.querySelector("#lastname").value=""
     document.querySelector("#email").value=""
     document.querySelector("#password").value=""
     document.querySelector("#number").value=""
    } 
    else if(eml!==true && phon!==true)
    {
        alert(" Opps!! email and phone number already Register")
        document.querySelector("#email").value=""
        document.querySelector("#number").value=""
    }
    else if(eml!==true)
    {
        alert(" Opps!! email  already Register")
        document.querySelector("#email").value=""
    }
    else if(phon!==true)
    {
        alert(" Opps!! Phone Number   already Register")
        document.querySelector("#number").value=""
    }

    
})




