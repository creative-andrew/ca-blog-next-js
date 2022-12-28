import React from 'react';
import Image from 'next/image';
import SocialLinks from '../SocialLinks/SocialLinks';

function BioCard() {
    return (
        <section className="max-w-sm mx-auto text-center mb-12">
            <Image className="rounded-md mx-auto" width="90" height="90" src="/bio.jpg"/>
            <h2 className="text-gray-50 text-xl pt-3 pb-2">Andrew A.</h2>
            <p className="text-gray-300 font-light">I&apos;m Andrew, a web developer, programmer, designer, and computer enthusiast based in Barcelona, Spain.</p>
            <SocialLinks />
        </section>
    );
}

export default BioCard;