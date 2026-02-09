import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Input from "../atoms/Input";
import { useBudgetStore } from "../../store/budgetStore";
import { useState } from "react";

export default function CardBudget() {
  const { addBudget } = useBudgetStore();
  const [amount, setAmoount] = useState();
  const [category, setCategory] = useState();

  return (
    <Card>
      <div className="flex justify-between mb-4 text-center items-center">
        <p className="font-bold text-lg">Allocated Budget</p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Income Category"
          className="w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          placeholder="Amount"
          type="number"
          className="w-full"
          value={amount}
          onChange={(e) => setAmoount(e.target.value)}
        />
        <div className="flex gap-2">
          <Button
            variant="primary"
            className="w-full"
            onClick={() => addBudget({ category, amount: Number(amount) })}
          >
            Add Budget
          </Button>
        </div>
      </div>
    </Card>
  );
}
