function searchObjectByKey(keyTab, IdObj) {
    var T = JSON.parse(localStorage.getItem(keyTab) || "[]");
    var findObj;
    for (let i = 0; i < T.length; i++) {
        if (IdObj == T[i].id) {
            findObj = T[i]
            break;
        }
    }
    return findObj;
}

function addUser(T) {
    var max;
    if (T.length == 0) {
        max = 0
    }
    else {
        max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id
            }

        }
    }
    return max
}
function addCategory() {
    var tabCatagory = JSON.parse(localStorage.getItem("cat") || "[]");
    var nameCatagory = document.getElementById("nameCatagory").value;

    var catego = {
        id: checkID(tabCatagory) + 1,
        nomCatagory: nameCatagory
    }
    tabCatagory.push(catego);
    localStorage.setItem("cat", JSON.stringify(tabCatagory));
}
function displayCategories() {
    var tabCatagory = JSON.parse(localStorage.getItem("cat") || "[]")
    var content = `<option selected>Catagory</option>`;
    for (let i = 0; i < tabCatagory.length; i++) {
        content = content +

            `<option value="${tabCatagory[i].nomCatagory}">${tabCatagory[i].nomCatagory}</option>`


    }
    document.getElementById("cat").innerHTML = content;

}

function checkID(T) {

    var max;

    if (T.length == 0) { max = 0 }
    else {
        var max = T[0].id
        for (let i = 0; i < T.length; i++) {

            if (T[i].id > max) {
                max = T[i].id
            }
        }
    }

    return max;
}
function check(x, y) {
    var condition = true
    if (x.length < y) {
        condition = false
    }
    return condition;
}
function checkNum(x, y) {
    var condition = true
    if (x < y) {
        condition = false
    }
    return condition;
}
//////////////////////////////////
function addProduct() {

    var nameProduct = document.getElementById("nameProduct").value;
    var isValidProductName = check(nameProduct, 2)
    if (!isValidProductName) {
        document.getElementById("nameError").innerHTML = "check your name product"
    } else { document.getElementById("nameError").innerHTML = "" }
    ////////////
    var price = document.getElementById("price").value;
    var isValidPrice = checkNum(price, 0)
    if (!isValidPrice) {
        document.getElementById("priceError").innerHTML = "check your price"
    } else { document.getElementById("priceError").innerHTML = "" }
    /////////////
    var stock = document.getElementById("stock").value;
    var isValidStock = checkNum(stock, 10)
    if (!isValidStock) {
        document.getElementById("stockError").innerHTML = "check your stock"
    } else { document.getElementById("stockError").innerHTML = "" }
    /////////////
    var catagory = document.getElementById('cat').value;
    //localStorage.removeItem("product")  ;
    var productTab = JSON.parse(localStorage.getItem("product") || "[]");
    var storeId = localStorage.getItem("connectedUserId");

    if (isValidProductName && isValidPrice && isValidStock) {
        var prod = {
            id: checkID(productTab) + 1,
            nameProduct: nameProduct,
            price: price,
            stock1: stock,
            storeId: storeId,
            catagory: catagory
        }


        productTab.push(prod);
        localStorage.setItem("product", JSON.stringify(productTab));

    }


}
function goToDisplayProduct(x) {
    alert(x)
    localStorage.setItem("keyID", x)
    location.replace('single-product.html')
}
function displayProduct() {
    var producters = JSON.parse(localStorage.getItem('product') || "[]")
    var content = "";
    for (let i = 0; i < producters.length; i++) {
        content = content + `<div class="col-lg-3 col-md-6">
              <div class="single-product">
                  <img class="img-fluid" src="img/product/p1.jpg" alt="">
                  <div class="product-details">
                      <h6>${producters[i].nameProduct}</h6>
                      <div class="price">
                          <h6>${producters[i].price}</h6>
                          <h6 class="l-through">$210.00</h6>
                      </div>
                      <button class="btn btn-primary" type="submit" onclick="goToDisplayProduct(${producters[i].id})">Display</button>
                      </div>
              </div>
          </div>`

    }

    document.getElementById("display").innerHTML = content;

}



