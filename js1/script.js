
///////////////
/*function addProducts() {
    var nameProduct=document.getElementById("nameProduct").value;
    var price=document.getElementById("price").value;
    var stock=document.getElementById("stock").value;
    var cat=document.getElementById("cat").value;
    
 var production={
    
    nP:nameProduct,
    prc:price,
    stck:stock,
    catagy:cat
 }
 var producters=JSON.parse(localStorage.getItem("prod")||"[]");
     producters.push(production);
    
     localStorage.setItem("prod",JSON.stringify(producters));
     // localStorage.removeItem("prod");

    }*/
   
//////////////
function check(x) {
    var condition=true;
    if (x.length<5) {
        condition=false
    }
    return condition
}
//////////////
function check2(X) {
    var message=true;
    if (X.length<6) {
        message=false
    }
   return message
}
/////////////
function checkPwd(X) {
    var message=true;
    if (X.length<8) {
        message=false
    }
   return message
}
////////////
function checkCPwd(X,Y) {
    var validation=true;
    if (X != Y) {
        validation=false
    };
    return validation

   }
////////////   
function compareEmail(T,E) {
    var condition=false
    for (let i = 0; i < T.length; i++) {
        if (E==T[i].email) {
            condition=true;
            
            break;
            
        }
        
    }
    return condition
    
}
function signup() {
    // Reccupuration des données
    /////////////   Validateur FirstName
    var firstName=document.getElementById("firstName").value;
        var isValideName=(check(firstName))
            if (isValideName==false) {
                document.getElementById("erreur").innerHTML="check your name";
            }else{ 
                document.getElementById("erreur").innerHTML="";
            }
    //////////////   validateur LastName     
    var lastName=document.getElementById("lastName").value;
        var isValideLastName=(check2(lastName));
            if (!isValideLastName) {
                
                document.getElementById("error").innerHTML= "Check your Last-name";
            }else{ document.getElementById("error").innerHTML=("");}
    ////////////////  Validateur Email      
    var email=document.getElementById("email").value;
      
    var userTab=JSON.parse(localStorage.getItem("users")||"[]");

            var isValidEmail=compareEmail(userTab,email);
            if (isValidEmail) {
             document.getElementById("errormail").innerHTML= "your mail is existe";

            }
            else{document.getElementById("errormail").innerHTML= "";
        }

    //////////////// Validateur PassWord
    var password=document.getElementById("password").value;
       
        var isValidePassword=(checkPwd(password));
            if (!isValidePassword) {
                document.getElementById("errorPwd").innerHTML="Check your Password";
            }else{document.getElementById("errorPwd").innerHTML="";};
    ///////////////  Validateur Conformation                               //propriete JS
    var confirmPassword=document.getElementById("confirmPassword").value;
    
        var isValidConPassword=checkCPwd(password,confirmPassword);
           if (!isValidConPassword) {
            document.getElementById("errorCpwd").innerHTML="Check your Confirmation";

           }else{document.getElementById("errorCpwd").innerHTML="";
        }
       /////////////
    //Creation d'objet
    
    
    // sauvegarde dans LocalStorage
    // reccuperation de l'ensembles utilisateurs dans le tableau
    // le LS ou initialisation à un tableau vide
    
    // ajout les utilisateurs a TAB
    if (isValideName && isValideLastName && !isValidEmail && isValidePassword && isValidConPassword) {
         
        var user={
            id:addUser(userTab)+1,
            fName:firstName,
            lName:lastName,
            email:email,
            pwd:password,
            confirmPwd:confirmPassword ,
            role:"client"
           }
    userTab.push(user);
    // Remettre le tableau à jour dans le BD
    localStorage.setItem("users",JSON.stringify(userTab));
    }
    
}
function login() {
    var logUsername =document.getElementById("logUsername").value;
    var logPassword =document.getElementById("logPassword").value;

    var userTab=JSON.parse(localStorage.getItem("users")||"[]");
    var findedUser;

   for (let i = 0; i <userTab.length;i++) {
        
     if (logUsername==userTab[i].fName && logPassword==userTab[i].pwd) {
           findedUser=userTab[i]
           localStorage.setItem("connectedUserId",(findedUser.id))
          location.href = "file:///C:/Users/client/Desktop/e-commerce-template/index.html";
          break;
          
      }
      if (findedUser.role=='store' && findedUser.status=='nok') {
        document.getElementById("errorLogin").innerHTML="Not Verified!"
        
      }
      else{ document.getElementById("errorLogin").innerHTML="Check your login"}
      
    }
      
    }
function addUser(T) {
    var max;
    if (T.length==0) {
        max=0
    }
    else{
        max=T[0].id;
        for (let i = 0; i < T.length; i++) {
           if (T[i].id > max) {
            max=T[i].id
           }
            
        }
    }

    
return max
}
function goToDisplayProduct(x) {
     
    alert (x)

    location.replace("single-product.html")
}
   


