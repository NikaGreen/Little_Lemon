import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Alan Chen" description="I really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard name="Casey Lau" description=" Nothing beats Little Lemon in flavor and texture."/>
                <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. "/>
                <TestimonialCard name="Jim Reynor" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard name="Brian Dean" description="The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Tyler Tohmine" description="Everyone should try this place
                 out at least once if they live in Chicago."/>
                <TestimonialCard name="Jack Hu" description="I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}