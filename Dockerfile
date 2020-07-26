FROM httpd:2.4
COPY dist/ /usr/local/apache2/htdocs/sunrin.graphics/2020
EXPOSE 80
