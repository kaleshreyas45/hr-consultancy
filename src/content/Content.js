import HRImage from '../assets/hr.png';
import RecruitmentImage from '../assets/recruitment.png';
import PayrollImage from '../assets/payroll.png';
import TrainingImage from '../assets/training.png'
import VisionImage from '../assets/vision.png';
import MissionImage from '../assets/goal.png';

export const content = {
    hero: {
        heading: 'Precision in People, Excellence in Results',
        subHeading: 'Let’s Build Success Together',
    },
    about: {
        heading: 'About us',
        subtitle: 'Connecting Talent with Opportunity',
        description: "At Synergy Verse, we believe that people are the heart of every successful business. Founded with the vision of reshaping the recruitment landscape, we are committed to bridging the gap between ambitious organizations and exceptional talent. We are more than just a recruitment firm — we are a strategic HR partner for companies seeking sustainable growth. By combining deep industry expertise, cutting-edge sourcing strategies, and a personalized approach, we deliver solutions that align perfectly with your business goals. Our founder, Shubham, established Synergy Verse with a passion to empower businesses and professionals alike. We stand for integrity, transparency, and excellence, ensuring that every placement contributes to long-term success. Whether you are an employer seeking high-performing talent or a professional looking to accelerate your career, Synergy Verse is where your journey meets opportunity."
    },
    serviceHeading: 'Our Services',
    services: [
        {
            serviceHeading: 'Recruitment & Talent Acquisition',
            src: RecruitmentImage,
            points: ['End-to-end recruitment support — from sourcing to onboarding','Executive search and senior leadership hiring', 'Campus recruitment & entry-level hiring drives', 'Domain-specific hiring across diverse industries']
        }, 
        {
            serviceHeading: 'HR Consulting & Compliance',
            src: HRImage,
            points: ['HR policies and handbook creation','Statutory and labor law compliance guidance', 'Employee engagement & retention strategies', 'Organizational structure and manpower planning']
        },
        {
            serviceHeading: 'Payroll & Staffing Solutions',
            src : PayrollImage,
            points: ['Payroll processing and compliance management','Temporary and contractual staffing', 'On-roll and off-roll workforce management', 'Complete HR back-office outsourcing']
        },
        {
            serviceHeading: 'Training & Development',
            src: TrainingImage,
            points: ['Customized skill-building and leadership programs','Soft skills, behavioral, and technical training modules', 'Performance management systems', 'Learning & development roadmaps for employees']
        }
    ],
    mission: {
        heading: 'Our mission',
        description: 'To empower organizations by providing top-tier talent and innovative HR solutions while enabling professionals to reach their fullest potential',
        img: MissionImage
    } ,
    vision: {
        heading: 'Our vision',
        description: 'To be the most trusted and preferred partner for recruitment and HR services, recognized for our commitment to quality, speed, and reliability',
        img: VisionImage
    },
    whyChooseUs: {
        heading: 'Why choose us',
        description : [
            {
            heading:'Industry Expertise',
            subheading: 'Deep understanding of various sectors enables us to find the right talent quickly and accurately.'
            },
            {
            heading:'Personalized Approach',
            subheading: 'Every client and candidate is unique, and we tailor our solutions accordingly.'
            },
            {
            heading:'Speed with Quality ',
            subheading: 'We maintain fast turnaround times without compromising on the quality of talent.'
            },
            {
            heading:'Long-Term Partnerships',
            subheading: 'We focus on building lasting relationships, not just filling positions.'
            },
            {
            heading:'Ethical Practices',
            subheading: 'Integrity and transparency guide every decision we make.'
            }
        ]
    },
    testimonials: {
        content: [
            {
                description: 'Synergy Verse helped us close multiple niche positions in record time. Their professionalism and market knowledge are commendable',
                author: '— HR Head, Leading Manufacturing Firm'
            },
            {
                description: 'The team understood my aspirations and guided me through every step of the recruitment process. Thanks to them, I found my dream job!',
                author: '— Senior Engineer, Placed Candidate'
            }
        ]
    }
    
}
