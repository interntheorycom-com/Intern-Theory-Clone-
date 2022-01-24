// taking Value by Local Storage
company_Register_arr = JSON.parse(localStorage.getItem("company_Register_arr")) || [];
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    var frstName = document.querySelector("#firstname").value;
    var secondName = document.querySelector("#lastname").value;
    var compny = document.querySelector("#company");
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    var phone = document.querySelector("#number").value;

    // save valu in Object
    company_Register_Obj = {
        frstName:frstName,
        secondName:secondName,
        compny: company,
        email : email,
        pass : pass,
        phone : phone
    }
    var eml = true;
    var phon = true;
    // Check Duplicate Value  and Push in Array
    for(var i=0; i<company_Register_arr.length; i++)
    {
        if(company_Register_arr[i].email == company_Register_Obj.email &&company_Register_arr[i].phone== company_Register_Obj.phone )
        {
            eml = false;
            phon = false;
            break;
        }
        else if(company_Register_arr[i].email == company_Register_Obj.email )
        {
            eml = false;
            break;
        }
        else if(company_Register_arr[i].phone== company_Register_Obj.phone )
        {
            phon = false;
            break;
        }
    } 

    // alert Message 
    if(eml==true && phon==true)
    {
    company_Register_arr.push(company_Register_Obj);
    localStorage.setItem("company_Register_arr",JSON.stringify(company_Register_arr));
    alert("Account Success Fully Created");
    window.location.href="studentLoginAndCompnayLogin.html";
    document.querySelector("#firstname").value="";
     document.querySelector("#lastname").value="";
     document.querySelector("#company").value="";
     document.querySelector("#email").value="";
     document.querySelector("#password").value="";
     document.querySelector("#number").value="";
    } 
    else if(eml!==true && phon!==true)
    {
        alert(" Opps!! email and phone number already Register");
        document.querySelector("#email").value="";
        document.querySelector("#number").value="";
    }
    else if(eml!==true)
    {
        alert(" Opps!! email  already Register");
        document.querySelector("#email").value="";
    }
    else if(phon!==true)
    {
        alert(" Opps!! Phone Number   already Register");
        document.querySelector("#number").value="";
    }

})




