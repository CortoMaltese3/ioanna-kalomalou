import { FunctionComponent } from 'react'
import { Service } from '../types'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
   service: { Icon, title, about },
}) => {
   // XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
   function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center p-2 space-x-4 h-full'>
         <div className='flex-shrink-0 flex items-center justify-center h-full'>
            <Icon className='w-12 h-12 text-green' />
         </div>
         <div className='flex-grow flex flex-col justify-center h-full'>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
