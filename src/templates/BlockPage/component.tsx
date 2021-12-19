import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "components/elements/ElementalArea"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"

const Page: React.FC<PageProps> = ({ query: { readOneBlockPage } }) => {
  if (!readOneBlockPage) {
    console.error(`Page query for component at ${__filename} returned null`)
    return null
  }
  
  const elements = readOneBlockPage.elementalArea?.elements.nodes ?? []

  return (
    <PageLayout page={readOneBlockPage}>
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white">
          <div className="mt-5 prose prose-indigo text-gray-500">
            <h2 className="leading-6 text-gray-600 font-semibold tracking-wide uppercase">
              {readOneBlockPage.title}
            </h2>
            <ElementalArea elements={elements} />
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default Page
