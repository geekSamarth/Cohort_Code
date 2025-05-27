import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Products"!
    <Link to={"/product/1"}>Go to Product 1</Link>
    <br />
    <Link to={"/product/2"}>Go to Product 2</Link>
    <br />
    <Link to={"/product/3"}>Go to Product 3</Link>

  </div>
}
