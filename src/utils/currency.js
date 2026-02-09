export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Set to 0 to remove trailing commas for whole numbers
    maximumFractionDigits: 0, // Set to 0 to remove trailing commas for whole numbers
  }).format(number);
};
