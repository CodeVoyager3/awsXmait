import React from 'react';

// A reusable wrapper component for consistent page section styling
const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`py-20 px-6 min-h-[calc(100vh-140px)] flex items-center ${className}`}>
        <div className="container mx-auto">
            {children}
        </div>
    </section>
);

export default Section;
