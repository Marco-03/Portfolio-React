import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled to the bottom of the page
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageHeight = document.documentElement.offsetHeight;

            if (scrollPosition >= pageHeight - 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <StyledWrapper isVisible={isVisible}>
            <div className="card">
                <span className="card__hover">Hover Here!</span>
                <figure className="card__figure">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgb(255,255,255)', transform: '', msfilter: '' }}>
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z" />
                        <circle cx="8.5" cy="12.5" r="1.5" />
                        <circle cx="15.5" cy="12.5" r="1.5" />
                    </svg>
                </figure>
                <div className="card__info ">
          <span className="card__name">Marco Luchian
            <span className="card__ocupation"> Frontend Developer </span>
            <div className="card__links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" style={{ color: 'white', fontSize: '24px' }}></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ color: 'white', fontSize: '24px' }}></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" style={{ color: 'white', fontSize: '24px' }}></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" style={{ color: 'white', fontSize: '24px' }}></i>
              </a>
            </div>
          </span></div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`

    .card {
        width: 300px;
        height: 400px;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        left: 5%;
        background-color: rgba(113, 113, 113, 0.6);
        backdrop-filter: blur(20px);
        text-align: center;
        border: 1px solid #fff;
        z-index: 1000;
        --rotate-animation: rotate(45deg);
        --scale-animation: scale(0);
        bottom: ${(props) => (props.isVisible ? '7%' : '-100%')};
        transition: bottom 0.5s ease-in-out;
        background-color: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(0px);
        
    }
    
    @media(max-width: 1780px) {
        display: none;
    }

    .card::before {
        content: '';
        height: 110%;
        width: 110%;
        position: absolute;
        top: -5%;
        left: -5%;
        z-index: -1;
        filter: blur(30px);
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.9); /* Example shadow */
    }

    .card__hover {
        color: #fff;
        width: 100%;
        margin: 0;
        font-size: 40px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 0;
        text-align: center;
        letter-spacing: 2px;
        pointer-events: none;
        transform: scale(1) translateY(-50%);
        font-family: var(--font-mulish);
        transition: transform 600ms;
    }

    .card:hover .card__hover {
        transform: scale(0);
    }

    .card__figure {
        width: 100%;
        height: 65%;
        overflow: hidden;
        transform: var(--rotate-animation) var(--scale-animation);
        transition: transform 600ms ease 100ms;
    }

    .card:hover .card__figure {
        --rotate-animation: rotate(0);
        --scale-animation: scale(1);
    }

    .card__figure svg {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: drop-shadow(0 0 2px #0f0c29);
    }

    .card__info {
        display: flex;
        transform: var(--scale-animation);
        transition: transform 600ms ease 100ms;
    }

    .card:hover .card__info {
        --scale-animation: scale(1);
    }

    .card__name {
        color: #fff;
        font-size: 28px;
        letter-spacing: 1px;
        font-family: var(--font-AR-One-Sans);
    }

    .card__ocupation {
        color: #c1d9f6;
        font-family: var(--font-mulish);
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: 2px;
    }

    .card__links {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        --transform-animation: translateY(-10px);
    }

`;

export default Card;
