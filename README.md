This is a [Next.js Template](https://vercel.com/templates/next.js/nextjs-boilerplate) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) adding the [`needle-engine`](https://engine.needle.tools/docs/html.html) web component.

## Needle Engine
This project is a minimal example of adding `needle-engine` to a nextjs project

- [`needle.config.json`](./needle.config.json)  
  Added the `baseUrl` config to `./assets` to change codegen (`src/generated/gen`) to point to the next.js local server relative url
- [`next.config.js`](./next.config.js)  
  Include the nextjs plugin which handles `transpilePackages`, webpack `defines` and licensing
- [tsconfig.json](/tsconfig.json#L19) set decorators to true by adding `"experimentalDecorators": true`
- [`src/needleEngine.tsx`](src/needleEngine.tsx)  
  This is a simple next component for including the `needle-engine` web component. 
  make sure to also add the type declarations from [`src/declarations.d.ts`](./src/declarations.d.ts)  
- [`src/pages/index.tsx`](./src/pages/index.tsx)  
  Import the component to run client-side:  
  ```tsx
  const NeedleEngine = dynamic(() => import('../needleEngine'), { ssr: false })
  ```

### FAQ
- Q: My web project has no files in the `dist` output directory ([see question in needle discord](https://discord.com/channels/717429793926283276/1210179478119120896/1219409114145361930))   
  A: Add `output: 'export'` to you next.config.js (see [nextjs documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#configuration))


## Learn More

To learn more about Needle Engine & Next.js, take a look at the following resources:

- [Learn Needle Engine](https://docs.needle.tools)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

This template is set-up to [deploy to Needle Cloud](https://github.com/needle-engine/nextjs-sample/blob/main/.github/workflows/deploy.yml) via Github Actions.

Check out our [Needle Engine deployment documentation](https://engine.needle.tools/docs/how-to-guides/deployment/#deploy-to-vercel) for more details.
