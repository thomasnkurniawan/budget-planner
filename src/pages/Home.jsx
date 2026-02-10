import { RiWallet3Line } from "@remixicon/react";
import Container from "../components/atoms/Container";
import CardBudget from "../components/molecules/Cardbudget";
import CardIncome from "../components/molecules/CardIncome";
import CardSummary from "../components/molecules/CardSummary";
import Divider from "../components/atoms/Divider";
import Article from "../components/molecules/Article";

export default function Home() {
  return (
      <Container className="flex flex-col gap-4 items-center mx-auto my-32">
        {/* TITLE */}
        <section className="py-2 max-w-4xl w-full px-4">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="section-title flex items-center gap-2">
              <RiWallet3Line /> Gajian Allocator
            </h1>
            <p className="section-desc">
              Plan your income, allocate your budget, and instantly see what's
              left — simple and clean
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-2 w-full px-4 my-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
            {/* LEFT COLUMN (Card 1 + Card 3) */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <CardIncome />
              <CardBudget />
            </div>

            {/* RIGHT COLUMN (Card 2 - auto height grow) */}
            <div className="w-full md:w-1/2">
              <div className="h-full">
                <CardSummary />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-8 my-16 px-4">
          <Divider position="top" />

          <Article />
        </section>
      </Container>
  );
}
