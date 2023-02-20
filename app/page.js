import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <div className='realtive'>
      <Hero />
      <div className='gradient-03 z-0' />
      <About />
    </div>
    <div className='realtive'>
      <Explore />
      <div className='gradient-04 z-0' />
      <GetStarted />
    </div>
    <div className='realtive'>
      <WhatsNew />
      <div className='gradient-04 z-0' />
      <World />
    </div>
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