function singleProduct2() {
    var idkey = localStorage.getItem("keyID");
    var producters = JSON.parse(localStorage.getItem("product"));

    var findProduct = "";


    for (let i = 0; i < producters.length; i++) {
        if (idkey == producters[i].id) {
            findProduct = producters[i]
            break;
        }
    }
    document.getElementById("productName").innerHTML = findProduct.nameProduct;
    document.getElementById("productPrice").innerHTML = findProduct.price;
    document.getElementById("catagory").innerHTML = findProduct.catagory;

    if (findProduct.stock1 > 0) {
        document.getElementById('productStock').innerHTML = "Instock"
    } else {
        document.getElementById('productStock').innerHTML = "Out of stock"
    }


}

function commande() {
    var userId = localStorage.getItem("connectedUserId");
    var producters = JSON.parse(localStorage.getItem("product") || "[]")
    var orderTab = JSON.parse(localStorage.getItem("orders") || "[]");


    if (userId) { // this line check if you login and your ID is found so,prepare yor order

        var producters = JSON.parse(localStorage.getItem("product") || "[]")
        var productId = localStorage.getItem("keyID");
        var qty = document.getElementById('qty').value;

        for (let i = 0; i < producters.length; i++) {
            var newStock = 0;
            if (productId == producters[i].id && qty <= producters[i].stock1) {
                newStock = producters[i].stock1 - qty
                producters[i].stock1 = newStock




                //alert (newStock)
                //alert (producters[i].stock1)
            } else { document.getElementById("errorStock").innerHTML = "Your choice not found" }

        }


        var order = {
            id: addUser(orderTab) + 1,
            qty: qty,
            userId: userId,
            productId: productId
        }

        orderTab.push(order);
        localStorage.setItem("orders", JSON.stringify(orderTab));
        localStorage.setItem("product", JSON.stringify(producters));
    }
}
function displayStoreProducts() {
    var storeId = localStorage.getItem("connectedUserId");
    var productTab = JSON.parse(localStorage.getItem("product") || "[]");
    var content = "";
    for (let i = 0; i < productTab.length; i++) {
        if (storeId == productTab[i].storeId) {
            content = content + ` 
            <tr>

            <td>${productTab[i].storeId}</td>
            <td>${productTab[i].nameProduct}</td>
            <td>${productTab[i].price}</td>
            <td>${productTab[i].stock1}</td>
            <td>${productTab[i].catagory}</td>
            
            <td>
            <button type="button" class="btn btn-success">Edit</button>
            <button type="button" class="btn btn-danger" onclick="deleteProd(${productTab[i].id})">Delete</button>
            <button type="button" class="btn btn-warning">Display</button>
            </td>
            
            </tr>`
        }

    }
    document.getElementById("productStore").innerHTML = content;
}



function deleteProd(id) {
    var producters = JSON.parse(localStorage.getItem('product') || "[]")
    for (let i = 0; i < producters.length; i++) {
        if (producters[i].id == id) {
            producters.splice(i, 1);
            localStorage.setItem("product", JSON.stringify(producters));
            break;

        }

    }
    location.reload;
}
function storeOrder() {
    var orderTab = JSON.parse(localStorage.getItem("orders") || "[]");
    var producters = JSON.parse(localStorage.getItem("product"));
    var content = "";
    for (let i = 0; i < orderTab.length; i++) {
        var connectedUserId = localStorage.getItem("connectedUserId")
        var product = searchObjectByKey("product", orderTab[i].productId)
        var user = searchObjectByKey("users", orderTab[i].userId)
        if (connectedUserId == product.storeId) {
            content = content + `
      <tr>

      <td>${orderTab[i].id}</td>
      <td>${user.fName}</td>
      <td>${product.nameProduct}</td>
      <td>${orderTab[i].qty}</td>
      <td>${product.price} * ${orderTab[i].qty}</td>
      
      
      </tr>
      `
        }

    }

    document.getElementById("storeOrderID").innerHTML = content;

}
function clientOrder() {
    var connectedUserId = localStorage.getItem("connectedUserId")
    var orderTab = JSON.parse(localStorage.getItem("orders") || "[]")
    var content = "";
    var totalSum=0;
    for (let i = 0; i < orderTab.length; i++) {
        //var totalSum = totalSum + (product.price * orderTab[i].qty)
        client = searchObjectByKey("users", connectedUserId)
        product = searchObjectByKey("product", orderTab[i].productId)
        if (orderTab[i].userId == connectedUserId) {
            content = content + `
      <tr>

      <td>${orderTab[i].id}</td>
      <td>${product.nameProduct}</td>
      <td>${product.price}</td>
      <td>${orderTab[i].qty}</td>
      <td>${product.price} * ${orderTab[i].qty}</td>
      
      
      </tr>
      `
        }
    }
    alert("hi")
    document.getElementById("clientOrderID").innerHTML = content;

}


