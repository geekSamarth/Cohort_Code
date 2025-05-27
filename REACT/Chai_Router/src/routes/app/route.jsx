import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      App Layout
      <h2>Routes</h2>
      <li>
        <Link to="/app/dashboard">/app/dahboard</Link>
      </li>
    </div>
  );
}
