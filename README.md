# How this works

## Overview

This repository is a monorepo contains three applications:

1. **Web**
   - **URLs**: `/` and `/docs` (you are here!)
   - **Deployment**: Vercel

2. **Dashboard**
   - **URL**: `/dashboard`
   - **Deployment**: AWS

### Architecture

All three applications are managed in a single monorepo by Turborepo, facilitating shared dependencies across the project under the `/packages` folder. The header component, as well as some other UI components are shared across the different applications.

### Nginx Reverse Proxy Setup

- **Purpose**: An Nginx reverse proxy has been set up on an AWS EC2 instance and is responsible for routing incoming HTTP requests to the appropriate application based on the URL path. 
- **Configuration**:
  - Requests to `/` are routed to **App 1** (Web Application).
  - Requests to `/dashboard` are routed to **App 2** (Dashboard).

This setup ensures that all three applications are accessible from a unified domain, with the reverse proxy directing traffic seamlessly between them. The Nginx `.conf` file is as follows:

```
server {
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
        proxy_pass https://main.d1f3fhe8xlynm4.amplifyapp.com/;

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
}
```

## Using this example

> [!NOTE]
> This example uses `pnpm` as package manager.

Clone the repository:

```sh
git clone https://github.com/wude935/monorepo-vercel-amplify
```

Install dependencies:

```sh
cd turborepo-shadcn-ui
pnpm install
```

### Add ui components

Use the pre-made script:

```sh
pnpm ui:add <component-name>
```

> This works just like the add command in the `shadcn/ui` CLI.

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
pnpm turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `pnpm install` after copying an app.

### Build

To build all apps and packages, run the following command:

```sh
cd turborepo-shadcn-ui
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd turborepo-shadcn-ui
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Learn more about shadcn/ui:

- [Documentation](https://ui.shadcn.com/docs)

Template this project is based off of:
- [Repository] (https://github.com/wude935/monorepo-vercel-amplify)