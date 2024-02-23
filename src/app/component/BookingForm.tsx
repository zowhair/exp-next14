'use client'
import Form from "./Form"
import { useState } from "react"
import SignUp from "./Signup"

export default function BookNowForm(...props: any) {

    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [messageText, setMessageText] = useState('')
    const [name, setName] = useState('')

    const [mailSubmitted, setMailSubmitted] = useState(false)

    const slugString = props[0].props[0].params.slug
    let packageName = ''
    
    if(slugString == 'k2-expedition') {
        packageName = 'K2 Gondogoro laa trek'
    } else if(slugString == 'nangaparbet') {
        packageName = "Nanga Parbat Fairy Meadows Trek"
    } else if(slugString == 'biafohispar') {
        packageName = "Biafo Hispar Nagar Snow Lake Trek"
    } else if(slugString == 'indusvalley') {
        packageName = "Indus Valley Civilization Culture Tours"
    } else if(slugString =='northandsouth') {
        packageName = "North And South Pakistan Culture Tours"
    } else if(slugString == 'skardutours') {
        packageName = "Skardu Tourss"
    }

   
    function handleChange(e: any) {
        const fieldName = e.target.name
        if(fieldName == 'name') {
            setName(e.target.value)
        } else if(fieldName == 'email') {
            setEmail(e.target.value)
        } else if(fieldName == 'phone') {
            setPhoneNumber(e.target.value)
        } else if(fieldName == "message") {
            setMessageText(e.target.value)
        }
    }
    
    function handleSubmit() {
        
        const formData = {
            subject: `Name: ${name}`,
            body: `Hello new booking order for : ${packageName}  \n Email: ${email} \n  Phone Number: ${phoneNumber} \n Message: ${messageText}`
        };

        fetch('http://expeditionasiaa.com/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(formData),
        })
        .then(x => {
            setMailSubmitted(true)
        })

    }
    return(
        <div className="booknow">
            {
                !mailSubmitted ? 
                <section className="main" id="myFile">
                <div className="continer">
                    <div className="justify-content">
                        <div className="space-between">
                            <h3 className="h3">Book Now</h3>
                        </div>
                        <h5 className="h5">Your Information</h5>
                        <div className="flex row">
                            <div className="inline">
                                <div className="input">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} placeholder="Full name"/>

                                </div>
                            </div>
                            <div className="inline">
                                <div className="input">
                                    <i className="fa-solid fa-envelope-open"></i>                                              
                                    <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="inline">
                                <div className="input">
                                    <i className="fa-solid fa-phone"></i>                                               
                                    <input type="tel" name="phone" onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder="Mobile number"/>

                                </div>
                            </div>
                            <div className="inline">
                                <div className="input">
                                    <i className="fa-regular fa-calendar"></i>                   
                                    <textarea name="message" onChange={(e) => { setMessageText(e.target.value) }}>

                                    </textarea>

                                </div>
                            </div>
                            
                        </div>
                        <button onClick={handleSubmit} className="btn">book now</button>
                    </div>
            
                </div>
            </section>
                : 

                <SignUp />

            }
            
        </div>
    )

}

