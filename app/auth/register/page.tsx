export default function RegisterPage() {   
   return (

    <div className="max-w-1/4 mx-auto">
        <form action="">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
  <div className="mb-3">
 <input type="text"
 name="email"
 placeholder="Email"
 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
 />

 <input type="password"
 name="password"
 placeholder="Password"
 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
 />
 <input type="confirmPassword"
 name="confirmPassword"
 placeholder="Confirm  Password"
 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
 />
  </div>

        </form>
        
        
         </div>



   )

 }
