# storage-service

build docker
docker build . -t acrwebdev/storage-service

docker push
docker push acrwebdev/storage-service

docker pull
docker pull acrwebdev/storage-service

run docker
docker run -p 15000:15000 --env SERVER_IP=35.234.42.100 --env SERVER_PORT=15000 --env STORAGE=/usr/src/app/storage -v /home/acr_dev_webhouse/storage:/usr/src/app/storage --restart=always --name=storage-service -d acrwebdev/storage-service
