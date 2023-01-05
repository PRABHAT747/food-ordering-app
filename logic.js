import { menuArray } from  './fata.js'

let check = false ; 
let whole = document.getElementById('container')
let content= []
let buttonEl = document.getElementById('paypop')
let inputEl = document.getElementById('cusname')

buttonEl.addEventListener('submit', function(e){
    e.preventDefault()    
    let thank = `
    <div class="greet">
            <p class="thankyou">
                Thanks ${inputEl.value}! Your Order is on the way!
            </p>
    </div>
    ` 
    document.getElementById('pop').style.display='none'
   rener(thank)
})

    

function maketotal(id){
    const obj = menuArray.filter(function(menu){
        return menu.id==id
      })[0]
      if(content.length!=0){
        let res= content.filter(function(names){
            return names.name==obj.name
        })
        /*
        console.log(obj)
        console.log(res)
        */
        if(res.length===0){
            content.push({
                name:obj.name,
                id:obj.id,
                price:obj.price
            })     
            }
            
      }else {
        content.push({
            name:obj.name,
            id:obj.id,
            price:obj.price
        })     
      }
     
}
whole.addEventListener('click',function(e){

                if(e.target.id){
                   
                    maketotal(e.target.id)
                    rener(buillist())
                    

                }
                else if (e.target.dataset.remove){
                    
                    remove(e.target.dataset.remove)
                    rener(buillist())
                }
                else if (e.target.dataset.col){
                    document.getElementById('pop').style.display='block'

                }
                    

})
function iterate(ingredients){
            let str = ''
            if(ingredients.length>0){
                for(let i = 0 ; i<ingredients.length ; i++){
                    str+=ingredients[i]
                    if(i!=ingredients.length-1)
                    str+=','
                    else 
                    str+='.'
                    
                }
            }
    return str 
}
function getList(){
      let top =
`<div class = "top">
        <div id ="topp">
            <h1>
                Prabhat's Diner
            </h1>
            <p>
                The best Burgers and Pizzas in the town
            </p>  
        </div> 
</div>
`
let content =``
for(let i = 0 ; i<menuArray.length; i++){
    content+=    
`
<div id="box">
    <div>
        <p id="emoji">
            ${menuArray[i].emoji}
        </p>
    </div>
    <div id="choice">    
                <div id ="es1">
                        <p id="name">
                            ${menuArray[i].name}
                        </p>
                        <p id="ingredients">
                            ${iterate(menuArray[i].ingredients)}
                        </p>
                        <p id="price">
                            $${menuArray[i].price}
                        </p>
                </div> 
            <div>       
                    <button id = "${menuArray[i].id} ">Add+</button>
            </div>                
    </div>
</div>  
`
}
 return top+content

}
function rener(str){
    
    if(content.length!=0){
     whole.innerHTML=getList()+str
    }
     else {
        whole.innerHTML=getList()
     }
}
function remove(id){
    content = content.filter(function(names){
        return names.id!=id
    })
    //console.log(content)
}
function buillist(){
    let stri = `<p class='ototal'>YOUR ORDER<p>`
    
      let total = 0          
      for(let i = 0 ; i<content.length; i++){
        total+=content[i].price
        stri+=`
        <div class="olist" >
                <div>
                        <p id = "on">
                            ${content[i].name} 
                            <span class = "rem" data-remove="${content[i].id}">
                            remove
                            </span>
                        </p>
                </div>
                <div>
                        <p id= "selectprice">
                            $${content[i].price}
                        </p>
                </div>
        </div>
        `
      }
      stri+=`
            <div class = "olist upperbo" >
                    <p>
                        Total cost 
                    </p>
                    <p>
                        $${total}
                    </p>
            </div>`
            stri+=`<div>
            <p class = "complete" data-col="coll">Complete Order</p>
            </div>`

            return stri
}
rener('')





/** 
 * 
 * 
 * 
 * 
 * 
 * 
 * function getButton(id){
    const obj = menuArray.filter(function(menu){
        return menu.id == id
    })[0]
  //  console.log(obj)
    let str=''
    str+=`
    <div>
         <p id = "on">${obj.name} <span class = "on" id = ${obj.id}>remove</span></p>
    </div>`
    return str 
    }


 */
