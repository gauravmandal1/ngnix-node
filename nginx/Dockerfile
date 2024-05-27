# Use the official Nginx image from the Docker Hub
FROM nginx:alpine
WORKDIR /etc/nginx/templates
# Copy the custom Nginx configuration file
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
