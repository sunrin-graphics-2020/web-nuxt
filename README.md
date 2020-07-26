# web-nuxt

## Serve static

```bash
# install dependencies
$ yarn install

# generate static files
$ yarn build --target static
$ yarn export

# servie with docker(apache)
$ sudo docker build -t my-apache2 .
$ sudo docker run -p 80:80 my-apache2\n
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
