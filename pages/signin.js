import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Form, Formik } from "formik";

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
  login_error: "",
};
export default function signin() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.login}>
          <div className={styles.login__container}>
            <div className={styles.login__header}>
              <div className={styles.back__svg}>
                <BiLeftArrowAlt />
              </div>
              <span>
                Wed be happy to join us ! <Link href="/">Go Store</Link>
              </span>
            </div>
            <div className={styles.login__form}>
              <h1>Sign in</h1>
              <p>Get access to one of the best Eshopping services in the world.</p>
              <Formik
                enableReinitialize
                initialValues={
                  {
                    // login_email,
                    // login_password,
                  }
                }
                // validationSchema={loginValidation}
                onSubmit={() => {
                  signInHandler();
                }}
              >
                {(form) => (
                  <Form method="post" action="/api/auth/signin/email">
                    <input type="text" />
                    {/* <LoginInput type="text" name="login_email" icon="email" placeholder="Email Address" onChange={handleChange} />
                    <LoginInput type="password" name="login_password" icon="password" placeholder="Password" onChange={handleChange} />
                    <CircledIconBtn type="submit" text="Sign in" />
                    {login_error && <span className={styles.error}>{login_error}</span>}
                    <div className={styles.forgot}>
                      <Link href="/auth/forgot">Forgot password ?</Link>
                    </div> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <Footer country="VietNam" />
      </div>
    </>
  );
}
