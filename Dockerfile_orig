#Use the IBM Node image as a base image
FROM registry.ng.bluemix.net/ibmnode:latest

#Expose the port for your Personal Insights app, and set 
#it as an environment variable as expected by cf apps
ENV PORT=3000
EXPOSE 3000
ENV NODE_ENV production

RUN sudo apt-get install -y wget

RUN wget -qO- https://github.com/amalgam8/amalgam8/releases/download/v0.4.2/a8sidecar.sh | sh

ENV A8_SERVICE=payment_validation_service:v1
ENV A8_ENDPOINT_PORT=3000
ENV A8_ENDPOINT_TYPE=http
ENV A8_REGISTRY_URL=http://payment-a8-registry.mybluemix.net
ENV A8_REGISTRY_POLL=60s
ENV A8_CONTROLLER_URL=http://payment-a8-controller.mybluemix.net
ENV A8_CONTROLLER_POLL=60s
ENV A8_LOG=enable_log

RUN git clone https://github.com/spansare/PaymentValidationService
WORKDIR PaymentValidationService

#Install any necessary requirements from package.json
RUN npm install

#Sleep before the app starts. This command ensures that the
#IBM Containers networking is finished before the app starts. 
CMD (sleep 60; npm start)

#Start the app. 
ENTRYPOINT ["a8sidecar", "--register", "--supervise", "node", "app.js"]
