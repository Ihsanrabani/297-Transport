import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Routes from '../components/Routes';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <About />
            <Services />
            <Routes />
            <Testimonials />
            <CTASection />
        </>
    );
}
