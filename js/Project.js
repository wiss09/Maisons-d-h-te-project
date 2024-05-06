

function searchObjectById(keyTab, id) {
    var T = JSON.parse(localStorage.getItem(keyTab) || '[]');
    var object;
    for (let i = 0; i < T.length; i++) {
        if (id == T[i].id) {
            object = T[i]
            break;
        }

    }
    return object;
}
function checkInput(x, y) {
    var condition = true;
    if (x.length < y) {
        condition = false
    }
    return condition
}
function indexID(T) {
    var max;
    if (T.length == 0) {
        max = 0
    } else {
        for (let i = 0; i < T.length; i++) {
            var max = T[0].id
            if (T[i].id > max) {
                max = T[i].id
            }
        }
    }
    return max;
}
function CheckPassword(x, y) {
    condition = true
    if (x != y) {
        condition = false
    }
    return condition
}
///////signup
function clientTab() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var firstName = document.getElementById("firstName").value;
    //validateur firstName
    var isValidFirstName = checkInput(firstName, 3)
    if (!isValidFirstName) {
        document.getElementById("errorName").innerHTML = "Check your name pls!"
    } else { document.getElementById("errorName").innerHTML = "" }

    var lastName = document.getElementById("lastName").value;
    //validateur lastName
    var isValidLastName = checkInput(lastName, 3)
    if (!isValidLastName) {
        document.getElementById("errorLast").innerHTML = "Check your last name pls!"
    } else { document.getElementById("errorLast").innerHTML = "" }
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    //validateur phone
    var isValidPhone = checkInput(phone, 8)
    if (!isValidPhone) {
        document.getElementById("errorPhone").innerHTML = "Check your phone number pls!"
    } else { document.getElementById("errorPhone").innerHTML = "" }
    var adress = document.getElementById("adress").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    //validateur confirm
    var isValidConfirm = CheckPassword(confirmPassword, password)
    if (!isValidConfirm) {
        document.getElementById("errorConfirm").innerHTML = "Check your confirm pls!"
    } else { document.getElementById("errorConfirm").innerHTML = "" };
    ///////////////////saving table at database if all condition is true

    if (isValidFirstName && isValidLastName && isValidPhone && isValidConfirm) {



        var user = {
            id: indexID(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            adress: adress,
            password: password,
            confirmPassword: confirmPassword,
            role: "client"
        }
        usersTab.push(user)
        localStorage.setItem("users", JSON.stringify(usersTab))

    }
    clearData()
    
}
///actualiser les inputes
function clearData() {
    var lastName = document.getElementById("lastName").value='';
    var firstName = document.getElementById("firstName").value=''; 
    var email = document.getElementById("email").value='';
    var phone = document.getElementById("phone").value='';
     var adress = document.getElementById("adress").value='';
    var password = document.getElementById("password").value='';
        var confirmPassword = document.getElementById("confirmPassword").value='';
 

}
function ownerTab() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var firstName = document.getElementById("firstName").value;
    //validateur firstName
    var isValidFirstName = checkInput(firstName, 3)
    if (!isValidFirstName) {
        document.getElementById("errorName").innerHTML = "Check your name pls!"
    } else { document.getElementById("errorName").innerHTML = "" }

    var lastName = document.getElementById("lastName").value;
    //validateur lastName
    var isValidLastName = checkInput(lastName, 3)
    if (!isValidLastName) {
        document.getElementById("errorLast").innerHTML = "Check your last name pls!"
    } else { document.getElementById("errorLast").innerHTML = "" }
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    //validateur phone
    var isValidPhone = checkInput(phone, 8)
    if (!isValidPhone) {
        document.getElementById("errorPhone").innerHTML = "Check your phone number pls!"
    } else { document.getElementById("errorPhone").innerHTML = "" }
    var adress = document.getElementById("adress").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    //validateur confirm
    var isValidConfirm = CheckPassword(confirmPassword, password)
    if (!isValidConfirm) {
        document.getElementById("errorConfirm").innerHTML = "Check your confirm pls!"
    } else { document.getElementById("errorConfirm").innerHTML = "" };
    ///////////////////saving table at database if all condition is true

    if (isValidFirstName && isValidLastName && isValidPhone && isValidConfirm) {



        var user = {
            id: indexID(usersTab) + 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            adress: adress,
            password: password,
            confirmPassword: confirmPassword,
            role: "owner",
            statut: "no"
        }
        usersTab.push(user)
        localStorage.setItem("users", JSON.stringify(usersTab))
        
    }
   btn= document.getElementById("submitClient")
    btn.onclick=clearData()
}
function login() {
    var usersTab = JSON.parse(localStorage.getItem("users"))
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    for (let i = 0; i < usersTab.length; i++) {

        if (email == usersTab[i].email && password == usersTab[i].password) {
            localStorage.setItem("connectedUser", usersTab[i].id)
            location.replace("index.html")
            alert("connected")
            document.getElementById("errorLogin").innerHTML = ""
            break;

        } else { document.getElementById("errorLogin").innerHTML = "Check your Login" }

    }

}
///////add house
function addHouse() {
    var houseTab = JSON.parse(localStorage.getItem("houses") || "[]")
    var name = document.getElementById("name").value;
    var adress = document.getElementById("adress").value;
    var ville = document.getElementById("ville").value;
    var description = document.getElementById("description").value;
    var userId = localStorage.getItem("connectedUser")

    house = {
        id: indexID(houseTab) + 1,
        name: name.toLowerCase(),
        adress: adress,
        ville: ville,
        description: description,
        userId: userId

    }
    houseTab.push(house);
    localStorage.setItem("houses", JSON.stringify(houseTab))
    ///refresh inputs for new adding
    var btn=document.getElementById("btnAddHouse")
     btn.onclick=actualiser();
}
function actualiser() {
    var name=document.getElementById('name').value=''
    var adress=document.getElementById('adress').value=''
    var ville=document.getElementById('ville').value=''
     var description=document.getElementById('description').value=''
    
}
////
////////save the ID house and display it rooms
function goToDisplayRooms(x) {
    alert(x)
    localStorage.setItem("houseID2", x)
    location.replace('rooms.html')
}
///////display houses
function home() {
    var houseTab = JSON.parse(localStorage.getItem("houses"));
    var content="";
    for (let i = 0; i < houseTab.length; i++) {
        content += `
        <div  class="col-lg-4 col-md-6 col-sm-6 col-12 post mt-5" data-aos="fade-up" data-aos-delay="100">
        <div class="media media-custom d-block mb-4 h-100">
           <a onclick="goToDisplayRooms(${houseTab[i].id})" href="rooms.html" class="mb-4 d-block"><img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid"></a>
        <div  class="media-body">
          
            <h2><a href="rooms.html"> Name: ${houseTab[i].name}</a></h2>
            <h4 class="mt-0 mb-3 text-primary">Ville: ${houseTab[i].ville}</h4>
            
            <h5>${houseTab[i].adress}</h5>
            <p>${houseTab[i].description}</p>

        </div>
        </div>
        </div>
        `
       

    }

    document.getElementById("houseCard").innerHTML = content;
}
//////add room
function selectResidence() {

    var connectedUser = localStorage.getItem("connectedUser")
    //var ownerObject= searchObjectById("users",connectedUser)
    var houseTab = JSON.parse(localStorage.getItem("houses"))
    var content = `<option value="">Name of Residence</option>`
    var findHouse;
    for (let i = 0; i < houseTab.length; i++) {
        if (connectedUser == houseTab[i].userId) {
            findHouse = houseTab[i]
            content += `
            <option value="${findHouse.name}">${findHouse.name}</option>
            `
        }

    }
    document.getElementById("residenceName").innerHTML = content;
}
function addRoom() {
    
    var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]")
    var name = document.getElementById("name").value;
    var capacity = document.getElementById("capacity").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById('description').value;
    var houseID2= localStorage.getItem("houseID2");
    var ownerId = localStorage.getItem("connectedUser")





    var room = {
        id: indexID(roomsTab) + 1,
        name: name.toLowerCase(),
        capacity: capacity,
        price: price,
        description: description,
        houseID: houseID2,
        ownerId: ownerId
    }


    roomsTab.push(room)
    localStorage.setItem("rooms", JSON.stringify(roomsTab));
