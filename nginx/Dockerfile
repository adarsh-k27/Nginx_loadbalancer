FROM nginx:1.21.6
# COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf 
COPY ./default.conf  /etc/nginx/conf.d/default.conf 
# COPY localhost.conf  /etc/nginx/sites-available/localhost 
# COPY proxy_params /etc/nginx/proxy_params
# RUN mkdir /etc/nginx/sites-enabled/
# RUN  ln -s /etc/nginx/sites-available/localhost /etc/nginx/sites-enabled/
# RUN service nginx status
EXPOSE 80
RUN nginx -t 
