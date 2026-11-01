import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AWS Practice Feud · CLF-C02 Practice Exams" },
      { name: "description", content: "AWS Cloud Practitioner practice exams styled like a 1970s game-show board." },
      { property: "og:title", content: "AWS Practice Feud · CLF-C02 Practice Exams" },
      { property: "og:description", content: "65-question AWS CLF-C02 mock exams with explanations on a retro game-show board." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/quiz/index.html");
  }, []);
  return <p className="p-8 text-center">Loading the quiz…</p>;
}
