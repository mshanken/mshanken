#!/bin/sh
# Idempotent local setup, run via: docker compose run --rm wpcli
set -e

# Wait for the wordpress container to copy core files into the shared volume.
i=0
until [ -f /var/www/html/wp-config.php ]; do
	i=$((i + 1))
	[ "$i" -gt 60 ] && echo "wp-config.php never appeared; is the wordpress service up?" && exit 1
	sleep 2
done

if ! wp core is-installed 2>/dev/null; then
	wp core install \
		--url="${WP_URL:-http://localhost:8093}" \
		--title="M. Shanken Communications" \
		--admin_user=admin \
		--admin_password=admin \
		--admin_email=admin@example.com \
		--skip-email
fi

wp theme activate msstheme
wp plugin activate advanced-custom-fields-pro
# The apache image already ships a WordPress .htaccess, so no --hard needed.
wp rewrite structure '/%postname%/'

echo "Ready: ${WP_URL:-http://localhost:8093}  (admin / admin)"
