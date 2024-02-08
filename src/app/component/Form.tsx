import { Button } from "./Button";

export default function Form(){
    

    return(
        <section className="main" id="myFile">
            <div className="continer">
                <div className="justify-content">
                    <div className="space-between">
                        <h3 className="h3">Apply Online</h3>
                    </div>
                    <h5 className="h5">Your Information</h5>
                    <div className="flex row">
                        <div className="inline">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="Full name"/>
                        </div>
                        <div className="inline">
                            <i className="fa-solid fa-envelope-open"></i>                                              
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="inline">
                            <i className="fa-solid fa-phone"></i>                                               
                            <input type="tel" placeholder="Mobile number"/>
                        </div>
                        <div className="inline">
                            <i className="fa-regular fa-calendar"></i>                   
                            <input type="date" />
                        </div>
                        <div className="inline">
                            {/* // <!-- icons --> */}
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}