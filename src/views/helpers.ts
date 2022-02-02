import { serializeValueToHtml } from "../admin/components/SlateEditor/utils";

export const renderContent = (content) => {
  if (typeof content === "string" && content !== "") {
    try {
      const parsed = JSON.parse(content);
      console.log(parsed);
      if (Array.isArray(parsed)) {
        return { __html: serializeValueToHtml(parsed) };
      }
    } catch (e) {
      return { __html: content };
    }
  }
  return { __html: content };
};

export const priceFormat = (pricePence: number): string => {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(pricePence / 100);
}