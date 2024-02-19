function button(props){
    
        let totalSetCount = document.getElementById('setCount')
        let total = totalSetCount.innerText;
        const totalSet = parseFloat(total);
        const updateValue = totalSet - 1
        totalSetCount.innerText = updateValue
        
    
let buySetCount = document.getElementById('count')
let totalSetBuy = buySetCount.innerText
const numberOfSet = parseFloat(totalSetBuy)
const updateBuySet = numberOfSet + 1 ;
buySetCount.innerText = updateBuySet

const btnname = document.getElementById(props)
btnname.style.backgroundColor = '#1DD100'
 const name = btnname.innerText;
 const setName = 'economy'
 const price = 550

 const mainContiner = document.getElementById('mainContiner')
 const div = document.createElement('div')
 div.style.display = 'flex'
 div.style.gap = '80px'
 div.style.justifyContent = 'center'
 div.style.marginLeft = '36px'
 div.style.padding = '10px'
 div.style.backgroundColor = '#F7F8F8'
 

 let p = document.createElement('p')
 let p2 = document.createElement('p')
 let p3 = document.createElement('p')
 p.innerText = name;
 p2.innerText = setName;
 p3.innerText = price;
 
 div.appendChild(p)
 div.appendChild(p2)
 div.appendChild(p3)
 mainContiner.append(div)

 const numberofticket = buySetCount.innerText
 let ticketNumber = parseFloat(numberofticket)
 
 const allPrice = document.getElementById('pricee')
 const totalprice = ticketNumber * price;
 allPrice.innerText = totalprice;
 console.log(typeof totalprice)
 if(2200 <= totalprice){
    document.getElementById('apply').removeAttribute('disabled')

    const applyBtn = document.getElementById('apply').addEventListener('click', function(){
         
    

         const inputfild = document.getElementById('inputt')
         const newValue = inputfild.value
        if(newValue === 'NEW15'){
            const discountPrice = document.getElementById('discount')
            let discount = totalprice * 15/100
             const grandTotal = totalprice - discount;
             discountPrice.innerText = grandTotal
             const gayeb = document.getElementById('gayeb').style.display = 'none'
        }

        if(newValue === "Couple20"){
            const pricediscount = document.getElementById('discount')
            let discountt = totalprice * 20 / 100
            const grandtotal2 = totalprice - discountt;
        pricediscount.innerText = grandtotal2;
        const gayeb = document.getElementById('gayeb').style.display = 'none'
        }
    })
        
}
 
}





