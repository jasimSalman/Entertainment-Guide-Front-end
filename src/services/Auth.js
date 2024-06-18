import Client from "./api"

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/auth/login", data)
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("userId", res.data.user.id)
    localStorage.setItem("userType", res.data.user.type)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async ({ email, password }) => {
  try {
    const res = await Client.post("/auth/register", { email, password })
    return res.data
  } catch (error) {
    throw error
  }
}

export const updatePassword = async (data) => {
  try {
    const res = await Client.put("/auth/updatePassword", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    return res.data
  } catch (error) {
    throw error
  }
}
