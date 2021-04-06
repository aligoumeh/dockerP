FROM mongo

COPY seed.json /seed.json

CMD mongoimport --host mongodb --db persondb --collection person --type json --file /seed.json --jsonArray