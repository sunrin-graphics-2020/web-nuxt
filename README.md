# web-nuxt

2020 제 8회 선린인터넷고등학교 멀티미디어과 졸업전시회 개발 레포입니다.

nuxt를 사용하여 정적 사이트를 생성했고,  처음 [메인 화면](https://github.com/sunrin-graphics-2020/main-page) 은 jQuery로 제작했습니다.

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
