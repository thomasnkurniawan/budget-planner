import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { useState } from "react";
import Input from "../atoms/Input";
import { useBudgetStore } from "../../store/budgetStore";

export default function CardIncome() {
  const { addIncome } = useBudgetStore();

  const [incomeCategory, setIncomeCategory] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const handleIncomeSubmit = () => {
    addIncome({ category: incomeCategory, amount: Number(incomeAmount) });
    setIncomeCategory("");
    setIncomeAmount(0);
  };

  return (
    <Card>
      <div className="flex justify-between mb-4 text-center items-center">
        <p className="font-bold text-lg">Add Income</p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Income Category"
          className="w-full"
          value={incomeCategory}
          onChange={(e) => setIncomeCategory(e.target.value)}
        />
        <Input
          placeholder="Amount"
          type="number"
          className="w-full"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <div className="flex gap-2">
          <Button
            variant="primary"
            className="w-full"
            onClick={handleIncomeSubmit}
          >
            Add Income
          </Button>
        </div>
      </div>
    </Card>
  );
}
