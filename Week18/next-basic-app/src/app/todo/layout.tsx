
export default function TodoLayout({
    children,
}: Readonly<{children:React.ReactNode}>)
{
    return (
    <>
    <div className="h-50 bg-red-400">this is me</div> 
    {children}
    <div className="h-50 bg-green-400">hi there</div>
    </>
    )
}