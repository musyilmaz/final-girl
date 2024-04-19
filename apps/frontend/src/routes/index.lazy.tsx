import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@ui/components";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Index!</h3>
      <div className="flex flex-col gap-3 w-24">
        <Button>Button</Button>
        <Button variant="outline">test</Button>
      </div>
    </div>
  );
}
