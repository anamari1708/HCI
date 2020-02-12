import React from "react"
import Form from "./formReview"
import style from "../styles/apartments.module.css"

const setUser = user => {
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
  window.location.reload()
}
const UserForm = props => {
  return (
    <div>
      <h2>Vaše iskustvo:</h2>
      <Form id="root"></Form>
      <button
        className={style.button}
        onClick={() => {
          if (window.confirm("Are you sure you want to log out?")) setUser({})
        }}
      >
        ODJAVA
      </button>
    </div>
  )
}

export default UserForm
