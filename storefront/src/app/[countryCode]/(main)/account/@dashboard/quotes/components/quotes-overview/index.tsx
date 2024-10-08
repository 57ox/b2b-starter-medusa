"use client"

import { Button } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { GeneralQuoteType } from "types/global"
import QuoteCard from "../../../../../../../../modules/account/components/quote-card"

const QuotesOverview = ({ quotes }: { quotes: GeneralQuoteType[] }) => {
  if (quotes?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <QuoteCard quote={quote} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      data-testid="no-quotes-container"
    >
      <h2 className="text-large-semi">Nothing to see here</h2>
      <p className="text-base-regular">You don&apos;t have any quotes yet</p>

      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button data-testid="continue-shopping-button">
            Continue shopping
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default QuotesOverview
