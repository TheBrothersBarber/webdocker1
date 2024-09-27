# Usar la imagen oficial de PHP con Apache
FROM php:8.2-apache

# Instalar extensiones necesarias para MySQL
RUN docker-php-ext-install mysqli

# Copiar la aplicación al directorio raíz de Apache
COPY ./Act1/ /var/www/html/

# Exponer el puerto 8080
EXPOSE 8080