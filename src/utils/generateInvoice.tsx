import { v4 as uuidv4 } from "uuid";

function generateInvoiceId(eventTitle: string): string {
  const initials = eventTitle
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const randomPart = uuidv4().replace(/-/g, "").substring(0, 8).toUpperCase();

  return `${initials}-${randomPart}`;
}

export default generateInvoiceId;
