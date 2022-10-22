import styles from '../styles/Register.module.css'
import Foostaram from '../images/Foostaram.svg'
import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'
import Form from '../components/form/Form'
import UsePasswordResetMutation from '../api/UsePasswordResetMutation'
import { Link, Navigate, useParams } from 'react-router-dom'

const PasswordReset = () => {
    const passwordResetMutation = UsePasswordResetMutation()

    return (
        <div className="m-12 w-4/5 h-full ml-auto mr-auto flex max-w-[750px]">
            <div className="hidden md:block flex-auto w-32 mr-8">
                <img
                    alt="Promotional screenshots of the website"
                    src="/images/login/login-screenshot.png"
                    width={380}
                    height={581}
                />
            </div>
            <div className={`flex flex-col justify-center flex-auto w-14`}>
                <div className={`py-12 px-8 bg-white border ${styles.greyBorder}`}>
                    <img
                        alt="Foodstaram Logo"
                        className="h-10 ml-auto mr-auto mb-8"
                        src={Foostaram}
                    />
                    {passwordResetMutation.isError && (
                        <div className="my-8 bg-red-300 rounded-lg p-4 text-center">
                            Invalid username, please try again
                        </div>
                    )}

                    {passwordResetMutation.isSuccess && (
                        <div className="my-8 bg-green-300 rounded-lg p-4 text-center">
                            {`A password reset email has been sent to your email!`}
                        </div>
                    )}
                    <Form
                        onSubmit={(data) => {
                            passwordResetMutation.mutate({
                                username: data['username'],
                            })
                        }}
                    >
                        <InputField
                            placeholder="Username"
                            name="username"
                            autoComplete="false"
                            required
                        />
                        <div className="mb-6" />

                        <SubmitButton text="Log In" loading={passwordResetMutation.isLoading} />
                    </Form>
                </div>
                <div className={`mt-2 py-4 px-8 bg-white border ${styles.greyBorder}`}>
                    <p className="text-sm text-center">
                        Don't have an account?{' '}
                        <a className="text-insta-green" href="/register">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
