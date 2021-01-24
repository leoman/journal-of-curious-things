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
