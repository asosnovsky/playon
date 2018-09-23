import * as React from "react";
import { TextField, Card, CardHeader, CardContent, CardActions, Button, IconButton, CardMedia } from '@material-ui/core';
import Google from '@/components/Icons/Google';
import { auth } from '@/db';
import Notifier from '@/components/layouts/Notifier';
import { logoImageUrl } from '@/assets';

interface IState {
    email: string;
    password: string;
    repeatPassword: string;
    mode: "signin" | "signup";
}
export default class Login extends React.Component<{}, IState> {
    state:IState = { email: "", password: "", repeatPassword: "", mode: "signin" };
    
    onActionBtnClick = () => {
        const { email, password, repeatPassword, mode } = this.state;
        if ( email.length < 4 ) {
            return Notifier.notify("Invalid Email")
        }
        if ( password.length < 4 ) {
            return Notifier.notify("Invalid Password")
        }
        if ( mode === "signin" ) {
            return auth.loginWithEmail(email, password);
        }
        if ( mode === "signup" ) {
            if ( password !== repeatPassword ) {
                return Notifier.notify("Password's do not match!")
            }
            return auth.signupWithEmail(email, password);
        }
    }

    render() {
        const { email, password, repeatPassword, mode } = this.state;
        let actionBtnTxt: string = "N/A";
        if (mode === "signin") {
            actionBtnTxt = "Sign In";
        }   else if (mode === "signup") {
            actionBtnTxt = "Sign Up";
        }
        let switchBtnTxt: string = "N/A";
        if (mode === "signin") {
            switchBtnTxt = "Create Account";
        }   else    if (mode === "signup") {
            switchBtnTxt = "I have an account";
        }
        return <Card>
            <CardMedia style={{ height: "150px", backgroundSize: "contain" }} image={logoImageUrl}/>
            <CardContent>
                <TextField fullWidth label="Email" placeholder="Email" value={email} onChange={ e => this.setState({ email: e.currentTarget.value }) } />
                <TextField fullWidth type="password" label="Password" placeholder="Password" value={password} onChange={ e => this.setState({ password: e.currentTarget.value }) }/>
                {mode === "signup" &&
                    <TextField fullWidth type="password" label="Repeat Password" placeholder="Repeat Password" value={repeatPassword} onChange={ e => this.setState({ repeatPassword: e.currentTarget.value }) }/>
                }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" onClick={ this.onActionBtnClick }>{actionBtnTxt}</Button>
                <Button variant="outlined" onClick={ () => {
                    this.setState({
                        mode: mode === "signin" ? "signup" : "signin",
                        repeatPassword: "",
                        password: "",
                    })
                }}>{switchBtnTxt}</Button>
                <IconButton color="primary" onClick={ e => {
                    auth.loginWithGoogle();
                } }><Google/></IconButton>
            </CardActions>
        </Card>
    }

}
