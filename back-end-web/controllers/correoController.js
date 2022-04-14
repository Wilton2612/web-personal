const { response } = require('express');
const { request } = require('http');

const nodeMailer = require('nodemailer');


const envioCorreo = (req=request, resp=response) =>
{

    let body = req.body;
    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post: 587,
        auth: {
            user:'estebankosky@gmail.com',
            pass:'SR0fLF?Y4&c#c62KsT09RvY#3U3VxDd1Diu'
        }
    });

    const opciones = {
        from : 'Programacion',
        subject : body.asunto,
        to: body.email,
        text: body.mensaje,
    };


    config.sendMail(opciones, function(error, result)
    {
        if (error) return resp.json({ 
            ok: false,
            msg: error
           
        });


        return resp.json({
            ok: true,
            msg: result
        })
       

    })

    
}

module.exports = {
    envioCorreo
}
