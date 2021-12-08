import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"

const Page: React.FC<PageProps> = ({ query: { readOneContactPage } }) => {
  const queryResult = readOneContactPage
  if (!queryResult) {
    console.error(`Page query for component at ${__filename} returned null`)
    return null
  }

  const { title, content, emailAddress, physicalAddress, phoneNumber } =
    queryResult
  return (
    <PageLayout page={readOneContactPage}>
      <h2>{title}</h2>
      <p><strong>Email address:</strong> {emailAddress}</p>
      <p><strong>Phone number:</strong> {phoneNumber}</p>
      <p><strong>Address:</strong> {physicalAddress}</p>
      
      <HTMLElement html={content} />
    </PageLayout>
  )
}

export default Page
