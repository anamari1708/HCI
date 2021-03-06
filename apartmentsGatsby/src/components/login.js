import React from "react"
import { handleLogin } from "../services/auth"
import style from "../styles/apartments.module.css"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  ManualRefresh() {
    window.location.reload()
  }
  render() {
    return (
      <>
        <h1 style={{ margin: "60px 0 0 0" }}>Prijava</h1>
        <form
          style={{ marginBottom: "20px" }}
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            window.location.reload()
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gridColumnGap: "2em",
            }}
          >
            <label>
              <p
                style={{ display: "inline-block", padding: "15px 20px 0 20px" }}
              >
                Korisničko ime
              </p>
              <input
                style={{ display: "inline-block" }}
                type="text"
                name="username"
                onChange={this.handleUpdate}
              />
            </label>
            <label>
              <p
                style={{ display: "inline-block", padding: "0 20px 15px 20px" }}
              >
                Lozinka
              </p>
              <input
                style={{ display: "inline-block" }}
                type="password"
                name="password"
                onChange={this.handleUpdate}
              />
            </label>
          </div>
          <button
            onClick={event => {
              this.handleSubmit(event)
              window.location.reload()
            }}
            className={style.button}
            style={{ display: "block", margin: "0 auto" }}
          >
            Prijava
          </button>
        </form>
      </>
    )
  }
}

export default Login
