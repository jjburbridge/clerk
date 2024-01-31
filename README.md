This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is running Next 12.3.4 to show issue with missing function response.cookies.getAll in middleware
[discord link](https://discord.com/channels/856971667393609759/1201523434388201534/1201523434388201534)

## Reproduce the issue

First, add .env details 

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This will cause a 500 error and in teh logs you should see the error:
```
error - (middleware)/node_modules/@clerk/nextjs/dist/esm/utils/response.js (19:0) @ mergeResponses
error - response.cookies.getAll is not a function
null
```