import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"
const Page: React.FC<PageProps> = ({ query: { readOnePage }}) => {
    if (!readOnePage) {
        console.error(`Page query for component at ${__filename} returned null`)
        return null
    }
    return (
        <PageLayout page={readOnePage}>
            <h2>{readOnePage.title}</h2>
            <HTMLElement html={readOnePage.content} />
        </PageLayout>
    )
}

export default Page