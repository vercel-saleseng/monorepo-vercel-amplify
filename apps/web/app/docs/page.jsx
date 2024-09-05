import Link from "next/link"
import Header from "@repo/ui/components/header"

// converted from README.md to JSX with https://sudos.tools/markdown-to-react and https://v0.dev/chat
function Documentation() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
            <h1 className="text-4xl font-bold text-primary mb-6">Docs</h1>

            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-primary" id="overview">Overview</h2>
                <p className="text-lg text-muted-foreground">This repository is a monorepo contains three applications:</p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <span className="font-semibold text-lg">App 1: Web Application</span>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground">
                            <li><strong>URLs</strong>: <code className="bg-muted px-1 py-0.5 rounded">/</code> and <code className="bg-muted px-1 py-0.5 rounded">/docs</code> (you are here!)</li>
                            <li><strong>Deployment</strong>: Vercel</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">App 2: Dashboard</span>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground">
                            <li><strong>URL</strong>: <code className="bg-muted px-1 py-0.5 rounded">/dashboard</code></li>
                            <li><strong>Deployment</strong>: AWS</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" id="architecture">Architecture</h3>
                <p className="text-muted-foreground">
                    All three applications are managed in a single monorepo by Turborepo,
                    facilitating shared dependencies across the project under the{' '}
                    <code className="bg-muted px-1 py-0.5 rounded">/packages</code> folder. The header component, as well as some other
                    UI components are shared across the different applications.
                </p>
            </section>

            <section className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" id="nginx-reverse-proxy-setup">Nginx Reverse Proxy Setup</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                        <strong>Purpose</strong>: An Nginx reverse proxy has been set up on an
                        AWS EC2 instance and is responsible for routing incoming HTTP requests
                        to the appropriate application based on the URL path.
                    </li>
                    <li>
                        <strong>Configuration</strong>:
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>
                                Requests to <code className="bg-muted px-1 py-0.5 rounded">/</code> are routed to <strong>App 1</strong> (Web Application).
                            </li>
                            <li>
                                Requests to <code className="bg-muted px-1 py-0.5 rounded">/dashboard</code> are routed to <strong>App 2</strong> (Dashboard).
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="text-muted-foreground">
                    This setup ensures that all three applications are accessible from a
                    unified domain, with the reverse proxy directing traffic seamlessly
                    between them. The Nginx <code className="bg-muted px-1 py-0.5 rounded">.conf</code> file is as follows:
                </p>
            </section>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>
                    {`server {
  listen 80;
  server_name monorepo-vercel-amplify.com;

  # Route all requests to Vercel except /dashboard
  location / {
    proxy_ssl_server_name on;
    proxy_pass https://monorepo-vercel-amplify.vercel.zone/;
  }

  # Route all /dashboard requests to AWS
  location /dashboard/ {
    proxy_ssl_server_name on;
    proxy_pass https://main.d1f3fhe8xlynm4.amplifyapp.com;

    rewrite ^/dashboard/(.*)$ /$1 break;
  }

  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/monorepo-vercel-amplify.com/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/monorepo-vercel-amplify.com/privkey.pem; # managed by Certbot
  include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
  if ($host = monorepo-vercel-amplify.com) {
    return 301 https://$host$request_uri;
  } # managed by Certbot

  return 404; # managed by Certbot
}`}
                </code>
            </pre>

            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-primary" id="using-this-example">Using this example</h2>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    <p>
                        This example uses <code className="bg-muted px-1 py-0.5 rounded">pnpm</code> as package manager.
                    </p>
                </blockquote>
                <p className="text-muted-foreground">Clone the repository:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                        git clone https://github.com/wude935/monorepo-vercel-amplify
                    </code>
                </pre>
                <p className="text-muted-foreground">Install dependencies:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                        {`cd turborepo-shadcn-ui
pnpm install`}
                    </code>
                </pre>
            </section>

            <section className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" id="add-ui-components">Add ui components</h3>
                <p className="text-muted-foreground">Use the pre-made script:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>pnpm ui:add &lt;component-name&gt;</code>
                </pre>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    <p>
                        This works just like the add command in the <code className="bg-muted px-1 py-0.5 rounded">shadcn/ui</code> CLI.
                    </p>
                </blockquote>
            </section>

            <section className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" id="add-a-new-app">Add a new app</h3>
                <p className="text-muted-foreground">Turborepo offer a simple command to add a new app:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>pnpm turbo gen workspace --name &lt;app-name&gt;</code>
                </pre>
                <p className="text-muted-foreground">
                    This will create a new empty app in the <code className="bg-muted px-1 py-0.5 rounded">apps</code> directory.
                </p>
                <p className="text-muted-foreground">If you want, you can copy an existing app with:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>pnpm turbo gen workspace --name &lt;app-name&gt; --copy</code>
                </pre>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    <p>
                        Remember to run <code className="bg-muted px-1 py-0.5 rounded">pnpm install</code> after copying an app.
                    </p>
                </blockquote>
            </section>

            <section className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" id="build">Build</h3>
                <p className="text-muted-foreground">To build all apps and packages, run the following command:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                        {`cd turborepo-shadcn-ui
pnpm build`}
                    </code>
                </pre>
            </section>

            <section className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" id="develop">Develop</h3>
                <p className="text-muted-foreground">To develop all apps and packages, run the following command:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                        {`cd turborepo-shadcn-ui
pnpm dev`}
                    </code>
                </pre>
            </section>

            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-primary" id="useful-links">Useful Links</h2>
                <p className="text-muted-foreground">Learn more about the power of Turborepo:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><Link href="https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks" className="text-primary hover:underline">Tasks</Link></li>
                    <li><Link href="https://turbo.build/repo/docs/core-concepts/caching" className="text-primary hover:underline">Caching</Link></li>
                    <li><Link href="https://turbo.build/repo/docs/core-concepts/remote-caching" className="text-primary hover:underline">Remote Caching</Link></li>
                    <li><Link href="https://turbo.build/repo/docs/core-concepts/monorepos/filtering" className="text-primary hover:underline">Filtering</Link></li>
                    <li><Link href="https://turbo.build/repo/docs/reference/configuration" className="text-primary hover:underline">Configuration Options</Link></li>
                    <li><Link href="https://turbo.build/repo/docs/reference/command-line-reference" className="text-primary hover:underline">CLI Usage</Link></li>
                </ul>
                <p className="text-muted-foreground">Learn more about shadcn/ui:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><Link href="https://ui.shadcn.com/docs" className="text-primary hover:underline">Documentation</Link></li>
                </ul>
                <p className="text-muted-foreground">Template this project is based off of:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><Link href="https://github.com/wude935/monorepo-vercel-amplify" className="text-primary hover:underline">Repository</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default function Component() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header deployment="Vercel"></Header>
            <main className="flex-1 flex flex-col justify-center p-4">
                <section className="container">
                    <Documentation />
                </section>
            </main>
        </div>
    )
}