import React from "react"
import { FileBlock } from "ss-schema"

const Block: React.FC<{ element: FileBlock }> = ({ element }) => {

    return <div>{element.__typename}</div>

}

export default Block