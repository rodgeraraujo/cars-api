# Cars API

## How to run this project?

1. Configure a `.env` file:

```bash
echo 'NODE_ENV="development"\nPORT=3000\nSTART_MESSAGE="Starting server on port 3000' > .env
```

2. Run API server in development mode:

```bash
npm run dev
```

> Use `DEBUG` env for logs, have `api-server` or `api-database`.

## Using the application

1. #### POST /api/v1/cars

   Save a new car:

   ```bash
   curl --request POST \
       --url http://localhost:3000/api/v1/cars \
       --header 'Content-Type: application/json' \
       --data '{
            "license_plate": "4232-sad",
            "chassi": "38943749233428237",
            "renavam": "34234342434234",
            "model": "Camaro",
            "brand": "Chevrolet",
            "year": "2014"
        }'
   ```

2. #### GET /api/v1/cars/{id}

   Get a car by id:

   ```bash
   curl --request GET \
        --url http://localhost:3000/api/v1/cars/2
   ```

3. #### GET /api/v1/cars

   Get a list of cars:

   ```bash
   curl --request GET \
        --url http://localhost:3000/api/v1/cars
   ```

4. #### PUT /api/v1/cars

   Update a car info by id:

   ```bash
   curl --request PUT \
        --url http://localhost:3000/api/v1/cars/1 \
        --header 'Content-Type: application/json' \
        --data '{
            "license_plate": "abc-1234",
            "chassi": "1234",
            "renavam": "4321",
            "model": "911 Carrera",
            "brand": "Porsche",
            "year": "2005"
        }'
   ```

5. #### DELETE /api/v1/cars/{id}

   Delete a car info by id:

   ```bash
   curl --request DELETE \
        --url http://localhost:3000/api/v1/cars/2
   ```

6. #### GET /hearth
   API status:
   ```bash
   curl --request GET \
        --url http://localhost:3000/hearth
   ```

## Testing

1. Make sure the server is running.
2. Run the tests:

```bash
npm test
```
