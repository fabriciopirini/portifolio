'use client'

import NGLogo from '/public/assets/logos/ng-logo-squared.avif'
import OdaLogo from '/public/assets/logos/oda-logo.avif'
import SidiLogo from '/public/assets/logos/sidi-logo.avif'
import SportradarLogo from '/public/assets/logos/sportradar-logo.avif'

export const WorkExperience = () => {
  return (
    <section className="container w-full py-16 md:py-32">
      <h2 className="text-5xl font-bold">Experience</h2>
      <hr className="mt-4 block h-1 w-full bg-accent md:inline-block md:w-1/12" />
      <div className="flex w-full flex-col gap-14 py-6 text-2xl md:pr-10 xl:pr-0">
        <p>
          My journey in the tech landscape has been a blend of innovation, leadership, and continuous improvement,
          marked by significant milestones that showcase my growth and contributions to the companies I&apos;ve been
          part of.
        </p>
        <p>
          Starting at <span className="text-[1.1em] font-semibold text-accent">Sportradar</span> in Oslo, Norway, as a
          Software Engineer, my focus was on enhancing our web crawler/scrapers, where I managed to boost data
          collection efficiency by 40% while reducing server load by 25%. This role was my first dive into the practical
          application of microservices architecture, achieving a 30% improvement in scalability and a 20% reduction in
          latency. It was here that I began to see the tangible benefits of Agile methodologies, leading to a 15%
          increase in team productivity and a 20% faster project delivery.
        </p>
        <p>
          In August 2020, I joined <span className="text-[1.1em] font-semibold text-accent">Oda</span>, also in Oslo,
          taking on the challenge of transitioning a major e-commerce platform to a React frontend. This move not only
          enhanced the user interface&apos;s responsiveness but also contributed to a 15% increase in online customer
          transactions. My role expanded to include participating in an on-call rotation for a Django monolith, crucial
          for managing transactions worth over $100,000 monthly. Mentoring became a passion during this period, where I
          guided 8 junior developers, significantly reducing onboarding time by 25% and boosting team productivity by
          20%. I led initiatives to increase configuration flexibility, accommodating a 30% increase in product
          offerings without affecting system performance.
        </p>
        <p>
          My journey continued at <span className="text-[1.1em] font-semibold text-accent">Norsk Gjenvinning</span>,
          where I initially took on the role of Lead Frontend Engineer. Here, I was instrumental in developing frontend
          architectures for e-commerce platforms using React and Next.js, notably reducing page load times by 30% and
          enhancing user engagement by 25%. Working closely with UX/UI designers, we increased customer satisfaction
          scores by 20% by implementing user-friendly interfaces. Evolving into the role of Lead Software Engineer &
          Tech Lead, I managed a team of 3 software engineers, focusing on scalable e-commerce solutions. We achieved a
          40% enhancement in UI responsiveness and a 50% reduction in load times. By implementing best practices in code
          quality and development processes, we saw a 30% reduction in bug rates and a 50% improvement in deployment
          frequency. Championing the integration of new technologies led to a 20% improvement in project delivery speed
          and system reliability.
        </p>
        <p>
          Each role has been a chapter in my story, filled with learning, overcoming challenges, and making a tangible
          impact. My journey reflects a commitment to excellence, innovation, and a dedication to contributing
          positively to the tech community.
        </p>
      </div>
    </section>
  )
}

const experiences = [
  {
    company: 'Norsk Gjenvinning',
    location: 'Oslo, Norway',
    logo: NGLogo,
    url: 'https://www.ngn.no/',
    roles: [
      {
        title: 'Lead Software Engineer & Tech Lead',
        startDate: new Date('2023-09-01'),
        endDate: null,
        bullets: [
          'Managed a team of 3 software engineers in developing scalable e-commerce solutions, resulting in a 40% enhancement in UI responsiveness and a 50% reduction in load times.',
          'Implemented best practices in code quality and development processes, reducing bug rates by 30% and improving deployment frequency by 50%.',
          'Championed the integration of new technologies, leading to a 20% improvement in project delivery speed and system reliability.',
        ],
      },
      {
        title: 'Lead Frontend Engineer',
        startDate: new Date('2022-09-01'),
        endDate: new Date('2023-08-30'),
        bullets: [
          'Led the development of frontend architectures for e-commerce platforms using React and Next.js, reducing page load times by 30% and improving user engagement by 25%.',
          'Collaborated with UX/UI designers on projects that increased customer satisfaction scores by 20%, through the implementation of user-friendly interfaces.',
        ],
      },
    ],
  },
  {
    company: 'Oda',
    location: 'Oslo, Norway',
    logo: OdaLogo,
    url: 'https://www.oda.com/',
    roles: [
      {
        title: 'Software Engineer',
        startDate: new Date('2020-08-01'),
        endDate: new Date('2022-08-01'),
        bullets: [
          'Transitioned major e-commerce platform to React frontend, enhancing user interface responsiveness and contributing to a 15% increase in online customer transactions.',
          'Participated in an on-call rotation, managing critical issues for a Django monolith that supported monthly transactions worth over $100,000.',
          'Mentored 8 junior developers over 13 months, improving team proficiency in modern web technologies and best practices, which resulted in a 25% reduction in onboarding time and a 20% increase in team productivity.',
          'Led initiatives for configuration flexibility in the Django platform, accommodating a 30% increase in product offerings without compromising system performance.',
        ],
      },
    ],
  },
  {
    company: 'Sportradar',
    location: 'Oslo, Norway',
    logo: SportradarLogo,
    url: 'https://www.sportradar.com/',
    roles: [
      {
        title: 'Software Engineer',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2020-07-01'),
        bullets: [
          'Enhanced web crawler/scrapers, improving data collection efficiency by 40% and reducing server load by 25%.',
          'Migrated to microservices architecture, resulting in a 30% improvement in scalability and 20% reduction in latency.',
          'Advocated for Agile methodologies, increasing team productivity by 15% and improving project delivery timelines by 20%.',
        ],
      },
    ],
  },
  {
    company: 'Samsung R&D Institute - SIDI',
    location: 'Campinas, Brazil',
    logo: SidiLogo,
    url: 'https://www.sidi.org.br/',
    roles: [
      {
        title: 'Software Engineering Intern',
        startDate: new Date('2017-01-01'),
        endDate: new Date('2018-01-01'),
      },
    ],
  },
] as const
