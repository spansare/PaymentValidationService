#Use the IBM Node image as a base image
FROM registry.ng.bluemix.net/ibmnode:latest

#Expose the port for your Personal Insights app, and set 
#it as an environment variable as expected by cf apps
ENV PORT=3000
EXPOSE 3000
ENV NODE_ENV production

RUN git clone https://github.com/spansare/PaymentValidationService
WORKDIR PaymentValidationService

#Install any necessary requirements from package.json
RUN npm install

#Sleep before the app starts. This command ensures that the
#IBM Containers networking is finished before the app starts. 
CMD (sleep 60; npm start)

#Start the app. 
ENTRYPOINT ["node", "app.js"]