///refresh inputs for new adding
actualiser2()
}
///refresh inputs for new adding
function actualiser2(){
    var name = document.getElementById("name").value=""
    var capacity = document.getElementById("capacity").value=""
    var price = document.getElementById("price").value=""
    var description = document.getElementById('description').value=""
    var residenceName = document.getElementById("residenceName").value=""
}
function displayRooms() {

    var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
    var houseID = localStorage.getItem("houseID2");
    var content="";
    for (let i = 0; i < roomsTab.length; i++) {
       

        var object;
        
        // var houseObject = searchObjectById("houses", houseID);
        if (houseID== roomsTab[i].houseID ) {
            object = roomsTab[i]
            content +=` 
            <div class="col-12 mt-5 site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
          <a href="#" class="image d-block bg-image-2" style="background-image: url('images/img_1.jpg');"></a>
          <div class="text">
            <span class="d-block mb-4"><span class="display-4 text-primary">${object.price}</span> <span class="text-uppercase letter-spacing-2">/ per night</span> </span>
            <h2 class="mb-4">${object.name}</h2>
            <p>Far far away, behind the word mountains, ${object.description}.</p>
            
             
            
                   
                         
                
            <span id="errorPlaces"></span>
            <p><a onclick="booking(${object.id})" href="#" class="btn btn-primary text-white mt-4">Book Now</a></p>
            
            </div>
        </div>
            `
        }

    }
    document.getElementById("roomsId").innerHTML = content;
    
   
    

}
function booking(id) {
    localStorage.setItem("roomIdReservation",id),
    location.replace("booking.html");
    
}
function checkDate(checkIn,checkOut) {
    // var checkIn= document.getElementById("checkIn").value;
    // var checkOut= document.getElementById("checkOut").value;
    var a=new Date(checkIn)
    var b=new Date(checkOut)
    var e=new Date()
    var timeIn=a.getTime()
    var timeOut=b.getTime()
    var now=e.getTime()
    
    
var ordersTab= JSON.parse(localStorage.getItem("orders")||'[]')
var id=localStorage.getItem("roomIdReservation");
var condition=true;
    
for (let i = 0; i < ordersTab.length; i++) {
    
    var checkin=ordersTab[i].Check[0]
    var checkout=ordersTab[i].Check[1]
    c=new Date(checkin)
    d=new Date(checkout)
    var  checkin1=c.getTime()
    var  checkout1=d.getTime()
   
   
    
    if (id==ordersTab[i].roomId) {
        
    if ((timeIn < checkin1 && timeOut < checkin1 ) || ( timeIn > checkout1 && timeOut> checkout1)) {
        condition
        
    }else{ condition=false}
    
}
}
 return condition 
  
}
    
    
function roomOrder() {
    var places= document.getElementById("placeNbr").value;
    var inputCheckIn= document.getElementById("checkIn").value;
    var inputCheckOut= document.getElementById("checkOut").value;
    
    var id=localStorage.getItem("roomIdReservation"); // get ID of currently saved room for booking 
    var clientId= localStorage.getItem("connectedUser"); //get ID user for tag who is the booker
    var houseID= localStorage.getItem("houseID2")
    
    
    var ordersTab= JSON.parse(localStorage.getItem("orders")||"[]")
    var roomsTab= JSON.parse(localStorage.getItem("rooms")) //call the table for compare certain property to get correct book
     var isAvailable= checkDate(inputCheckIn,inputCheckOut)// declaration function of check the date of book
    
    
        
    
    for (let i = 0; i < roomsTab.length; i++) {
        
        if (clientId) {
            if (roomsTab[i].id==id && places<=roomsTab[i].capacity && isAvailable  ) {  //this condition make us to  know if the (places , the date , room ID) are available to continue his booking
                
                var order = {
                   id: indexID(ordersTab) + 1,
                   places: places,
                   clientId: clientId,
                   Check:[inputCheckIn,inputCheckOut],
                   
                   roomId: roomsTab[i].id,
                   houseID:houseID,
                     //to know which house , this room belong
                    }
            
        
        ordersTab.push(order)
        localStorage.setItem("orders",JSON.stringify(ordersTab))
        //renew les input for new booking
        var places= document.getElementById("placeNbr").value="";
        var inputCheckIn= document.getElementById("checkIn").value="";
        var inputCheckOut= document.getElementById("checkOut").value="";
        
             }   
         //this condition for correct diplaying error msg
                     if (!isAvailable) {
                        document.getElementById("errorCheck").innerHTML="This room isn't available in this date"
                     document.getElementById("errorCheck").style.color="red";
                    }else{document.getElementById("errorCheck").innerHTML="";}
                     if (places>roomsTab[i].capacity) {
                        document.getElementById("errorPlaces").style.color="red";// just for change color Error msg
                    document.getElementById("errorPlaces",).innerHTML="your choice more than room's place";
                    }else{document.getElementById("errorPlaces").innerHTML="";}
    //     }else{ document.getElementById("errorCheck").innerHTML="This room isn't available in this date"
    //     document.getElementById("errorCheck").style.color="red";// just for change color Error msg
    //     document.getElementById("errorPlaces").style.color="red";// just for change color Error msg
    //    document.getElementById("errorPlaces",).innerHTML="your choice more than room's place"
    //    }

      
   }else{location.replace("Sign up.html")} // the seconde condition if the user isn't a member , it will take him to sign up
}

}
             
             
                       
      
        
