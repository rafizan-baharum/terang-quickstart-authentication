# terang-quickstart-authentication
TERANG Quickstart authentication


# swagger
http://<host>:8080/dmasjid/swagger-ui.html


#login
curl dmasjid-client:XY7kmzoNzl100@<host>:8080/dmasjid/oauth/token -d grant_type=password -d username=root -d password=<password> > login.json

#api call
curl -H "Authorization: Bearer <access_token>" http://<host>:8080/dmasjid/api/common/sodoCodes  > programCodes.json
