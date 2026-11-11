FROM wordpress:php8.2-apache

# MAINTAINER M. Shanken Communications <dev@mshanken.com>

RUN apt-get update && \
    apt-get install -y --no-install-recommends unzip && \
    rm -rf /var/lib/apt/lists/*

COPY docker/php/uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# ACF Pro (gallery fields used by the templates need Pro). Files under
# /usr/src/wordpress are copied into /var/www/html on first container start.
RUN cd /usr/src/wordpress/wp-content/plugins && \
    curl -fsSL https://mscwordpresscontent.s3.us-east-1.amazonaws.com/advanced-custom-fields-pro.zip -o acf.zip && \
    unzip -q acf.zip && rm acf.zip && \
    chown -R www-data:www-data /usr/src/wordpress/wp-content/plugins
