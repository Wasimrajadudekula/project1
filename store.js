if(document.readyState=='loading')
{
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready()
{
    var rcib=document.getElementsByClassName('remove')
    for(var i=0;i<rcib.length;i++)
    {
    var button=rcib[i]
    button.addEventListener('click',removeitem)
    }
    
    var quanInputs=document.getElementsByClassName('cquanitem')
    for(var i=0;i<quanInputs.length;i++)
    {
        var input=quanInputs[i]
        input.addEventListener('change',quantityChanged)
    }

    var addtocart=document.getElementsByClassName('add')
    for(var i=0;i<addtocart.length;i++)
    {
        var button=addtocart[i]
        button.addEventListener('click',adds)
    }
    
    var purchase=document.getElementsByClassName('purchase')[0].addEventListener('click',purchased)
}

function removeitem(event)
{
    var buttonclicked= event.target
        buttonclicked.parentElement.parentElement.remove()
        updatetotal()

}

function quantityChanged(event)
{
    var input=event.target
    if(isNaN(input.value) || input.value<=0)
    {
        input.value=1
    }
    updatetotal()

}

function adds(event)
{
    var button=event.target
    var item=button.parentElement.parentElement
    var title=item.getElementsByClassName('items')[0].innerText
    var price=item.getElementsByClassName('price')[0].innerText
    var imagesrc=item.getElementsByClassName('img')[0].src
    console.log(title,price,imagesrc)
    addtoCart(title,price,imagesrc)
    updatetotal()
}

function addtoCart(title,price,imagesrc)
{
    var cartrow=document.createElement('div')
    cartrow.classList.add('crow')
    var cartitems=document.getElementsByClassName('carts')[0]
    var cartitemnames=cartitems.getElementsByClassName('citem')
    for(var i=0;i<cartitemnames.length;i++)
    {
        if(cartitemnames[i].innerText==title)
        {
            alert('This Item has already been added')
            return
        }
    }
    var cartrowcontents=`<div class="citem ccol">
    <img src="${imagesrc}" width="100" height="100">
    <span>${title}</span>
    </div>
    <span class="cprice ccol ccprice">${price}</span>
    <div class="cquan ccol">
    <input class="cquanitem" type="number" value="1">
    <button type="button" class="remove">Remove</button> 
    </div>`
    cartrow.innerHTML=cartrowcontents
    cartitems.append(cartrow)
    cartrow.getElementsByClassName('remove')[0].addEventListener('click',removeitem)
    cartrow.getElementsByClassName('cquanitem')[0].addEventListener('change',quantityChanged)
}

function purchased()
{
    alert('Items Have Been Purchased')
    location.reload()
}

function updatetotal()
{
   var carts=document.getElementsByClassName('carts')[0]
   var crows=carts.getElementsByClassName('crow')
   var total=0
   for(var i=0;i<crows.length;i++)
   {
    var crow=crows[i]
    var priceEle=crow.getElementsByClassName('cprice')[0]
    var quanEle= crow.getElementsByClassName('cquanitem')[0]
    var price=parseInt(priceEle.innerText.replace('₹',''))
    var quan=quanEle.value
    console.log(price*quan)
    total=total+(price*quan)
   }
   document.getElementsByClassName('totals')[0].innerText='₹'+total 
}