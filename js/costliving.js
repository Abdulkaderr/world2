
 async function prices_api_canada(){
    
    let base_url ="https://cost-of-living-and-prices.p.rapidapi.com/";
    let end_point = "prices";
    let url = base_url+end_point;
    let params = "?city_name=Ottawa&country_name=Canada"
    let url_params = url+params;
    let options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
    }; get_prices_data_canada
    let data= await get_prices_data_canada(url_params,options);
    if(data==0){
        window.alert("Error:404");
    }else{
       
    show_canada(data);}
    
        }
    async function get_prices_data_canada(url,options){
        let status_code,data_prices;
    
        let respons = await fetch(url,options);
        status_code=respons.status;
        
        if(status_code>=200 && status_code<300){
            data_prices=await respons.json();
        }else{data_prices={}}
        
    
    
    console.log("aaa",data_prices);
    return data_prices;
    
    }
    function show_canada(data){
          let table;
           table=`<tr>
            <th>price description</th>
            <th>min</th>
            <th>avg</th>
            <th>max</th>
            <th>currency type</th>`;
           // console.log(data.prices[0])
                 let data_prices = data.prices;
                 let len= data_prices.length;
    
                 for(let i=0;i<len-1;i++){
    table+=`<tr>`;
                          table+=`<td>`+data_prices[i].item_name+`</td>`;
                          table+=`<td>`+ data_prices[i].min+`</td>`;
                          table+=`<td>`+ data_prices[i].avg+`</td>`;
                          table+=`<td>`+ data_prices[i].max+`</td>`;
                          table+=`<td>`+ data_prices[i].currency_code+`</td>`;
                          
                          table+=`</tr>`;}
                          document.getElementById("data").innerHTML=table;}
              
              
    
    
                 
    
    
    
                 async function prices_api_china(){
        
        let base_url ="https://visual-crossing-prices.p.rapidapi.com/";
        let end_point = "prices";
        let url = base_url+end_point;
      
        let params = "?city_name=Beijing&country_name=china"
        let url_params = url+params;
        let options = {
                method: 'GET',
            headers: {
                    'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
                }
        }
        let data= await get_prices_data_china(url_params,options);
        if(data==0){
            window.alert("Error:404");
        }else{
           
        show_china(data);}
        
            }
        async function get_prices_data_china(url,options){
            let status_code,data_prices;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_prices=await respons.json();
            }else{data_prices={}}
            
        
        
        console.log("aaa",data_prices)
        return data_prices;
        
        }
        function show_china(data){
               let table;
           table=`<tr>
            <th>price description</th>
            <th>min</th>
            <th>avg</th>
            <th>max</th>
            <th>currency type</th>`;
            console.log(data.prices[0])
                 let data_prices = data.prices;
                 let len= data_prices.length;
    
                 for(let i=0;i<len-2;i++){
    table+=`<tr>`;
                          table+=`<td>`+data_prices[i].item_name+`</td>`;
                          table+=`<td>`+ data_prices[i].min+`</td>`;
                          table+=`<td>`+ data_prices[i].avg+`</td>`;
                          table+=`<td>`+ data_prices[i].max+`</td>`;
                          table+=`<td>`+ data_prices[i].currency_code+`</td>`;
                          
                          table+=`</tr>`;}
                          document.getElementById("data").innerHTML=table;}
              
              
        
        
    
    
                     
    
                     async function prices_api_italy(){
        
        let base_url ="https://visual-crossing-prices.p.rapidapi.com/";
        let end_point = "prices";
        let url = base_url+end_point;
        
        let params = "?city_name=Rome&country_name=Italy"
        let url_params = url+params;
        let options = {
                method: 'GET',
            headers: {
                    'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
                }
        }
        let data= await get_prices_data_italy(url_params,options);
        if(data==0){
            window.alert("Error:404");
        }else{
          
        show_italy(data);}
        
            }
        async function get_prices_data_italy(url,options){
            let status_code,data_prices;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_prices=await respons.json();
            }else{data_prices={}}
            
        
        
        console.log("aaa",data_prices)
        return data_prices;
        
        }
        function show_italy(data){
          let table;
           table=`<tr>
            <th>price description</th>
            <th>min</th>
            <th>avg</th>
            <th>max</th>
            <th>currency type</th>`;
            console.log(data.prices[0]);
                let data_prices = data.prices;
                let len= data_prices.length;
    
                 for(let i=0;i<len-2;i++){
    table+=`<tr>`;
                          table+=`<td>`+data_prices[i].item_name+`</td>`;
                         table+=`<td>`+ data_prices[i].min+`</td>`;
                          table+=`<td>`+ data_prices[i].avg+`</td>`;
                          table+=`<td>`+ data_prices[i].max+`</td>`;
                          table+=`<td>`+ data_prices[i].currency_code+`</td>`;
                          
                          table+=`</tr>`;}
                          document.getElementById("data").innerHTML=table;}
                     
        
                     async function prices_api_japan(){
        
        let base_url ="https://visual-crossing-prices.p.rapidapi.com/";
        let end_point = "prices";
        let url = base_url+end_point;
        
        let params = "?city_name=Tokyo&country_name=Japan"
        let url_params = url+params;
        let options = {
                method: 'GET',
            headers: {
                    'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
                }
        }
        let data= await get_prices_data_japan(url_params,options);
        if(data==0){
            window.alert("Error:404");
        }else{
          
        show_japan(data);}
        
            }
        async function get_prices_data_japan(url,options){
            let status_code,data_prices;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_prices=await respons.json();
            }else{data_prices={}}
            
        
        
        console.log("aaa",data_prices)
        return data_prices;
        
        }
        function show_japan(data){
          let table;
           table=`<tr>
            <th>price description</th>
            <th>min</th>
            <th>avg</th>
            <th>max</th>
            <th>currency type</th>`;
          //  console.log(data.prices[0]);
                 let data_prices = data.prices;
                 let len= data_prices.length;
    
                 for(let i=0;i<len-2;i++){
    table+=`<tr>`;
                          table+=`<td>`+data_prices[i].item_name+`</td>`;
                          table+=`<td>`+ data_prices[i].min+`</td>`;
                          table+=`<td>`+ data_prices[i].avg+`</td>`;
                          table+=`<td>`+ data_prices[i].max+`</td>`;
                          table+=`<td>`+ data_prices[i].currency_code+`</td>`;
                          
                          table+=`</tr>`;}
                          document.getElementById("data").innerHTML=table;}
              