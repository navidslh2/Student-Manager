import useLogin from "./useLogin"
import { renderHook } from "@testing-library/react"

beforeEach(()=>{
    global.fetch = jest.fn()
})

afterEach (()=>{
    jest.resetAllMocks()
})

test('return Data Matched when login is correct', async()=>{
    const mockResponse = 'Data Matched'
    const mockJsonPromis = Promise.resolve(mockResponse)
    const mockFetchPromise = Promise.resolve({json:()=> mockJsonPromis})
    fetch.mockImplementation(()=> mockFetchPromise)

    const {result} = renderHook(()=> useLogin())
    const data = await result.current.login('test@example.com', '123456')
    expect(fetch).toHaveBeenCalledWith('http://localhost/student/user_login.php',{
         method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@example.com",
          password: '123456',
    })
    })
    expect(data).toBe("Data Matched")
})
