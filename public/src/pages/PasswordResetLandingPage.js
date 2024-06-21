import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PasswordResetSuccess } from './PasswordResetSuccess';
import { PasswordResetFail } from './EmailVerificationFail';


export const PasswordResetLandingPage = () => {
    const [isSuccess, setIsSuccss] = useState(false);
    const [isFail, setIsFail] = useState(false);

    const [ passwordValue, setPasswordValue ] = useState(" ");
    const [ confirmPasswordValue, setConfirmPasswordValue ] = useState(" ");
    const { passwordResetCode } = useParams(""); 
    const onResetClicked = async () => {
        try {
            await axios.put(`/api/users/${passwordResetCode}/reset-password`, {
                newPassword: passwordValue
            });
            setIsSuccss(true);

        } catch (e) {
            setIsFail(true);
        }
    }
    if(isFail) return <PasswordResetFail />
    if(isSuccess) return <PasswordResetSuccess />

    return (
        <div className="content-container">
            <h1>Reset Password</h1>
            <p>Please enter a new password</p>
            <input 
                type="password"
                value={passwordValue}
                onChange={ e => setPasswordValue(e.target.value)}
                placeholder="Password"
            />

            <input type="password"
                value={confirmPasswordValue}
                onChange={ e => setConfirmPasswordValue(e.target.value)}
                placeholder="Confirm Password"
            />

            <button 
                disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue}
                onClick={onResetClicked}
            >Reset Password</button>
        </div>
    )
}