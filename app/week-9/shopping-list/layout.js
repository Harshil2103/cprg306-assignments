import { AuthContextProvider } from "./_utils/auth-context";  // Import the AuthContextProvider

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;  // Wrap children with the AuthContextProvider
}
