import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${montserrat.className}`}>
      
      {/* section */}

      <section className='bg-gray-500'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='container py-16 xl:py-20 px-4 xl:px-0 mx-auto'>
            {/* content */}
            <div className='grid lg:grid-cols-3 gap-4'>
              <div className='max-w-md mx-auto'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna id augue ultrices volutpat. Morbi a condimentum tellus. Vestibulum quis ipsum eget lacus semper auctor id eget ligula. Donec blandit nisl sapien, in luctus velit varius eu. Sed viverra ante nulla, et tempor dolor aliquet non. Vestibulum mi nulla, laoreet eget justo ut, vehicula tempus justo. Praesent gravida tincidunt eros ut suscipit. Etiam nec eros tempor, feugiat sem eget, condimentum felis. Sed orci enim, placerat sed semper vitae, efficitur eget neque. Vivamus ut malesuada erat. Vestibulum tempus odio malesuada, tincidunt lectus a, convallis enim. Proin euismod lacus eget lorem hendrerit pellentesque. Curabitur tincidunt lobortis enim, a aliquam sapien rhoncus vitae. Nulla et augue vel nisi rutrum sagittis nec quis leo.</p>
              </div>
              <div className='max-w-md mx-auto'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna id augue ultrices volutpat. Morbi a condimentum tellus. Vestibulum quis ipsum eget lacus semper auctor id eget ligula. Donec blandit nisl sapien, in luctus velit varius eu. Sed viverra ante nulla, et tempor dolor aliquet non. Vestibulum mi nulla, laoreet eget justo ut, vehicula tempus justo. Praesent gravida tincidunt eros ut suscipit. Etiam nec eros tempor, feugiat sem eget, condimentum felis. Sed orci enim, placerat sed semper vitae, efficitur eget neque. Vivamus ut malesuada erat. Vestibulum tempus odio malesuada, tincidunt lectus a, convallis enim. Proin euismod lacus eget lorem hendrerit pellentesque. Curabitur tincidunt lobortis enim, a aliquam sapien rhoncus vitae. Nulla et augue vel nisi rutrum sagittis nec quis leo.</p>
              </div>
              <div className='max-w-md mx-auto'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et urna id augue ultrices volutpat. Morbi a condimentum tellus. Vestibulum quis ipsum eget lacus semper auctor id eget ligula. Donec blandit nisl sapien, in luctus velit varius eu. Sed viverra ante nulla, et tempor dolor aliquet non. Vestibulum mi nulla, laoreet eget justo ut, vehicula tempus justo. Praesent gravida tincidunt eros ut suscipit. Etiam nec eros tempor, feugiat sem eget, condimentum felis. Sed orci enim, placerat sed semper vitae, efficitur eget neque. Vivamus ut malesuada erat. Vestibulum tempus odio malesuada, tincidunt lectus a, convallis enim. Proin euismod lacus eget lorem hendrerit pellentesque. Curabitur tincidunt lobortis enim, a aliquam sapien rhoncus vitae. Nulla et augue vel nisi rutrum sagittis nec quis leo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
