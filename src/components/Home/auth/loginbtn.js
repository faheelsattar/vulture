import React from 'react'
import "./loginbtn.css"
import { GoogleLogin } from 'react-google-login';
import { useFetch } from '../useFetch'
const Loginbtn = (props) => {
    const [response, error, isLoading, fetchData] = useFetch("http://localhost:4000/api/v1/auth/login-user")
    if (props.data.name) {
        const responseGoogle = async (result) => {
            console.log(result)
            const options = {
                method: "POST",
                body: JSON.stringify({
                    token: result.uc.id_token,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            }
            if (!isLoading) {
                await fetchData(options)
                if (!error) {
                    console.log(response)
                } else {
                    console.log(error)
                }
            }
        }
        return (
            <GoogleLogin
                clientId="303969579724-kduob8j8q46c95bs15h5dopmigdhl2g6.apps.googleusercontent.com"
                render={renderProps => (
                    <a key={props.id}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login-btn">
                        <img className="login-btn-img" src={props.data.img} />
                        <p className="login-name">{props.data.name}</p>
                    </a>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        )
    } else {
        return (
            <a key={props.id} className="login-btn">
                <img className="login-btn-img" src={props.data.img} />
                <p className="login-name">{props.data.name}</p>
            </a>
        )
    }

}
export default Loginbtn