'use client'
export function Bluetext(tags: any) {
    return (
        <div className="margin">
            <div className="container-block">
                <div className="flex row">
                    <div className="overview-p">
                        { 
                            tags.tags_ ? 
                            tags.tags_.map((txt: string) => <a href="#" key={txt}>{txt}</a>)
                            :
                        // <a href="#">Nepal</a>
                        ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}