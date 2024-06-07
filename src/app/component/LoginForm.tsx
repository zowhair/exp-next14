import { Button } from "./Button";

export default function LoginForm({content}){

    return(
        <section className="main" id="myFile">
        <div className="continer login-form">
            <div className="justify-content">
                <div className="title">
                    <span className="title-text">Login</span>
                  
                </div>
                <div className="flex row">
                    <div className="inline">
                        <i className="fa-solid fa-envelope-open"></i>                                              
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="inline">
                        <i className="fa-solid fa-envelope-open"></i>                                              
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
               <Button content="Login" />
            </div>

        </div>
        </section>
    )
}