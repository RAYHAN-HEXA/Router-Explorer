import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
         <section class="hero">
        <h1>Building Digital Solutions for Tomorrow</h1>
        <p>We are dedicated to creating innovative solutions that transform businesses and empower people through technology. Our team of experts works tirelessly to deliver excellence in every project.</p>
    </section>

    <div class="container">
        <section class="section" id="home">
            <h2>Welcome to Our Website</h2>
            <p>Thank you for visiting our website. We are a leading company in the digital transformation space, committed to helping businesses achieve their goals through innovative technology solutions. Our journey began over a decade ago with a simple mission: to make technology accessible and beneficial for everyone.</p>
            
            <p>Over the years, we have worked with hundreds of clients across various industries, delivering solutions that not only meet their immediate needs but also position them for long-term success. Our approach is collaborative, transparent, and focused on delivering measurable results.</p>
            
            <h3>Our Vision</h3>
            <p>We envision a world where technology seamlessly integrates with everyday life, making processes more efficient, communication more effective, and opportunities more accessible. Through continuous innovation and dedication to excellence, we strive to be at the forefront of this transformation.</p>
            
            <h3>Why Choose Us</h3>
            <p>Choosing the right partner for your digital journey is crucial. We understand that every business is unique, with its own challenges and opportunities. That's why we take the time to understand your specific needs and tailor our solutions accordingly. Our team brings together diverse expertise in design, development, strategy, and support to ensure comprehensive solutions.</p>
            
            <p>We pride ourselves on our client-first approach, which means we're not satisfied until you're delighted with the results. Our commitment extends beyond project completion – we build lasting relationships and provide ongoing support to ensure your continued success.</p>
        </section>
    </div>

    <section class="about-section" id="about">
        <div class="container">
            <h2>About Our Company</h2>
            <p>Founded in 2013, our company has grown from a small startup to a recognized leader in digital solutions. Our success is built on three core principles: innovation, integrity, and customer satisfaction. These values guide everything we do, from initial consultation to final delivery and beyond.</p>
            
            <h3>Our Team</h3>
            <p>Our team consists of talented professionals who are passionate about technology and dedicated to excellence. We bring together designers, developers, strategists, and project managers who collaborate seamlessly to deliver outstanding results. Each team member brings unique skills and perspectives, creating a dynamic environment where creativity thrives.</p>
            
            <p>We invest heavily in professional development, ensuring our team stays current with the latest technologies and best practices. This commitment to continuous learning enables us to offer cutting-edge solutions that give our clients a competitive advantage.</p>
            
            <h3>Our Approach</h3>
            <p>We believe in a holistic approach to digital solutions. This means we don't just focus on technology – we consider your business goals, target audience, market position, and growth aspirations. By understanding the bigger picture, we create solutions that truly make a difference.</p>
            
            <p>Our process is transparent and collaborative. We keep you informed at every stage, welcome your feedback, and make adjustments as needed. This ensures the final product not only meets specifications but exceeds expectations.</p>
        </div>
    </section>

    <div class="container">
        <section class="section" id="services">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of services designed to address all aspects of your digital presence. Whether you're looking to build a new website, develop a mobile app, or implement a complex enterprise solution, we have the expertise to help you succeed.</p>
            
            <div class="services-grid">
                <div class="service-card">
                    <h3>Web Development</h3>
                    <p>We create responsive, fast-loading websites that provide exceptional user experiences. Our websites are built using the latest technologies and best practices, ensuring they're not only beautiful but also functional and secure.</p>
                    <p>From simple landing pages to complex web applications, we have the skills and experience to bring your vision to life. We focus on clean code, intuitive navigation, and seamless performance across all devices.</p>
                </div>
                
                <div class="service-card">
                    <h3>Mobile Applications</h3>
                    <p>In today's mobile-first world, having a great mobile app is essential. We develop native and cross-platform applications that deliver smooth, engaging experiences for your users.</p>
                    <p>Our mobile solutions are designed with user experience in mind, featuring intuitive interfaces, fast performance, and robust functionality. We handle everything from concept to deployment and ongoing maintenance.</p>
                </div>
                
                <div class="service-card">
                    <h3>Digital Strategy</h3>
                    <p>Technology is only effective when aligned with clear business objectives. Our digital strategy services help you identify opportunities, define goals, and create actionable plans to achieve them.</p>
                    <p>We analyze your market, competitors, and target audience to develop strategies that give you a competitive edge. Our recommendations are practical, data-driven, and designed to deliver measurable results.</p>
                </div>
            </div>
            
            <h3>Custom Solutions</h3>
            <p>Every business has unique needs that off-the-shelf solutions can't always address. That's where our custom development services come in. We work closely with you to understand your specific requirements and develop tailored solutions that fit perfectly with your workflows and objectives.</p>
            
            <p>Our custom solutions range from specialized software applications to integration services that connect different systems and automate processes. We use agile methodologies to ensure flexibility and continuous improvement throughout the development process.</p>
        </section>

        <section class="section">
            <h2>Our Commitment to Quality</h2>
            <p>Quality is not just a buzzword for us – it's a fundamental principle that guides our work. We maintain rigorous quality standards throughout every project, from initial planning to final delivery. This includes comprehensive testing, code reviews, and performance optimization to ensure everything works flawlessly.</p>
            
            <p>We also believe in sustainable development practices. This means writing clean, maintainable code that's easy to update and scale as your business grows. We document everything thoroughly and provide training to ensure your team can manage and maintain the solutions we create.</p>
            
            <h3>Client Success Stories</h3>
            <p>Our greatest satisfaction comes from seeing our clients succeed. Over the years, we've helped businesses increase their online presence, streamline operations, improve customer engagement, and achieve significant growth. These success stories motivate us to continue pushing boundaries and delivering excellence.</p>
            
            <p>We measure our success by your success. That's why we take a partnership approach, working alongside you to overcome challenges and celebrate achievements. Your growth is our growth, and we're committed to supporting you every step of the way.</p>
        </section>
    </div>
        
        </div>
    );
};

export default Home;