////// problem select 
////////
/////// condition (the room if disponible ou nn ) && condition date
function dashbordClient() {
    var ordersTab= JSON.parse(localStorage.getItem("orders")||"[]")
    connectedUser= localStorage.getItem("connectedUser")
    var content="";
    for (let i = 0; i < ordersTab.length; i++) {
         var client= searchObjectById("users",ordersTab[i].clientId)//get object of client to tag his name in the table
         var room= searchObjectById("rooms",ordersTab[i].roomId) ////get object of room to tag it name in the table   
        if (connectedUser==ordersTab[i].clientId) {
            content+=`
            <tr>
            <td >${client.firstName}</td>
            <td>${room.name}</td>
            <td >${room.price}</td>
            <td >${ordersTab[i].places}</td>
            <td >${ordersTab[i].Check} </td>
            <td>
            <p><a onclick="Delete(${ordersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">cancel</a></p>
            </td>
            
          </tr>
         
            `
        }
    }
    //change color table
    
    document.getElementById("dashbordClientId").innerHTML=content;
}
function Delete(id) {
    var T=JSON.parse(localStorage.getItem("orders"))
    for (let i = 0; i < T.length; i++) {
        
        
    
    if (id==T[i].id) {
        T.splice(i , 1)
        localStorage.setItem("orders",JSON.stringify(T));
        break;
    }
}
location.reload;
}
//////dashbord owner
////Room's Table
function dashbordOwner() {
    var roomsTab=JSON.parse(localStorage.getItem("rooms")|| "[]");
    var connectedUser= localStorage.getItem("connectedUser");
    
    var content="";
    for (let i = 0; i < roomsTab.length; i++) {
        var objectHouse= searchObjectById("houses",roomsTab[i].houseID)
        if (connectedUser==roomsTab[i].ownerId) {
            content+=`
            <tr">
            
            <td>${roomsTab[i].name}</td>
            <td >${roomsTab[i].price}</td>
            <td >${roomsTab[i].capacity}</td>
            <td >${objectHouse.name}</td>
            <td class="d-flex ">
            <p class=" mr-3"><a onclick="Delete()" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
            <p class=" mr-3"><a onclick="update(${roomsTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
            
            </td>
            
          </tr>
         
            `
        }
    }
    //change color table
    
    document.getElementById("dashbordClientId").innerHTML=content;
    
}
function update(id) {
    
    var roomsTab=JSON.parse(localStorage.getItem("rooms")|| "[]");
    var content;
    for (let i = 0; i < roomsTab.length; i++) {
       if (id==roomsTab[i].id) {
        content=`
        <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            
    <div id="form11" action="#" method="post" class="bg-white p-md-5 p-4 mb-5 border">
      <div class="row">
        <div class="col-md-6 form-group">
          <label class="text-black font-weight-bold" for="name">Room</label>
          <input value="${roomsTab[i].name}" type="text" id="editRoom" class="form-control ">
          
        </div>
        <div class="col-md-6 form-group">
          <label class="text-black font-weight-bold" for="phone">Price</label>
          <input value="${roomsTab[i].price}" type="text" id="editPrice" class="form-control ">
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12 form-group">
          <label class="text-black font-weight-bold" for="email">Places</label>
          <input value="${roomsTab[i].capacity}" type="text" id="editPlaces" class="form-control ">
        </div>
        <div class="col-md-12 form-group">
          <label class="text-black font-weight-bold" for="email">House Name</label>
          <input value="${roomsTab[i].residenceName}" type="text" id="editHouseName" class="form-control ">
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-6 form-group">
          <input type="submit" value="Validation" onclick="validate(${roomsTab[i].id})" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
        </div>
      </div>
    </div>
     
        `
       }
        
    }
    window.scrollBy(0,2000)
document.getElementById("edit").innerHTML=content;


}
function validate(id) {
    var roomsTab=JSON.parse(localStorage.getItem("rooms")|| "[]");
    var room= document.getElementById("editRoom").value;
    var price= document.getElementById("editPrice").value;
    var places= document.getElementById("editPlaces").value;
    var houseName= document.getElementById("editHouseName").value;
    for (let i = 0; i < roomsTab.length; i++) {
        if (id==roomsTab[i].id) {
            roomsTab[i].name=room
            roomsTab[i].price=price
            roomsTab[i].capacity=places
            roomsTab[i].residenceName=houseName
            break;
        }
        
    }
localStorage.setItem("rooms",JSON.stringify(roomsTab))
}
function ordersOwner() {
    var ordersTab=JSON.parse(localStorage.getItem("orders")|| "[]");
    var connectedUser= localStorage.getItem("connectedUser");
    
    
    var content="";
    for (let i = 0; i < ordersTab.length; i++) {
        var objectRoom= searchObjectById("rooms",ordersTab[i].roomId);   
        var objectClient= searchObjectById("users",ordersTab[i].clientId)
        var objectHouse= searchObjectById("houses",ordersTab[i].houseID)
           
        if (connectedUser==objectRoom.ownerId) {
            content+=`
            <tr>
            <td>${objectRoom.name}</td>
            <td>${objectClient.firstName}</td>
            <td >${ordersTab[i].Check} </td>
            <td>${objectRoom.price}</td>
            <td >${ordersTab[i].places}</td>
            <td >${objectHouse.name}</td>
            <td class="d-flex ">
            <p class=" mr-3"><a onclick="Delete()" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
            <p class=" mr-3"><a onclick="update()" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
            </td>
            
          </tr>
         
            `
        }
    }
    //change color table
    
    document.getElementById("OrdersOwnerId").innerHTML=content;
    
}
////House's Table
function housesOwner() {
    var houseTab= JSON.parse(localStorage.getItem("houses"))
    connectedUser=localStorage.getItem("connectedUser");
    var content="";
    for (let i = 0; i < houseTab.length; i++) {
        
        
    
    if (connectedUser==houseTab[i].userId) {
        content+=`
        <tr>
        <td>${houseTab[i].name}</td>
        <td>${houseTab[i].ville}</td>
        <td>${houseTab[i].adress}</td>
        <td>${houseTab[i].description}</td>
        
        <td class="d-flex ">
            <p class=" mr-3"><a onclick="deleteHouse(${houseTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
            <p class=" mr-3"><a onclick="updateHouse(${houseTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
            <p class=" mr-3"><a onclick="addRoom2(${houseTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Add Room</a></p>
            
        </td>
        </tr>
        `
    }
}
document.getElementById("housesOwnerId").innerHTML=content;
}
////THIS Function for taking ID House for correct adding room
function addRoom2(id) {
    localStorage.setItem("houseID2",id)
    location.replace('Add Room.html')
}
function deleteHouse(id) {
    var T=JSON.parse(localStorage.getItem("houses"))
    for (let i = 0; i < T.length; i++) {
        
        
    
    if (id==T[i].id) {
        T.splice(i , 1)
        localStorage.setItem("houses",JSON.stringify(T));
        break;
    }
}
location.reload;
}
function updateHouse(id) {
    
    var houseTab=JSON.parse(localStorage.getItem("houses")|| "[]");
    var content;
    for (let i = 0; i < houseTab.length; i++) {
       if (id==houseTab[i].id) {
        content=`
        <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            
    <div id="form11" action="#" method="post" class="bg-white p-md-5 p-4 mb-5 border">
      <div class="row">
        <div class="col-md-6 form-group">
          <label class="text-black font-weight-bold" for="name">Name</label>
          <input value="${houseTab[i].name}" type="text" id="editName" class="form-control ">
          
        </div>
        <div class="col-md-6 form-group">
          <label class="text-black font-weight-bold" for="phone">Ville</label>
          <input value="${houseTab[i].ville}" type="text" id="editVille" class="form-control ">
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12 form-group">
          <label class="text-black font-weight-bold" for="email">Adress</label>
          <input value="${houseTab[i].adress}" type="text" id="editAdress" class="form-control ">
        </div>
        <div class="col-md-12 form-group">
          <label class="text-black font-weight-bold" for="email">Description</label>
          <textarea class="form-control name="" id="editDescription" cols="10" rows="15">${houseTab[i].description}</textarea>
          
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-6 form-group">
          
          <input type="submit" value="Validation" onclick=" validateHouse(${houseTab[i].id})" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
        </div>
      </div>
    </div>
     
        `
       }
        
    }
document.getElementById("editHouse").innerHTML=content;
window.scrollBy(0,2000)
}
function validateHouse(id) {
    var houseTab=JSON.parse(localStorage.getItem("houses"));
    var house= document.getElementById("editName").value;
    var ville= document.getElementById("editVille").value;
    var adress= document.getElementById("editAdress").value;
    var description= document.getElementById("editDescription").value;
    for (let i = 0; i < houseTab.length; i++) {
        if (id==houseTab[i].id) {
            houseTab[i].name=house
            houseTab[i].ville=ville
            houseTab[i].adress=adress
            houseTab[i].description=description
            break;
        }
        
    }
localStorage.setItem("houses",JSON.stringify(houseTab))
}
/////////dashbord Admin
/// menage usersadmin
function dashbordAdminUsers(){
    var usersTab= JSON.parse(localStorage.getItem("users")||"[]");
    var content="";
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].statut=="no") {
            content+=`
            <tr">
                
                <td>${usersTab[i].firstName}</td>
                <td >${usersTab[i].lastName}</td>
                <td >${usersTab[i].email}</td>
                <td >${usersTab[i].password}</td>
                <td >${usersTab[i].adress}</td>
                <td >${usersTab[i].role}</td>
    
                <td class="d-flex ">
                <p class=" mr-3"><a onclick="DeleteUsers(${usersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
                <p class=" mr-3"><a onclick="Update(${usersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
                <p class=" mr-3"><a onclick="accept(${usersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Accept</a></p>
                </td>
                
              </tr>
             
            `
        }else{
            content+=`
            <tr">
                
                <td>${usersTab[i].firstName}</td>
                <td >${usersTab[i].lastName}</td>
                <td >${usersTab[i].email}</td>
                <td >${usersTab[i].password}</td>
                <td >${usersTab[i].adress}</td>
                <td >${usersTab[i].role}</td>
    
                <td class="d-flex ">
                <p class=" mr-3"><a onclick="DeleteUsers(${usersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
                <p class=" mr-3"><a onclick="editUsers(${usersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
                
                </td>
                
              </tr>
             
            `
        }
       
        
    }
    document.getElementById("usersId1").innerHTML=content
    ;
}
////delete users by admin
function DeleteUsers(id) {
    var T=JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i < T.length; i++) {
        
        
    
    if (id==T[i].id) {
        T.splice(i , 1)
        localStorage.setItem("users",JSON.stringify(T));
        break;
    }
}
location.reload;
}
/////edit users by admin
function editUsers(id) {
    
    var usersTab=JSON.parse(localStorage.getItem("users")|| "[]");
    var content;
    for (let i = 0; i < usersTab.length; i++) {
       if (id==usersTab[i].id) {
        content=`
        <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            
    <div id="form11" action="#" method="post" class="bg-darkgray p-md-5 p-4 mb-5 border">
      <div class="row">
        <div class="col-md-6 form-group">
          <label class="text-black font-weight-bold" for="name">Name</label>
          <input value="${usersTab[i].firstName}" type="text" id="editfirstName" class="form-control ">
          
        </div>
        <div class="col-md-6 form-group">
          <label class="text-black font-weight-bold" for="phone">last Name</label>
          <input value="${usersTab[i].lastName}" type="text" id="editlastName" class="form-control ">
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12 form-group">
          <label class="text-black font-weight-bold" for="email">Email</label>
          <input value="${usersTab[i].email}" type="text" id="editemail" class="form-control ">
        </div>
        <div class="col-md-12 form-group">
        <label class="text-black font-weight-bold" for="email">Password</label>
        <input value="${usersTab[i].password}" type="text" id="editpassword" class="form-control ">
      </div>
      <div class="col-md-12 form-group">
      <label class="text-black font-weight-bold" for="email">Adress</label>
      <input value="${usersTab[i].adress}" type="text" id="editAdressUser" class="form-control ">
    </div>
    <div class="col-md-12 form-group">
    <label class="text-black font-weight-bold" for="email">Role</label>
    <input value="${usersTab[i].role}" type="text" id="editRole" class="form-control ">
  </div>
      </div>
  
      <div class="row">
        <div class="col-md-6 form-group">
          
          <input type="submit" value="Validation" onclick="validateUser(${usersTab[i].id}) " class="btn btn-primary text-white py-3 px-5 font-weight-bold">
        </div>
      </div>
    </div>
     
        `
       }
        
    }
    scroll({
        top:0,
        behavior:"smooth"
    })
document.getElementById("editUsers").innerHTML=content;

}
function validateUser(id) {
    var usersTab=JSON.parse(localStorage.getItem("users"));
    var editfirstName= document.getElementById("editfirstName").value;
    var editlastName= document.getElementById("editlastName").value;
    var editemail= document.getElementById("editemail").value;
    var editpassword= document.getElementById("editpassword").value;
    var editAdressUser= document.getElementById("editAdressUser").value;
    var editRole= document.getElementById("editRole").value;
    for (let i = 0; i < usersTab.length; i++) {
        if (id==usersTab[i].id) {
            usersTab[i].firstName=editfirstName
            usersTab[i].lastName=editlastName
            usersTab[i].email=editemail
            usersTab[i].password=editpassword
            usersTab[i].adress=editAdressUser
            usersTab[i].role=editRole
            break;
        }
        
    }
localStorage.setItem("users",JSON.stringify(usersTab))
}
function accept(id) {
    var usersTab= JSON.parse(localStorage.getItem("users"))

    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].statut=="no") {
            usersTab[i].statut="yes"
            localStorage.setItem("users",JSON.stringify(usersTab))
            location.reload
            break;
        }
        
    }
}
/////menage orders
function dashbordAdminOrders() {
    var ordersTab= JSON.parse(localStorage.getItem("orders"));
   
    var content="";
    for (let i = 0; i < ordersTab.length; i++) {
        var objectRoom= searchObjectById("rooms",ordersTab[i].roomId);   
        var objectClient= searchObjectById("users",ordersTab[i].clientId)
        var objectHouse= searchObjectById("houses",ordersTab[i].houseID)
        content+=`
        <tr>
            <td>${objectRoom.name}</td>
            <td>${objectClient.firstName}</td>
            <td >${ordersTab[i].Check} </td>
            <td>${objectRoom.price}</td>
            <td >${ordersTab[i].places}</td>
            <td >${objectHouse.name}</td>
            <td class="d-flex ">
            <p class=" mr-3"><a onclick="deleteOrders1(${ordersTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
            
            </td>
            
          </tr>
        `
        
    }
    document.getElementById("ordersId1").innerHTML=content;
}
function deleteOrders1(id) {
    var T=JSON.parse(localStorage.getItem("orders"))
    for (let i = 0; i < T.length; i++) {
        
        
    
    if (id==T[i].id) {
        T.splice(i , 1)
        localStorage.setItem("orders",JSON.stringify(T));
        break;
    }
}
location.reload;
}
/// menage Rooms by admin
function dashbordAdminRooms() {
    var roomsTab= JSON.parse(localStorage.getItem("rooms"));
    var content="";
    for (let i = 0; i < roomsTab.length; i++) {
        var objectHouse= searchObjectById("houses",roomsTab[i].houseID)
        var owner=searchObjectById("users",roomsTab[i].ownerId);
        content+=`
        <tr>
        <td>${owner.firstName}</td>
        <td>${roomsTab[i].name}</td>
        <td>${roomsTab[i].capacity}</td>
        <td>${roomsTab[i].price}</td>
        <td>${objectHouse.name}</td>
        <td>${roomsTab[i].description}</td>
        <td class="d-flex">
         <p class=" mr-3"><a onclick="deleteRooms1()${roomsTab[i].id}" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
         <p class=" mr-3"><a onclick="editRooms1(${roomsTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
        </td>
        </tr>
        `
        
    }
    document.getElementById("roomsId1").innerHTML=content;
}
/////Edit rooms by admin
function editRooms1(id) {
    var roomsTab= JSON.parse(localStorage.getItem("rooms"))
    var content="";
    for (let i = 0; i < roomsTab.length; i++) {
        if (id==roomsTab[i].id) {
            content=`
            <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
            
            <div class="form11" action="#" method="post" class="bg-white p-md-5 p-4 mb-5 border">
              <div class="row">
                <div class="col-md-6 form-group">
                  <label class="text-black font-weight-bold" for="name">Room</label>
                  <input value="${roomsTab[i].name}" type="text" id="editRoom" class="form-control ">
                  
                </div>
                <div class="col-md-6 form-group">
                  <label class="text-black font-weight-bold" for="phone">Price</label>
                  <input value="${roomsTab[i].price}" type="text" id="editPrice" class="form-control ">
                </div>
              </div>
          
              <div class="row">
                <div class="col-md-12 form-group">
                  <label class="text-black font-weight-bold" for="email">Places</label>
                  <input value="${roomsTab[i].capacity}" type="text" id="editPlaces" class="form-control ">
                </div>
                <div class="col-md-12 form-group">
                  <label class="text-black font-weight-bold" for="email">House Name</label>
                  <input value="${roomsTab[i].residenceName}" type="text" id="editHouseName" class="form-control ">
                </div>
              </div>
          
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="submit" value="Validation" onclick="validate(${roomsTab[i].id})" class="btn btn-primary text-white py-3 px-5 font-weight-bold">
                </div>
              </div>
            </div>
             
            `
        }
        
    }
    document.getElementById('editHouse').innerHTML=content;
}
/////delete rooms
function deleteRooms1(id) {
    var T=JSON.parse(localStorage.getItem("rooms"))
    for (let i = 0; i < T.length; i++) {
        
        
    
    if (id==T[i].id) {
        T.splice(i , 1)
        localStorage.setItem("rooms",JSON.stringify(T));
        break;
    }
}
location.reload;
}
function dashbordAdminHouses(){
    var houseTab= JSON.parse(localStorage.getItem("houses"),"[]")
    
    var content="";
    for (let i = 0; i < houseTab.length; i++) {
        
        
    
    
        content+=`
        <tr>
        <td>${houseTab[i].name}</td>
        <td>${houseTab[i].ville}</td>
        <td>${houseTab[i].adress}</td>
        <td>${houseTab[i].description}</td>
        
        <td class="d-flex ">
            <p class=" mr-3"><a onclick="deleteHouse(${houseTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Delete</a></p>
            <p class=" mr-3"><a onclick="updateHouse(${houseTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Edit</a></p>
            <p class=" mr-3"><a onclick="addRoom2(${houseTab[i].id})" href="#" class="btn btn-primary text-white mt-4">Add Room</a></p>

        </td>
        </tr>
        `
    
}
document.getElementById("housesOwnerId").innerHTML=content;

}
//////navigation Bar selon le Role d'acteur
function displayNavBar() {
    var usersTab= JSON.parse(localStorage.getItem("users"))
    var connectedUser=localStorage.getItem("connectedUser")
    var content;
    
    for (let i = 0; i < usersTab.length; i++) {
        connectedObject=searchObjectById("users",connectedUser)
        
        if (connectedUser) {
            
        
        if (connectedObject.role=="admin") {
            content=`
                     <li><a href="index.html">Home</a></li>
                      <li><a href="rooms.html">Rooms</a></li>
                      <li><a href="Add Guest House.html">Add Guest House</a></li>
                      <li><a href="Add Room.html">Add Room</a></li>
                      
                      <li ><a href="Dashbord Admin.html">Dashbord Admin</a></li>
                      <li><a href="Sign up Owner.html">Sign up Owner</a></li>
                      <li><a href="Login.html">Login</a></li>
                      <li><a href="Sign up.html">Sign up</a></li>
                     
            `
        }
        else if (connectedObject.role=="owner") {
            content=`
            <li><a href="index.html">Home</a></li>
             <li><a href="rooms.html">Rooms</a></li>
             <li><a href="Add Guest House.html">Add Guest House</a></li>
             <li><a href="Add Room.html">Add Room</a></li>
             <li ><a href="Dashbord Owner.html">Dashbord Owner</a></li>
             
             <li><a href="Sign up Owner.html">Sign up Owner</a></li>
             <li><a href="Login.html">Login</a></li>
             
             
   `
    }else{
        content=`
        <li><a href="index.html">Home</a></li>
         <li><a href="rooms.html">Rooms</a></li>
         
         <li><a href="Login.html">Login</a></li>
         <li><a href="Sign up.html">Sign up</a></li>
         <li><a href="reservation.html">Reservation</a></li>
`
    }
}else{

content=`
        <li><a href="index.html">Home</a></li>
        <li><a href="rooms.html">Rooms</a></li>
        <li><a href="Sign up Owner.html">Sign up Owner</a></li>
         <li><a href="Login.html">Login</a></li>
         <li><a href="Sign up.html">Sign up</a></li>
         
`
}
    
        
    }
    
    document.getElementById('navBar').innerHTML=content;
}
function search(value) {
    var obj;
    var content="";

   roomsTab= JSON.parse(localStorage.getItem("rooms"))
   for (let i = 0; i < roomsTab.length; i++) {
         if (roomsTab[i].name.includes(value.toLowerCase())) {
            console.log(roomsTab[i].name)
            obj=roomsTab[i]
           content+=`
           <div class="mt-5 site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
           <a href="#" class="image d-block bg-image-2" style="background-image: url('images/img_1.jpg');"></a>
           <div class="text">
             <span class="d-block mb-4"><span class="display-4 text-primary">${obj.price}</span> <span class="text-uppercase letter-spacing-2">/ per night</span> </span>
             <h2 class="mb-4">${obj.name}</h2>
             <p>Far far away, behind the word mountains, ${obj.description}.</p>
             <div class="col-md-6 mb-3 mb-md-0">
                       <label for="adults" class="font-weight-bold text-black">Number of Places</label>
                       <div class="field-icon-wrap">
                         <div  class="icon"><span class="ion-ios-arrow-down"></span></div>
                         <select name="" id="places"  class="form-control">
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                         </select>
                       </div>
                     </div>
            
                         
             <span id="errorPlaces"></span>
             <p><a onclick="roomOrder(${obj.id})" href="#" class="btn btn-primary text-white mt-4">Book Now</a></p>
             
             </div>
         </div>
           `
            
         }    
    
   }
   document.getElementById('roomsId').innerHTML=content;
}
function searchHome(value) {
    var obj;
    var content;var content="";
   houseTab= JSON.parse(localStorage.getItem("houses"))
   for (let i = 0; i < houseTab.length; i++) {
         if (houseTab[i].name.includes(value)) {
            console.log(houseTab[i].name)
            obj=houseTab[i]
           content+=`
           <div  class="col-lg-4 col-md-6 col-sm-6 col-12 post mt-5" data-aos="fade-up" data-aos-delay="100">
        <div class="media media-custom d-block mb-4 h-100">
           <a onclick="goToDisplayRooms(${houseTab[i].id})" href="rooms.html" class="mb-4 d-block"><img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid"></a>
        <div  class="media-body">
          
            <h2><a href="rooms.html"> Name: ${obj.name}</a></h2>
            <h4 class="mt-0 mb-3 text-primary">Ville: ${obj.ville}</h4>
            
            <h5>${obj.adress}</h5>
            <p>${obj.description}</p>

        </div>
        </div>
        </div>
           `
            
         }    
    
   }
   document.getElementById("houseCard").innerHTML = content;
   //window.scrollBy(0,2000)
}