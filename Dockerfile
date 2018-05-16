FROM node:6.9.4
LABEL maintainer="M. Shanken Communications <dev@mshanken.com>"
LABEL description="Node 6.9.4"

# set up node user
RUN npm install -g harp grunt-cli node-sass bower browser-sync
ENV HOME /home/node
ENV PWD .

COPY package.json $HOME

# USER node
ADD $PWD $HOME
WORKDIR $HOME

RUN chown -R www-data:www-data $HOME \
	&& mkdir $HOME/www \
	&& npm install && bower install --allow-root

EXPOSE 9000

CMD [ "npm", "run", "start" ]
