import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 >Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id="123"
        name="Companion 1"
        topic="Topic 1"
        subject="Subject 1"
        duration={45}
        color="#40c4ff"
        
        />  <CompanionCard 
        id="456"
        name="Companion 1"
        topic="Topic 1"
        subject="Subject 2"
        duration={45}
        color="#ff5733"
        
        />  <CompanionCard 
        id="789"
        name="Companion 1"
        topic="Topic 1"
        subject="Subject 3"
        duration={45}
        color="#ffcc00"
        
        /> 

      </section>  
       <section className='home-section'>
        <CompanionsList 
        title="Recently Completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"/> 
        <CTA  />

      </section>
    </main>
  )
}

export default Page
