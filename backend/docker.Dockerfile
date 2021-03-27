FROM node:14.16.0
WORKDIR /var/www
COPY api .
RUN rm -R node_modules
# RUN rm package-lock.json
RUN npm install
CMD ["npm", "dev"]