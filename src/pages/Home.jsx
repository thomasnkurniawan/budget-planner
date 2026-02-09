import Container from "../components/atoms/Container";
import Reveal from "../components/atoms/Reveal";
import CardBudget from "../components/molecules/Cardbudget";
import CardIncome from "../components/molecules/CardIncome";
import CardSummary from "../components/molecules/CardSummary";

export default function Home() {

  return (
    <Reveal>
      <Container className="flex flex-col gap-4 items-center mx-auto my-32">
        {/* TITLE */}
        <section className="py-2 max-w-4xl w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-neutral-900">Allocator</h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-2 w-full p-4 my-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
            {/* LEFT COLUMN (Card 1 + Card 3) */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <CardIncome />
              <CardBudget />
            </div>

            {/* RIGHT COLUMN (Card 2 - auto height grow) */}
            <div className="w-full md:w-1/2">
              <div className="h-full">
                <CardSummary/>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Reveal>
  );
}
