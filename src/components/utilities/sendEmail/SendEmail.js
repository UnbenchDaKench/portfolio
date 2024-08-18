
import emailjs from "@emailjs/browser"

export default async function sendEmail(formData){
    const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY


    const templateparams = {
        from_name: formData.firstname + " " + formData.lastname,
        email: formData.email,
        to_name: "Abiodun Oladoyin",
        message: formData.message
    }
    

    emailjs.send(serviceId, templateId, templateparams, publicKey)
    .then(res =>{
        console.log('Email sent successfully')
        alert('Email sent successfully')
        formData.firstname = ''
        formData.lastname = ''
        formData.email = ''
        formData.message = ''
    })
    .catch(err =>{
        console.log('Error sending email', err)
        alert('Error sending email')
        formData.firstname = ''
        formData.lastname = ''
        formData.email = ''
        formData.message = ''
    })
  return formData
}