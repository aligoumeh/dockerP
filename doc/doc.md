# Docker
### Frontend
we create a multi stage docker file for front end with a nginx server running on port 80 with exposure of that port

![alt text](./sc1.png)

###  backend

we added 4 fictional persons using the person controller

![alt text](./sc2.png)

we seed the data base from a json object as well :

![alt text](./sc3.png)

![alt text](./sc4.png)

Main docker compose looks like this:

![alt text](./sc5.png)

It has 4 services which the mongo db image will be pulled from docker hub and the rest of them has the docker file in the path referred in the `build` option of the services

here the mentioned docker files:

![alt text](./sc6.png)

![alt text](./sc7.png)

![alt text](./sc8.png)

and here is the web site running on with the docker compose 

![alt text](./sc9.png)

![alt text](./sc10.png)

### gitlab CD

As stated in the assignment we generated a ssh key and placed the private key on gitlab variable and used ``ssh-copy-id devtools-520@vps2644.directvps.nl`` to copy the public key to the vps .

the gitlab yml file has been created from the snippet and we add scp command with right arguments such as identifier and dist folder source to public_html on the vps

![alt text](./sc11.png)

we changed the background image and pushed the code so the gitlab runner can perform the job

![alt text](./sc12.png)

![alt text](./sc13.png)
