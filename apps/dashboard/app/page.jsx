/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LuvGFpTK54h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Header from "@repo/ui/components/header"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header deployment="AWS"></Header>
      <main className="flex-1 p-2 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Transactions</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">$2.3M</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
                <span>+12.5%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Order Value</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">$85</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
                <span>-3.2%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">4.8/5</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
                <span>+0.2</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Featured Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/rachit-tank-2cFZ_FB08UM-unsplash-xkmdA73GHMVKEAiLiXN8aHYWWEnowp.jpg"
                    width="160"
                    height="160"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="text-sm font-medium">Acme Wireless Headphones</div>
                  <div className="text-sm text-muted-foreground">$99.99</div>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/rachit-tank-2cFZ_FB08UM-unsplash-xkmdA73GHMVKEAiLiXN8aHYWWEnowp.jpg"
                    width="160"
                    height="160"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="text-sm font-medium">Acme Smart Watch</div>
                  <div className="text-sm text-muted-foreground">$149.99</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Featured Promotions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/rachit-tank-2cFZ_FB08UM-unsplash-xkmdA73GHMVKEAiLiXN8aHYWWEnowp.jpg"
                    width="160"
                    height="160"
                    alt="Promotion"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="text-sm font-medium">Summer Sale</div>
                  <div className="text-sm text-muted-foreground">Up to 50% off</div>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/rachit-tank-2cFZ_FB08UM-unsplash-xkmdA73GHMVKEAiLiXN8aHYWWEnowp.jpg"
                    width="160"
                    height="160"
                    alt="Promotion"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="text-sm font-medium">Black Friday</div>
                  <div className="text-sm text-muted-foreground">20% off sitewide</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Releases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/rachit-tank-2cFZ_FB08UM-unsplash-xkmdA73GHMVKEAiLiXN8aHYWWEnowp.jpg"
                    width="160"
                    height="160"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="text-sm font-medium">Acme Fitness Tracker</div>
                  <div className="text-sm text-muted-foreground">Coming Soon</div>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/rachit-tank-2cFZ_FB08UM-unsplash-xkmdA73GHMVKEAiLiXN8aHYWWEnowp.jpg"
                    width="160"
                    height="160"
                    alt="Product"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="text-sm font-medium">Acme Smart Speakers</div>
                  <div className="text-sm text-muted-foreground">Coming Soon</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 Zeit. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="https://vercel.com">
            Vercel
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/vercel-saleseng/monorepo-vercel-amplify">
            GitHub
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}