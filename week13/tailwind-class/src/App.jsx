
function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#002b5c] text-center">
      <div>
        <div className="mb-30 flex justify-center">
          <img src="https://webinar.gg/loginLogo.svg" alt="image icon" />
        </div>
          <h1 className="text-white text-3xl font-bold mb-20"> Verify Your Age </h1>
          <p className="text-gray-300 mb-3"> Please confirm your birth year. This data will not be stored. </p>
      </div>
      
      <form className="w-90">
        <div>
          <input type="text" className="border border-white/5 bg-white/5 w-full h-12 rounded-xl text-base font-medium text-white pl-2 pr-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#002B5B] transition-all shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible: outline-none diabled:cursor-not-allowed disabled:opacity-50 mb-6" name="dob" placeholder="DD/MM/YYYY"/>
        </div>
        <div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow px-4 py-2 w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold text-base transition-colors">Continue</button>
        </div>
      </form>
    </div>
  )
}

export default App
