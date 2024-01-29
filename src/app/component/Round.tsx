

import { Button } from "./Button";

export function Round(){
    return(
        <div className="colored-container container-block ">
            <div className="colored-flex_component">
                <div className="expert">Contact our Trekking Expert</div>
                <div className="image-container">
                    <img src="/images/shams.jpg" />
                </div>
                <div className="expert">Sajid Sadpara</div>
                <Button content="Ask your question"/>
            </div>

        </div>
    );
}
