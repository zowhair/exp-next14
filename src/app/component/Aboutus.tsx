import { Bluetext } from "./Bluetext"
import { Round } from "./Round"
import Shah from "./Shah"
import SignUp from "./Signup"
import Title from "./Title"
import { Collectioncard } from "./card/CollectionCard"


export default function AboutUs() {
    // let tags_: string[] = ["abc", "def", "ghi"]
    return (
        <div className="product-banner">
            {/* <img className="product-image-banner" src="https://media.istockphoto.com/id/1293741276/photo/majestic-view-of-the-k2-peak.jpg?s=612x612&w=0&k=20&c=rry-9uHSUeGfjt6M-mirAEWWGbg1Q5CcUJ8g9RRIOJE="/> */}
            <div className="container-block">
            <Shah />
            <div className="space-manager">
                <div className="arrange-container-left">
                <div className="mera-peak margin">
                        <div className="container-block">

                            <h1 className="mera-title">Contact Us</h1>
                            <p className="listing-para">Please contact us for any questions that you may have by submitting your details below. We will get back as soon as we can.</p>
                            <form>
                                <fieldset className="form-column-2">
                                    <div className="first-name input-div">
                                        <label>
                                            <span>First name*</span>
                                        </label>
                                        <div className=" input">
                                            <input name="firstname" type="text" required placeholder="fullname"/>
                                        </div>
                                    </div>
                                    <div className="input-div last-name">
                                        <label>
                                            <span>Second name*</span>
                                        </label>
                                        <div className=" input">
                                            <input name="firstname" type="text" required placeholder="second name"/>
                                        </div>
                                        <ul className="display-none ">
                                            <li className="">Please complete this required field.</li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <fieldset className="form-column-1">
                                    <div className="input-div">
                                        <label>
                                            <span>Email *</span>
                                        </label>
                                        <div className="input">
                                            <input type="email" name="email" required  />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="form-column-1">
                                    <div className="input-div">
                                        <label>
                                            <span>Message *</span>
                                        </label>
                                        <div className="input">
                                            <textarea ></textarea>

                                        </div>
                                    </div>
                                </fieldset>
                                
                            </form>
                            <div className="btn">send</div>

                        </div>
                    </div>
                </div>
                <div className="arrange-container-right">
                    <div className="mera-peak margin">
                        <div className="container-block">
                            <h2 className="mera-title">company info</h2>
                            <h3>Email</h3>
                            {/* <Title /> */}
                            {/* <a href="#" className="colored-email">
                                aontact@gmail.com
                            </a> */}
                            {/* <Bluetext tags={tags_} /> */}
                            <p className="margin-bottom">
                                <b>Address</b>
                                <br/> Near Parade Ground Metro Station, Blue area, <br /> Islamabad Pakistan

                            </p>
                            <p className="margin-bottom">
                                <b>country</b>
                                <br />Pakistan
                            </p>

                        </div>
                    </div>
                </div>
            </div>            
            </div>

        </div>
    )
}