import { notFound } from "next/navigation";

// Any unknown URL lands here so the 404 page renders inside the site layout,
// in the visitor's language.
export default function CatchAll() {
  notFound();
}
