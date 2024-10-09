import { ArrowUp } from "lucide-react"
import { Button } from "@/shared/ui/button";

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button className="fixed bottom-4 right-4" onClick={scrollToTop}>
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};
