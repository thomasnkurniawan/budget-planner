export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Set to 0 to remove trailing commas for whole numbers
    maximumFractionDigits: 0, // Set to 0 to remove trailing commas for whole numbers
  }).format(number);
};

// useNumberMask.js
import { useState } from "react";

export function useNumberMask(initialValue = 0) {
  const [value, setValue] = useState(initialValue);
  const [displayValue, setDisplayValue] = useState(formatNumber(initialValue));

  function formatNumber(num) {
    if (!num && num !== 0) return "";
    return new Intl.NumberFormat("id-ID").format(num);
  }

  function parseNumber(str) {
    // Remove all non-digit characters
    const cleaned = str.replace(/\D/g, "");
    return cleaned ? parseInt(cleaned, 10) : 0;
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    const numericValue = parseNumber(inputValue);

    setValue(numericValue);
    setDisplayValue(formatNumber(numericValue));
  }

  return {
    value, // raw number buat store
    displayValue, // formatted string buat display
    onChange: handleChange,
  };
}
