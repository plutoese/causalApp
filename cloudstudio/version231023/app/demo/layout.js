import Navigation from "@/components/ui/navbar"
 
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}