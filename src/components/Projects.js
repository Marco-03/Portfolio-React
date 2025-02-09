import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SpinningCube3D from "./SpinningCube3D";

const cardSections = [
    {
        title: "Full-Stack Development",
        description: `Social Media Platform
    • Built with Flask/PostgreSQL stack
    • 15% faster load times via QR integration
    • Real-time media sharing
    
    Startup Projects
    • Co-founded dev services company
    • Client-focused web solutions
    • UI/UX design leadership`,
        image: "./projects_pics/layers.png",
    },
    {
        title: "Web Development",
        description: `Client Websites (10+)
    • React.js/Django stack
    • Mobile-first responsive design
    • Cross-browser optimized
    
    Portfolio Site
    • React.js showcase
    • Performance-focused build`,
        image: "./projects_pics/web-development.png",
    },
    {
        title: "Infrastructure",
        description: `Network Optimization
    • 30% performance boost
    • AWS/Docker implementations
    • Enterprise system tuning
    
    Cloud Architecture
    • Kubernetes orchestration
    • CI/CD pipeline design`,
        image: "./projects_pics/industry.png",
    },
    {
        title: "Leadership",
        description: `Technical Mentorship
    • 30+ students guided
    • 90% assignment success
    
    Academic Projects
    • Top 5/70 ranking
    • Agile team leadership`,
        image: "./projects_pics/leadership.png",
    },
];

const theme = {
    spacing: {
        small: "10px",
        medium: "20px",
        large: "40px",
        extraLarge: "100px",
    },
};


const Projects = () => {
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const titleEl = titleRef.current;
        const currentCards = [...cardsRef.current];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        entry.target.classList.remove('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionEl) observer.observe(sectionEl);
        if (titleEl) observer.observe(titleEl);
        currentCards.forEach(card => card && observer.observe(card));

        return () => {
            if (sectionEl) observer.unobserve(sectionEl);
            if (titleEl) observer.unobserve(titleEl);
            currentCards.forEach(card => card && observer.unobserve(card));
        };
    }, []);

    return (
        <section id="projects" ref={sectionRef}>
            <ThemeProvider theme={theme}>
                <div className="absolute bottom-10 left-auto w-[200px] h-[200px]">
                    <SpinningCube3D />
                </div>

                <StyledTitle ref={titleRef} className="title text-blue-50">
                    Projects
                </StyledTitle>

                <StyledWrapper>
                    {cardSections.map((section, index) => (
                        <div
                            className="card"
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ '--delay': `${index * 0.2}s` }}
                        >
                            <div className="card__header">
                                <img src={section.image} alt={section.title} className="card__image" />
                                <h3 className="card__title">{section.title}</h3>
                            </div>
                            <div className="card__content">
                                <p className="card__description">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </StyledWrapper>
            </ThemeProvider>
        </section>
    );
};

const StyledTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    opacity: 0;
    transform: translateY(-50px) rotate(-5deg);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    padding: 80px 0 40px;
    margin: 0;
    background: linear-gradient(45deg, #00ff87, #60efff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 2px 10px rgba(124, 232, 180, 0.3);

    &.is-visible {
        opacity: 1;
        transform: translateY(0) rotate(0);
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.large};
    padding-top: 100px;
    padding-bottom: 100px;

    .card {
        position: relative;
        width: 320px;
        height: 240px;
        background: linear-gradient(-45deg, #1a1a1a, #2d2d2d);
        border-radius: 16px;
        overflow: hidden;
        opacity: 0;
        transform: translateY(50px) scale(0.95);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

        &.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            box-shadow: 0 0 13px rgb(0, 255, 135);
        }
    }

    .card__header {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), transparent);
    }

    .card__image {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-bottom: 20px;
        filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;
    }

    .card__title {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
        margin: 0;
        opacity: 1;
        transform: translateY(0);
        transition: all 0.4s ease;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .card:hover {
        transform: rotate(-5deg) scale(1.05) !important;
        box-shadow: 0 10px 40px rgb(96, 239, 255);

        .card__header {
            transform: translateY(-100%);
            opacity: 0;
        }

        .card__title {
            transform: translateY(-20px);
            opacity: 0;
        }
    }

    .card__content {
        position: absolute;
        top: 100%;
        width: 100%;
        height: 100%;
        padding: 25px;
        background: linear-gradient(45deg, #4a4a4a, #2d2d2d);
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .card:hover .card__content {
        top: 0;
        opacity: 1;
    }

    /* Add specific styling for first card */

    .card:first-child {
        .card__description {
            font-size: 0.8rem;
            line-height: 1.5;
            padding-top: 10px;
        }

        .card__content {
            padding: 20px 25px;
        }
    }

    .card__description {
        font-size: 0.85rem;
        line-height: 1.6;
        color: #e0e0e0;
        white-space: pre-wrap;
        margin: 0;
        position: relative;

        &::before {
            content: "▹ ";
            color: #4F46E5;
            margin-right: 6px;
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        gap: ${(props) => props.theme.spacing.medium};
        padding-top: 60px;
        padding-bottom: 60px;

        .card {
            width: 280px;
            height: 220px;
        }
    }
`;

export default Projects;
