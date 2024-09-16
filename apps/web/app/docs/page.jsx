import Link from "next/link"
import Header from "@repo/ui/components/header"
import { ExternalLink, Github, AlertTriangle } from 'lucide-react'
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@repo/ui/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@repo/ui/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/ui/alert"

function Documentation() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-4xl font-bold text-gray-900">Monorepo with Vercel and AWS</h1>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com/vercel-saleseng/monorepo-vercel-amplify">
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub repository</span>
                        </Link>
                    </Button>
                </div>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600">
                            A repository demoing how Vercel can work with subapps and subpaths on other hosting providers.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Architecture</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            This repository contains two applications, each with an independent deployment:
                        </p>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <strong>Web</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li><strong>URLs</strong>: <code className="bg-gray-100 rounded px-1 font-mono">/</code> and <code className="bg-gray-100 rounded px-1 font-mono">/docs</code></li>
                                    <li><strong>Deployment</strong>: <Link href="https://monorepo-vercel-amplify.vercel.zone" className="text-blue-500 hover:underline">Vercel</Link></li>
                                </ul>
                            </li>
                            <li>
                                <strong>Dashboard</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li><strong>URL</strong>: <code className="bg-gray-100 rounded px-1 font-mono">/dashboard</code></li>
                                    <li><strong>Deployment</strong>: <Link href="https://main.d39slzkeh70gkk.amplifyapp.com/dashboard" className="text-blue-500 hover:underline">AWS</Link></li>
                                </ul>
                            </li>
                        </ol>
                        <p className="mt-4 text-gray-600">
                            All three applications are managed in a single monorepo by Turborepo, facilitating shared dependencies across the project under the <code className="bg-gray-100 rounded px-1 font-mono">/packages</code> folder. The header component, as well as other resources like global styles are shared across the different applications. Changes to these shared resources will cause both applications to redeploy.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Nginx Reverse Proxy Setup</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert variant="warning">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Warning</AlertTitle>
                            <AlertDescription>
                                While placing a reverse proxy in front of Vercel works here, <Link href="https://vercel.com/guides/can-i-use-a-proxy-on-top-of-my-vercel-deployment" className="underline">it is less secure and performant and thus is NOT recommended by Vercel.</Link> For deployments at scale, the Nginx server also needs to be <Link href="https://vercel.com/docs/edge-network/headers#x-forwarded-for" className="underline">configured as a trusted proxy, a feature on Vercel's Enterprise plan.</Link>
                            </AlertDescription>
                        </Alert>
                        <ul className="list-disc list-inside space-y-2 mt-4 mb-4">
                            <li><strong>Purpose</strong>: An Nginx reverse proxy has been set up on an AWS EC2 instance and placed in front of both applications. This setup ensures that all two applications are accessible from a unified domain (monorepo-vercel-amplify.com), with the reverse proxy directing traffic between them.</li>
                            <li><strong>Configuration</strong>:
                                <ul className="list-disc list-inside ml-4">
                                    <li>Requests to <code className="bg-gray-100 rounded px-1 font-mono">/dashboard</code> are routed to <strong>App 2</strong> (Dashboard).</li>
                                    <li>Requests to <code className="bg-gray-100 rounded px-1 font-mono">/</code> are routed to <strong>App 1</strong> (Web).</li>
                                </ul>
                            </li>
                        </ul>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="nginx-conf">
                                <AccordionTrigger>View Nginx .conf file</AccordionTrigger>
                                <AccordionContent>
                                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
                                        {`server {
    if ($host = monorepo-vercel-amplify.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name monorepo-vercel-amplify.com;

    return 404; # managed by Certbot
}

server {
    listen 443 ssl;
    server_name monorepo-vercel-amplify.com;

    # Allow traffic for Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/letsencrypt;  # Adjust this path to where Certbot saves the challenge files
    }

    # Route all /dashboard requests to AWS Amplify
    location /dashboard {
        proxy_ssl_server_name on;        
        proxy_pass https://main.d39slzkeh70gkk.amplifyapp.com/dashboard;
    }

    # Route all other requests to Vercel
    location / {
        proxy_ssl_server_name on;
        proxy_pass https://monorepo-vercel-amplify.vercel.zone/;
    }

    # SSL Configuration (managed by Certbot)
    ssl_certificate /etc/letsencrypt/live/monorepo-vercel-amplify.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/monorepo-vercel-amplify.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}`}
                                    </pre>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Using this example</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            <strong>This example uses <code className="bg-gray-100 rounded px-1 font-mono">pnpm</code> as package manager.</strong>
                        </p>
                        <p className="mb-2">Clone the repository:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mb-4">
                            git clone https://github.com/vercel-saleseng/monorepo-vercel-amplify
                        </pre>
                        <p className="mb-2">Install dependencies:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                            cd monorepo-vercel-amplify
                            pnpm install
                        </pre>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Add ui components</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">Use the pre-made script:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mb-2">
                            pnpm ui:add &lt;component-name&gt;
                        </pre>
                        <p className="text-sm text-gray-600">This works just like the add command in the <code className="bg-gray-100 rounded px-1 font-mono">shadcn/ui</code> CLI.</p>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Add a new app</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">Turborepo offer a simple command to add a new app:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mb-4">
                            pnpm turbo gen workspace --name &lt;app-name&gt;
                        </pre>
                        <p className="mb-4">This will create a new empty app in the <code className="bg-gray-100 rounded px-1 font-mono">apps</code> directory.</p>
                        <p className="mb-2">If you want, you can copy an existing app with:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto mb-2">
                            pnpm turbo gen workspace --name &lt;app-name&gt; --copy
                        </pre>
                        <p className="text-sm text-gray-600">Remember to run <code className="bg-gray-100 rounded px-1 font-mono">pnpm install</code> after copying an app.</p>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Build</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">To build all apps and packages, run the following command:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                            cd monorepo-vercel-amplify
                            pnpm build
                        </pre>
                    </CardContent>
                </Card>

                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle>Develop</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">To develop all apps and packages, run the following command:</p>
                        <pre className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                            cd monorepo-vercel-amplify
                            pnpm dev
                        </pre>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Useful Links</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-2">Learn more about the power of Turborepo:</p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                            <li><Link href="https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks" className="text-blue-500 hover:underline">Tasks</Link></li>
                            <li><Link href="https://turbo.build/repo/docs/core-concepts/caching" className="text-blue-500 hover:underline">Caching</Link></li>
                            <li><Link href="https://turbo.build/repo/docs/core-concepts/remote-caching" className="text-blue-500 hover:underline">Remote Caching</Link></li>
                            <li><Link href="https://turbo.build/repo/docs/core-concepts/monorepos/filtering" className="text-blue-500 hover:underline">Filtering</Link></li>
                            <li><Link href="https://turbo.build/repo/docs/reference/configuration" className="text-blue-500 hover:underline">Configuration Options</Link></li>
                            <li><Link href="https://turbo.build/repo/docs/reference/command-line-reference" className="text-blue-500 hover:underline">CLI Usage</Link></li>
                        </ul>
                        <p className="mb-2">Learn more about shadcn/ui:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><Link href="https://ui.shadcn.com/docs" className="text-blue-500 hover:underline">Documentation</Link></li>
                        </ul>
                        <p className="mb-2">Original template:</p>
                        <ul className="list-disc list-inside">
                            <li><Link href="https://github.com/dan5py/turborepo-shadcn-ui" className="text-blue-500 hover:underline">Repository</Link></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default function Docs() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header deployment="Vercel"></Header>
            <main className="flex-1 flex flex-col justify-center p-4">
                <Documentation />
            </main>
        </div>
    )
}