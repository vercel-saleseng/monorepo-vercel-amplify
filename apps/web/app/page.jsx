/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FmfxnGzuzd3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Header from "@repo/ui/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header deployment="Vercel"></Header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] justify-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Buy Now, Pay Later with Zeit
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Flexible payment options to help you get what you need, when you need it. No hidden fees, no credit checks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-start">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
              <img
                src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/blake-wisz-q3o_8MteFM0-unsplash-iDPpdcvJRnwGBUeEBRpxMtwVnl232m.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
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
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real people who have used Zeit to get what they need, when they need it.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <blockquote className="flex flex-col items-center justify-center space-y-4">
                    <QuoteIcon className="h-8 w-8 text-primary" />
                    <p className="text-muted-foreground">
                      "Zeit made it easy to get the things I needed without having to wait. Highly recommend!"
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/IMG_1397-DbGpDrCWiTuZTA0CbEdUT9pKtNPbQ1.jpeg"
                        width="50"
                        height="50"
                        alt="Logo"
                        className="aspect-square overflow-hidden rounded-full object-fill object-center"
                      />
                      <span className="text-sm font-medium">Jane Doe, Acme Inc.</span>
                    </div>
                  </blockquote>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <blockquote className="flex flex-col items-center justify-center space-y-4">
                    <QuoteIcon className="h-8 w-8 text-primary" />
                    <p className="text-muted-foreground">
                      "I love how easy and convenient Zeit is to use. It's a game-changer for my business."
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/IMG_1397-DbGpDrCWiTuZTA0CbEdUT9pKtNPbQ1.jpeg"
                        width="50"
                        height="50"
                        alt="Logo"
                        className="aspect-square overflow-hidden rounded-full object-fill object-center"
                      />
                      <span className="text-sm font-medium">John Smith, XYZ Corp.</span>
                    </div>
                  </blockquote>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <blockquote className="flex flex-col items-center justify-center space-y-4">
                    <QuoteIcon className="h-8 w-8 text-primary" />
                    <p className="text-muted-foreground">
                      "Zeit has been a game-changer for my personal finances. I can't imagine going back to
                      traditional payment methods."
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://oyzylraohoni5bza.public.blob.vercel-storage.com/IMG_1397-DbGpDrCWiTuZTA0CbEdUT9pKtNPbQ1.jpeg"
                        width="50"
                        height="50"
                        alt="Logo"
                        className="aspect-square overflow-hidden rounded-full object-fill object-center"
                      />
                      <span className="text-sm font-medium">Sarah Lee, Freelancer</span>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Zeit. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function QuoteIcon(props) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}


function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}