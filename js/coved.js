
 async function coved_api_canada(){
    
    let base_url ="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/";
    let end_point = "stats";
    let url = base_url+end_point;
    let params = "?country=Canada"
    let url_params = url+params;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
            'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
    };
    let data= await get_coved_data_canada(url_params,options);
    
    if(data==0){
       window.alert("ERROR");
    }else{
       console.log(data.data.covid19Stats[0].city
    );
    
    show_canada(data);
    }
    
        }
    async function get_coved_data_canada(url,options){
        let status_code,data_coved;
    
        let respons = await fetch(url,options);
        status_code=respons.status;
        
        if(status_code>=200 && status_code<300){
            data_coved=await respons.json();
        }else{data_coved={}}
        
    
    
    console.log("aaa",data_coved)
    return data_coved;
    
    }
    
    function show_canada(data){
          let table;
           table=`<tr>
            <th>province</th>
    <th>lastUpdate</th>
    <th>keyId</th>
    <th>confirmed</th>
    <th>deaths </th>
            `;
                 let data_coved =data.data.covid19Stats;
                 let len= data_coved.length;
             //    console.log(data_coved[0]);
                    for(let i=0;i<len;i++){
                    console.log(data_coved[i]);
                table+=`<tr>`;
                    table+=`<td>`+ data_coved[i].province+`</td>`;
                        table+=`<td>`+ data_coved[i].lastUpdate+`</td>`;
                            table+=`<td>`+ data_coved[i].keyId+`</td>`;
                            table+=`<td>`+ data_coved[i].confirmed+`</td>`;
                            table+=`<td>`+ data_coved[i].deaths+`</td>`;
                                table+=`</tr>`;
                }
                document.getElementById("data").innerHTML=table; 
                }
    
    
                 
    
                async function coved_api_japan(){
        
        let base_url ="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/";
        let end_point = "stats";
        let url = base_url+end_point;
        let params = "?country=Japan"
        let url_params = url+params;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
        };
        let data= await get_coved_data_japan(url_params,options);
        
        if(data==0){
           window.alert("ERROR");
        }else{
           console.log(data.data.covid19Stats[0].city
        );
        
        show_japan(data);
        }
        
            }
        async function get_coved_data_japan(url,options){
            let status_code,data_coved;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_coved=await respons.json();
            }else{data_coved={}}
            
        
        
        console.log("aaa",data_coved)
        return data_coved;
        
        }
        
        function show_japan(data){
              let table;
               table=`<tr>
                <th>province</th>
        <th>lastUpdate</th>
        <th>keyId</th>
        <th>confirmed</th>
        <th>deaths </th>
                `;
                     let data_coved =data.data.covid19Stats;
                     let len= data_coved.length;
                   //  console.log(data_coved[0]);
                        for(let i=0;i<len;i++){
                        console.log(data_coved[i]);
                    table+=`<tr>`;
                        table+=`<td>`+ data_coved[i].province+`</td>`;
                            table+=`<td>`+ data_coved[i].lastUpdate+`</td>`;
                                table+=`<td>`+ data_coved[i].keyId+`</td>`;
                                table+=`<td>`+ data_coved[i].confirmed+`</td>`;
                                table+=`<td>`+ data_coved[i].deaths+`</td>`;
                                    table+=`</tr>`;
                    }
                    document.getElementById("data").innerHTML=table; 
                    }
    
                    
                    
                    async function coved_api_china(){
                        let base_url ="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/";
        let end_point = "stats";
        let url = base_url+end_point;
        let params = "?country=China"
        let url_params = url+params;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
        };
        let data= await get_coved_data_china(url_params,options);
        
        if(data==0){
           window.alert("ERROR");
        }else{
           console.log(data.data.covid19Stats[0].city
        );
        
        show_china(data);
        }
        
            }
            async function get_coved_data_china(url,options){
            let status_code,data_coved;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_coved=await respons.json();
            }else{data_coved={}}
            
        
        
        console.log("aaa",data_coved)
        return data_coved;
        
        }
        function show_china(data){
              let table;
               table=`<tr>
                <th>province</th>
        <th>lastUpdate</th>
        <th>keyId</th>
        <th>confirmed</th>
        <th>deaths </th>
                `;
                     let data_coved =data.data.covid19Stats;
                     let len= data_coved.length;
                     console.log(data_coved[0]);
                        for(let i=0;i<len;i++){
                        console.log(data_coved[i]);
                    table+=`<tr>`;
                        table+=`<td>`+ data_coved[i].province+`</td>`;
                            table+=`<td>`+ data_coved[i].lastUpdate+`</td>`;
                                table+=`<td>`+ data_coved[i].keyId+`</td>`;
                                table+=`<td>`+ data_coved[i].confirmed+`</td>`;
                                table+=`<td>`+ data_coved[i].deaths+`</td>`;
                                    table+=`</tr>`;
                    }
                    document.getElementById("data").innerHTML=table; 
                    }
      
    
    
                  
                    async function coved_api_italy(){
                        let base_url ="https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/";
        let end_point = "stats";
        let url = base_url+end_point;
        let params = "?country=Italy"
        let url_params = url+params;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd95a4c78cemshd5caf30508c458cp1dd6e0jsnf6e3eae484ea',
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
        };
        let data= await get_coved_data_italy(url_params,options);
        
        if(data==0){
           window.alert("ERROR");
        }else{
           console.log(data.data.covid19Stats[0].city
        );
        
        show_italy(data);
        }
        
            }
            async function get_coved_data_italy(url,options){
            let status_code,data_coved;
        
            let respons = await fetch(url,options);
            status_code=respons.status;
            
            if(status_code>=200 && status_code<300){
                data_coved=await respons.json();
            }else{data_coved={}}
            
        
        
        console.log("aaa",data_coved)
        return data_coved;
        
        }
        function show_italy(data){
              let table;
               table=`<tr>
                <th>province</th>
        <th>lastUpdate</th>
        <th>keyId</th>
        <th>confirmed</th>
        <th>deaths </th>
                `;
                     let data_coved =data.data.covid19Stats;
                     let len= data_coved.length;
                     console.log(data_coved[0]);
                        for(let i=0;i<len;i++){
                        console.log(data_coved[i]);
                    table+=`<tr>`;
                        table+=`<td>`+ data_coved[i].province+`</td>`;
                            table+=`<td>`+ data_coved[i].lastUpdate+`</td>`;
                                table+=`<td>`+ data_coved[i].keyId+`</td>`;
                                table+=`<td>`+ data_coved[i].confirmed+`</td>`;
                                table+=`<td>`+ data_coved[i].deaths+`</td>`;
                                    table+=`</tr>`;
                    }
                    document.getElementById("data").innerHTML=table; 
                    }
    
    
    