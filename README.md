## Overview

 A repository demoing how Vercel can work with subapps and subpaths on other hosting providers. 

### Architecture

 This repository contains two applications, each with an independent deployement:

1. **Web**
   - **URLs**: `/` and `/docs`
   - **Deployment**: [Vercel](https://monorepo-vercel-amplify.vercel.zone)

2. **Dashboard**
   - **URL**: `/dashboard`
   - **Deployment**: [AWS](https://main.d1lg4zxtg3ac1d.amplifyapp.com/dashboard)

All three applications are managed in a single monorepo by Turborepo, facilitating shared dependencies across the project under the `/packages` folder. The header component, as well as other resources like global styles are shared across the different applications. Changes to these shared resources will cause both applications to redeploy. 

### Nginx Reverse Proxy Setup

 > While placing a reverse proxy in front of Vercel works here, [it is less secure and peformant and thus is NOT recommended by Vercel.](https://vercel.com/guides/can-i-use-a-proxy-on-top-of-my-vercel-deployment)

- **Purpose**: An Nginx reverse proxy has been set up on an AWS EC2 instance and placed in front of both applications. This setup ensures that all two applications are accessible from a unified domain (monorepo-vercel-amplify.com), with the reverse proxy directing traffic between them.
- **Configuration**:
  - Requests to `/dashboard` are routed to **App 2** (Dashboard).
  - Requests to `/` are routed to **App 1** (Web).

 The Nginx `.conf` file is as follows:

```
server {
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
        proxy_pass https://main.d1lg4zxtg3ac1d.amplifyapp.com/dashboard;
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
}
```

## Using this example

> This example uses `pnpm` as package manager.

Clone the repository:

```sh
git clone https://github.com/vercel-saleseng/monorepo-vercel-amplify
```

Install dependencies:

```sh
cd monorepo-vercel-amplify
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

> Remember to run `pnpm install` after copying an app.

### Build

To build all apps and packages, run the following command:

```sh
cd monorepo-vercel-amplify
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd monorepo-vercel-amplify
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

Original template:
- [Repository] (https://github.com/wude935/monorepo-vercel-amplify)