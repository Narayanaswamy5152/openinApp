In this project, I build **OpeninApp** app with Protected Route by applying the concepts I have learned till now.



### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

</details>




### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `Login` route should consist of `/login` in the URL path


- User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

</details>

<details>
Note:-When you open the app it will defaultly opens the home screen if you want to see login  
page you can change url as narayanopenin.ccbp.tech/login the login page will get appeared after entering login details you will be redirected to home page. It is a one time process if you want to again redirect to login page you can't redirect because jwt token is stored as cookie if we can delete it we can easily redirect to login page again.
</details>


### Resources

<details>
<summary>Font-families</summary>

- Roboto

</details>


>
> - All components you implement should go in the `src/components` directory.

