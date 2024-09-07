/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FmfxnGzuzd3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Header from "@repo/ui/components/header"
import { buttonVariants } from "@repo/ui/components/ui/button"
import { Card, CardContent } from "@repo/ui/components/ui/card"
import { WalletIcon, CreditCardIcon, DollarSignIcon, QuoteIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header deployment="Vercel"></Header>
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Buy Now, Pay Later with Zeit
                  </h1>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    Flexible payment options to help you get what you need, when you need it. No hidden fees, no credit checks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link className={buttonVariants()} href="/dashboard">Get started</Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/blake-wisz-q3o_8MteFM0-unsplash-iDPpdcvJRnwGBUeEBRpxMtwVnl232m.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <WalletIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Flexible Payments</h3>
                  <p className="text-muted-foreground">
                    Pay in 4 interest-free installments or spread the cost over time.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <CreditCardIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">No Credit Checks</h3>
                  <p className="text-muted-foreground">Get approved instantly, no impact on your credit score.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <DollarSignIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">No Hidden Fees</h3>
                  <p className="text-muted-foreground">Transparent pricing, no surprises. Pay what you see.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Hear from real people who have used Zeit to get what they need, when they need it.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <blockquote className="space-y-2 flex-grow">
                    <QuoteIcon className="h-8 w-8 text-primary" />
                    <p className="text-sm">
                      "Zeit made it easy to get the things I needed without having to wait. Highly recommend!"
                    </p>
                  </blockquote>
                  <footer className="flex items-center space-x-2 pt-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/IMG_1397-DbGpDrCWiTuZTA0CbEdUT9pKtNPbQ1.jpeg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Jane Doe</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Acme Inc.</span>
                    </div>
                  </footer>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <blockquote className="space-y-2 flex-grow">
                    <QuoteIcon className="h-8 w-8 text-primary" />
                    <p className="text-sm">
                      "I love how easy and convenient Zeit is to use. It's a game-changer for my business."
                    </p>
                  </blockquote>
                  <footer className="flex items-center space-x-2 pt-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/IMG_1397-DbGpDrCWiTuZTA0CbEdUT9pKtNPbQ1.jpeg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">John Smith</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">XYZ Corp.</span>
                    </div>
                  </footer>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <blockquote className="space-y-2 flex-grow">
                    <QuoteIcon className="h-8 w-8 text-primary" />
                    <p className="text-sm">
                      "Zeit has been a game-changer for my personal finances. I can't imagine going back to traditional payment methods."
                    </p>
                  </blockquote>
                  <footer className="flex items-center space-x-2 pt-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/IMG_1397-DbGpDrCWiTuZTA0CbEdUT9pKtNPbQ1.jpeg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Sarah Lee</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Freelancer</span>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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