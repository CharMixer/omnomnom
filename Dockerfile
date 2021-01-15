FROM node:14

# Create app directory
WORKDIR /usr/src/app


# React pure
RUN npx create-react-app .

# Fixing very slow compilation by upgrading
RUN npm install eslint-webpack-plugin@2.4.1

# Add TypeScript
RUN npm install typescript@latest

# React
RUN npm install --save react-dom

# React router
RUN npm install --save react-router-dom
# RUN npm install react-router-dom

# React with Material UI framework
RUN npm install @material-ui/core @material-ui/icons

RUN chown -R 1000 /usr/src/app

USER 1000
EXPOSE 3000
CMD [ "npm", "start" ]
