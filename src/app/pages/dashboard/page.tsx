// /* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
// import { useQueryState } from 'nuqs'

// import Navbar from 'dashboard/navbar'
// import Filters from 'dashboard/filters'
// // import Requested from 'dashboard/requested'
// import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'
// // import Pagination from 'dashboard/pagination'
// import { Suspense, useEffect, useState } from 'react'

// export default function Dashboard() {
//   const [isintro, setIsintro] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsintro(false)
//     }, 1500) // 0.5 segundos

//     return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
//   }, [])

//   const [page, setPage] = useQueryState('inicio')
//   const [filters, setFilters] = useState({
//     id: '',
//     name: '',
//     status: '',
//   })

//   const handlerChosen = (page: 'inicio' | 'pedidos' | 'adicionar') => {
//     console.log(page)
//     setPage(page)
//   }

//   const handleFilterChange = (newFilters: {
//     id: string
//     name: string
//     status: string
//   }) => {
//     setFilters(newFilters)
//   }

//   return (
//     <>
//       {isintro ? (
//         <IntroAnimationUse />
//       ) : (
//         <>
//           <Suspense fallback={<div>Loading...</div>}>
//             <div className="relative size-full min-h-screen bg-zinc-900 text-zinc-200">
//               <Navbar handlerChosen={handlerChosen} />
//               <div className="mb-6 mt-4 h-[1px] w-screen bg-zinc-500 shadow-2xl" />
//               {page === 'inicio' && (
//                 <>
//                   <div>teste</div>
//                 </>
//               )}
//               {page === 'adicionar' && <div>teste2</div>}
//               {page === 'pedidos' && (
//                 <div>
//                   <div className="px-7 text-3xl font-semibold">Pedidos</div>
//                   <Filters onFilterChange={handleFilterChange} />

//                   {/* <Requested filters={filters} /> */}
//                   {/* <Pagination /> */}
//                 </div>
//               )}
//             </div>
//           </Suspense>
//         </>
//       )}
//     </>
//   )
// }

import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])

  return (
    <div>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <>
          <div>teste</div>
        </>
      )}
    </div>
  )
}