/////////admin///////
function allProducts() {
    var producters = JSON.parse(localStorage.getItem("product"))
    var content = "";
    for (let i = 0; i < producters.length; i++) {
        content += `
        <tr>
        <td>${producters[i].nameProduct}</td>
        <td>${producters[i].price}</td>
        <td>${producters[i].stock1}</td>
        <td>${producters[i].id}</td>
        
        <td>
        
        <button type="button" class="btn btn-success" onclick="goToDisplayProduct(${producters[i].id})">Dispaly</button>
        <button type="button" class="btn btn-danger" onclick="deleteProd(${producters[i].id})">Delete</button>
        <button type="button" class="btn btn-warning" onclick="updateProd(${producters[i].id})">Update</button>
                                                                       
        </td>
        </tr>
        `




    }
    document.getElementById("allProductId").innerHTML = content;

}




function updateProd(id) {
    var producters = JSON.parse(localStorage.getItem('product') || "[]")
    var product = searchObjectByKey("product", id)
    console.log(product);


    var content = `
            <div class="row login_form" >
           <div class="col-md-12 form-group">
					<input type="text" class="form-control" id="nameProduct" name="name" value="${product.nameProduct}"
						onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'">
				</div>

				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="price" name="name" value="${product.price}"
						onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
				</div>



				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="stock" name="name" value="${product.stock1}"
						onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
				</div>
                 </div>
				<div class="col-md-12 form-group mt-3">
					<button type="submit" value="submit" class="primary-btn" onclick="validate(${product.id})">validation</button>

				</div>
			</div>
           `

    document.getElementById("updateProductID").innerHTML = content;
}
function validate(id) {

    var upName = document.getElementById("nameProduct").value;
    var upPrice = document.getElementById("price").value;
    var upStock = document.getElementById("stock").value;
    var producters = JSON.parse(localStorage.getItem('product') || "[]")

    for (let i = 0; i < producters.length; i++) {
        if (producters[i].id == id) {
            producters[i].nameProduct = upName
            producters[i].price = upPrice
            producters[i].stock1 = upStock
            localStorage.setItem("product", JSON.stringify(producters));
            break;
        }

    }

    location.reload;
}
function allOrders() {
    var orderTab = JSON.parse(localStorage.getItem("orders") || "[]"),

        content = "";
    for (let i = 0; i < orderTab.length; i++) {
        var user = searchObjectByKey("users", orderTab[i].userId);
        var product = searchObjectByKey("product", orderTab[i].productId);
        var total = (product.price * orderTab[i].qty);
        content += `
        <tr>
        <td>${user.fName}</td>
        <td>${product.nameProduct}</td>
        <td>${product.price}</td>
        <td>${orderTab[i].qty}</td>
        <td>${total}</td>
        
        <td>
        
        <button type="button" class="btn btn-success" onclick="">Dispaly</button>
        <button type="button" class="btn btn-danger" onclick="">Delete</button>
        <button type="button" class="btn btn-warning" onclick="">Update</button>
        
        </td>
        </tr>
        `


    }
    document.getElementById("allOrdersId").innerHTML = content;
}

