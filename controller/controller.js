const ussdModel = require('../model/model');
// const db = require('../model/db')


let orderDet ={
    type_hostel: "",
    location: "", 
    number: "",
    name: "",  
    open: true 
}

class ussdController{
    ussdWel(req, res){
        res.send('welcome to accomodation portal');
    }
    ussdDetails(req, res){
        
        let sessionId = req.body.sessionId;
        let serviceCode = req.body.serviceCode;
        let phoneNumber = req.body.phoneNumber;
        let text = req.body.text;
        let textValue = text.split('*').length

        if (text === ''){
            let response ='CON Input the type of accomodation from the list below' +
            '\n 1. Flat '+
            '\n 2. Shared'+
            '\n 3. Self-con'       
           res.send(response)
           
        }
        else if (textValue === 1){
            let response = 'CON Select your prefared location from the list below'+
            '\n 1. Aserifa '+
            '\n 2. Damico' +
            '\n 3. Mayfair'
            orderDet.type_hostel = text
            res.send(response)
        }
        else if (textValue === 2){
            let response = "CON What is your telephone number"
            orderDet.location = text.split('*')[1]
            res.send(response)
            
        }
        else if(textValue === 3){
            let response = "CON What is your name"
            orderDet.number =  text.split('*')[2];
            res.send(response)
            
        }
        else if(textValue === 4){
            let response = "END Your request is being processed, our agent will contact you shortly"
            orderDet.name = text.split('*')[3];
            res.send(response)
            
        }
        //local database

        // const ussdBase = {
        //     sessionid : sessionId,
        //     servicecode : serviceCode,
        //     phonenumber: phoneNumber,
        //     house_type: orderDet.type_hostel,
        //     location: orderDet.location,  
        //     number: orderDet.number,
        //     name: orderDet.name        
        // }
        const detModel = new ussdModel({
            sessionid : sessionId,
            servicecode : serviceCode,
            phonenumber: phoneNumber,  
            number: orderDet.number,
            location: orderDet.location,
            house_type:orderDet.type_hostel,
            name: orderDet.name

        })

        if (orderDet.name != ""){
            // db.push(ussdBase);
            // console.log(ussdBase)
            detModel.save().then((resp)=>{
                console.log(resp)              
            })
            .catch((err)=>{
                console.log(err)
            })    
        }
       
    
    }
}
const ussdControl = new ussdController();
module.exports = ussdControl;
