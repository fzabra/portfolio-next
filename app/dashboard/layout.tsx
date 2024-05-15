export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <p>dashboard layout</p>
        <nav></nav>
   
        {children}
      </section>
    )
  }