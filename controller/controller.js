const ussdModel = require('../model/model');
// const db = require('../model/db')

class ussdController{
    ussdWel(req, res){
        res.send('welcome to accomodation portal');
    }
    ussdDetails(req, res){
        let orderDet ={
            name: "",
            number:"",
            type_hostel:"",
            location:"",
            open: true 
        }
         
        let sessionId = req.body.sessionId;
        let serviceCode = req.body.serviceCode;
        let phoneNumber = req.body.phoneNumber;
        let text = req.body.text;
        let textValue = text.split('*').length

        if (text == ''){
            let response ='CON What type of accomodation' +
            '\n 1. Flat '+
            '\n 2. Shared'+
            '\n 3. Self-con'
           orderDet.type_hostel = text.split('*')[0]
           res.send(response)
        }
        else if (text == '1'){
            let response = 'CON Select your prefared location'+
            '\n 1. Aserifa '+
            '\n 2. Damico' +
            '\n 3. Mayfair'
            orderDet.location = text.split('*')[1]
            res.send(response)
        }
        else if (text == '2'){
            let response = 'CON Select your prefared location'+
            '\n 1. Aserifa '+
            '\n 2. Damico' +
            '\n 3. Mayfair'
            orderDet.location = text.split('*')[1];
            res.send(response)
        }
        else if (text == '3'){
            let response = 'CON Select your prefared location '+
            '\n 1. Aserifa '+
            '\n 2. Damico' +
            '\n 3. Mayfair'
            orderDet.location = text.split('*')[1];
            res.send(response)
        }
        else if (text == '1*1'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '1*2'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '1*3'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '2*1'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '2*2'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '2*3'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '3*1'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '3*2'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }
        else if (text == '3*3'){
            let response = "CON What is your telephone number"
            orderDet.number = text.split('*')[2];
            res.send(response)
        }
        else if(textValue == 3){
            let response = "CON What is your name"
            orderDet.name = text.split('*')[3];
            res.send(response)
        }
        else if(textvalue == 4){
            let response = 'END your request is being processed, our agent will contact you shortly'
            res.send(response)
        }

        //local database

        // const ussdBase = {
        //     name: orderDet.name,
        //     number: orderDet.number,
        //     location: orderDet.location,
        //     house_type:orderDet.type_hostel

        // }

        // db.push(ussdBase);
        // return res.status(200).send({
        //     success: 'true',
        //     message: 'details added successfully',
        //     ussdBase
        // })



        ussdModel.create({
            sessionid : sessionId,
            servicecode : serviceCode,
            phonenumber: phoneNumber,
            name: orderDet.name,
            number: orderDet.number,
            location: orderDet.location,
            house_type:orderDet.type_hostel
        }).then((resp)=>{
            console.log("message sent succesfully")
            return res.status(201).send({
                error: false,
                code:201
            })
        }).catch((err)=>{
            console.log("message not sent")
        })    
    
    }
}
const ussdControl = new ussdController();
module.exports = ussdControl;