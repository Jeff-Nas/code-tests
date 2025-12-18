
export function UserCard({ name, age }) {
   return (
      <div className="p-3 bg-cyan-900 text-white m-1 flex gap-2 w-32 sm:w-48 h-14 items-center justify-center">
         <h3>{name}</h3>
         <p>{age}</p>
      </div>
   )
}