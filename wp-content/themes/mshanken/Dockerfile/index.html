FROM wordpress:latest

# MAINTAINER M. Shanken Communications <dev@mshanken.com>

# Write the snd theme into the themes dir
COPY . /usr/src/wordpress/wp-content/themes/msstheme/

COPY wp-config-cache.php /usr/src/wordpress/wp-content/
# Install composer devs onto the container
RUN  cp /usr/src/wordpress/wp-content/themes/msstheme/composer.json /usr/src/wordpress/composer.json && \
	cp /usr/src/wordpress/wp-content/themes/msstheme/robots.txt /usr/src/wordpress/robots.txt && \
	cd /usr/src/wordpress && \
	curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer && \
	composer config --no-plugins allow-plugins.composer/installers true && \
	composer install --no-dev --no-interaction --optimize-autoloader --prefer-dist