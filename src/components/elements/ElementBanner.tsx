import React from "react"
import { ElementBanner } from "ss-schema"

const Block: React.FC<{ element: ElementBanner }> = ({ element }) => {

    return (
        <div>
            {element.showTitle && <h2>{element.title}</h2>}
            <div>{element.content}</div>
        </div>
    )

}

export default Block