import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"
const Page: React.FC<PageProps> = ({ query: { readOneHomePage }}) => {
    if (!readOneHomePage) {
        console.error(`Page query for component at ${__filename} returned null`)
        return null
    }
    const { bannerImage, bannerText, content } = readOneHomePage
    return (
        <PageLayout page={readOneHomePage}>
            {bannerImage && (
                <img width={500} src={bannerImage.absoluteLink!} />
            )}
            <div>{bannerText}</div>
            <HTMLElement html={content} />
        </PageLayout>
    )
}

export default Page