function allUsers() {
    var userTab = JSON.parse(localStorage.getItem("users") || "[]"),
        content = '';
    for (let i = 0; i < userTab.length; i++) {
       
        ///////
        if (userTab[i].role=="store" && userTab[i].status=="nok") {
            content += `<tr>
            <td>${userTab[i].id}</td>
            <td>${userTab[i].fName}</td>
            <td>${userTab[i].lName}</td>
            <td>${userTab[i].email}</td>
            <td>${userTab[i].role}</td>
            <td class="d-flex">
            
            <button type="button" class="btn btn-success " onclick="">Vaildate</button>
            <button type="button" class="btn btn-danger  mx-2"  onclick="">Delete</button>
           
            
            </td>
            </tr>
            
            `
            
        }else{
            content += `<tr>
            <td>${userTab[i].id}</td>
            <td>${userTab[i].fName}</td>
            <td>${userTab[i].lName}</td>
            <td>${userTab[i].email}</td>
            <td>${userTab[i].role}</td>
            <td class="d-flex">
            
            <button type="button" class="btn btn-success " onclick="">Dispaly</button>
            <button type="button" class="btn btn-danger  mx-2"  onclick="">Delete</button>
            <button type="button" class="btn btn-warning" onclick="UpdateUsers(${userTab[i].id})">Update</button>
            
            </td>
            </tr>
            
            `

        }
        
        
        
       

    }
    document.getElementById("allUsersId").innerHTML = content;
}
function UpdateUsers(id) {
    var user = searchObjectByKey("users", id)
    var userTab = JSON.parse(localStorage.getItem("users"));
    var content = "";
    for (let i = 0; i < userTab.length; i++) {
        if (user.id == userTab[i].id) {
            content = `
           <div class="row login_form" >
           <div class="col-md-12 form-group">
					<input type="text" class="form-control" id="nameProduct" name="name" value="${userTab[i].fName}"
						onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'">
				</div>

				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="price" name="name" value="${userTab[i].lName}"
						onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
				</div>



				<div class="col-md-12 form-group">
					<input type="text" class="form-control" id="stock" name="name" value="${userTab[i].email}"
						onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
				</div>
                 </div>
				<div class="col-md-12 form-group mt-3">
					<button type="submit" value="submit" class="primary-btn" onclick="">validation</button>

				</div>
			</div>
                 
                 
            `
        }

    }
    document.getElementById("updateProductID").innerHTML = content;
}

function generateHeader() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var content = "";
    if (connectedUserId) {
        alert("connected")
        var user= searchObjectByKey("users",connectedUserId)
        var content=""
        if (user.role=="client") {
            content=`
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#.html">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="sign-up.html">Signup</a></li>
          <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
            
            `
            
        }
        else if (user.role=="store") {
            content=`
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#.html">Products</a></li>
            <li class="nav-item"><a class="nav-link" href="sign-up.html">Signup</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html">Order Store</a></li>

            `
            
        }else{
            content=`
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#.html">Products</a></li>
            <li class="nav-item"><a class="nav-link" href="sign-up.html">Signup</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html">Order Store</a></li>
            <li class="nav-item"><a class="nav-link" href="login.html">Dashbord</a></li>
            
            `
        }
        
    } else {
        alert("Not Connected")

        content = `
     <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
     <li class="nav-item"><a class="nav-link" href="#.html">Products</a></li>
     <li class="nav-item"><a class="nav-link" href="sign-up.html">Client</a> Ou <a class="nav-link" href="sign-up Store.html">Store</a></li>
     <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
     `


    }
    document.getElementById("displayList").innerHTML = content;
}
function signupStore() {
    var userTab = JSON.parse(localStorage.getItem("users") || "[]");

    var firstName = document.getElementById("firstName").value;

    var lastName = document.getElementById("lastName").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;


    var confirmPassword = document.getElementById("confirmPassword").value;

    var sName = document.getElementById("storeName").value;
    var sAdresse = document.getElementById("adresseStore").value;





    var user = {
        id: addUser(userTab) + 1,
        fName: firstName,
        lName: lastName,
        email: email,
        pwd: password,
        confirmPwd: confirmPassword,
        storeName: sName,
        storeAdresse: sAdresse,
        role:"store",
        status:"nok"
     }
   
    userTab.push(user);
    // Remettre le tableau à jour dans le BD
    localStorage.setItem("users", JSON.stringify(userTab));


}
function validateStore() {
    
    
}



