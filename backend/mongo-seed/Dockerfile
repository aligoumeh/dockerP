FROM mongo

WORKDIR /app

COPY seed.json /init.json

CMD mongoimport --host mongodb --db grp520 --collection person --type json --file /init.json --jsonArray