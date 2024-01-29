

export function Content(){
    return(
        <div className="margin">
            <div className="container-block">
                <div className="include-exclude">
                    <div className="main-listing">
                        <div className="container-block">
                            <h2 className="listing-heading">Included</h2>
                            <ul className="listing">
                                <li className="listing-item">
                                    <span className="listing-icon">
                                        {/* icon */}.
                                    </span>
                                    <div className="listing-flex-div">
                                        <h3 className="listing-title">Transfers</h3>
                                        <p className="listing-para">All necessary transfers (bus, taxi, flights, etc.) as described in the programme are included.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="main-listing">
                        <div className="container-block">
                            <h2 className="listing-heading">excluded</h2>
                            <ul className="listing">
                                <li className="listing-item">
                                    <span className="listing-icon">
                                        {/* icon */}.
                                    </span>
                                    <div className="listing-flex-div">
                                        <h3 className="listing-title">Visa for Nepal</h3>
                                        <p className="listing-para">Your trekking company will not take responsibility for the travel visa for Nepal. This should be organized by yourself. Contact your local Nepalese embassy for the latest visa information.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}