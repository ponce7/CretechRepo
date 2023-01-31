import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import BG1 from '../../assets/images/background/cta-two-bg-1-1.jpg'
import BG2 from '../../assets/images/shapes/testi-bg-1-1.png'
import Breadcumb from '../Breadcumb/Main'
import { Parallax } from 'react-parallax'

const Solution = () => {
    const logoOptions = {
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        // nav: true,
        // navText: ["<span class=\"fa-solid fa-angle-left\"></span>", "<span class=\"fa-solid fa-angle-right\"></span>"],
        dots: false,
        margin: 30,
        items: 2,
        smartSpeed: 700,
        responsive: {
            0: {
                margin: 30,
                items: 2
            },
            375: {
                margin: 30,
                items: 2
            },
            575: {
                margin: 30,
                items: 3
            },
            767: {
                margin: 50,
                items: 4
            },
            991: {
                margin: 40,
                items: 5
            },
            1199: {
                margin: 80,
                items: 5
            }
        }
    }
    return (
        <>
        <div class="container mt-5">
            <Breadcumb Title="Nos solutions" Breadcumb="SOLUTION" />
            <section className="about-four section-padding--top">
              {/*   <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-four__image">
                                <img src="assets/images/resources/about-four-1-1.jpg" className="wow fadeInUp"
                                    data-wow-duration="1500ms" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-four__content">
                                <div className="section-title ">
                                    <p className="section-title__text">About Company</p>
                                    <h2 className="section-title__title">The World’s Networking
                                        Company</h2>
                                </div>
                                <div className="about-four__text">Since from 2000 Building Your Better IT Solution The
                                    definition of business is an occupation or trade & the purchase and sale of products Our
                                    Mission & Vision Voice and Data System are crucial to the success.</div>

                                <div className="about-four__meta">
                                    <div className="about-four__author">
                                        <img src="assets/images/resources/about-four-author-1.jpg" alt="" />
                                        <div className="about-four__author__content">
                                            <h3 className="about-four__author__title">Michele Morrone</h3>
                                            <div className="about-four__author__designation">Founder CEO</div>
                                        </div>
                                    </div>
                                    <Link to="/service-01" className="thm-btn about-four__btn"><span>Learn More</span></Link>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>*/}
            </section>
            </div>

                
            <section className="cta-one">
                <div className="container">
                    <div className="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
                        <div className="cta-one__circle"></div>
                        <div className="section-title ">
                            <p className="section-title__text">Need Any Technology Solution</p>
                            <h2 className="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-3"> <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></Link></div>
                            <div class="col-lg-3"> <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></Link></div>
                            <div class="col-lg-3"></div>
                        </div>
                       
                    </div>
                </div>
            </section>

            <section class="section-padding--bottom section-padding--top">
                <div class="row">
                    <div class="col-lg-4">
                        <div className="project-card-one">
                            <div className="project-card-one__image">
                                <img src="assets/images/projects/project-1-4.jpg" alt="" />
                            </div>
                            <div className="project-card-one__content">
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                  
                        <div className="project-card-one">
                            <div className="project-card-one__image">
                                <img src="assets/images/projects/project-1-4.jpg" alt="" />
                            </div>
                            <div className="project-card-one__content">
                              
                            </div>
                        </div>
                    
                    </div>
                    <div class="col-lg-4">
                    
                        <div className="project-card-one">
                            <div className="project-card-one__image">
                                <img src="assets/images/projects/project-1-4.jpg" alt="" />
                            </div>
                            <div className="project-card-one__content">
                              
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
               
 {/*
            <section className="black-bg cta-two">
                <Parallax bgImage={BG1} bgImageAlt="" className="cta-two__bg section-padding-lg--top section-padding-lg--bottom" strength={300}>
                    <div className="container">
                        <div className="cta-two__inner">
                            <h3 className="cta-two__title">Better IT Solutions And Services
                                At Your <span>Fingertips</span></h3>
                            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
                        </div>
                    </div>
                </Parallax>
            </section>

            <section
                className="section-padding--bottom section-padding--top testimonials-two background-repeat-no background-position-top-center"
                style={{ backgroundImage: `url(${BG2})` }}>
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-5">
                            <div className="testimonials-two__content">
                                <div className="section-title ">
                                    <p className="section-title__text">Our clients</p>
                                    <h2 className="section-title__title">We Are Trusted
                                        Worldwide Peoples</h2>
                                </div>
                                <div className="testimonials-two__content__text">Sed ut perspiciatis unde omnis natus error sit
                                    voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                                <div className="testimonials-two__content__text">Pellentesque gravida lectus vitae nisi luctus,
                                    Finibus aliquet ligula ultrices.</div>
                                <Link to="/about" className="thm-btn testimonials-two__content__btn"><span>View All
                                    feedbacks</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonials-two__items">
                                <div className="row gutter-y-30">
                                    <div className="col-lg-12">
                                        <div className="testimonials-one-card">
                                            <div className="testimonials-one-card__image">
                                                <img src="assets/images/resources/testi-1-1.jpg" alt="" />
                                            </div>
                                            <div className="testimonials-one-card__content">
                                                <div className="testimonials-one-card__text">On the other hand denounc with
                                                    ghteo
                                                    indignation and dislike men who so beguiled and demoralized the charms
                                                    of
                                                    pleasure
                                                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                                                <h3 className="testimonials-one-card__title">Michal Rahul</h3>
                                                <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                                                <i className="icon-right-quote testimonials-one-card__icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="testimonials-one-card">
                                            <div className="testimonials-one-card__image">
                                                <img src="assets/images/resources/testi-1-2.jpg" alt="" />
                                            </div>
                                            <div className="testimonials-one-card__content">
                                                <div className="testimonials-one-card__text">On the other hand denounc with
                                                    ghteo
                                                    indignation and dislike men who so beguiled and demoralized the charms
                                                    of
                                                    pleasure
                                                    the momen blinded by desire cannot foresee the pain and trouble.</div>
                                                <h3 className="testimonials-one-card__title">Jessica Brown</h3>
                                                <p className="testimonials-one-card__designation">Ul - UX Designer</p>
                                                <i className="icon-right-quote testimonials-one-card__icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="client-carousel client-carousel--two">
                <div className="container">
                    <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="assets/images/resources/client-1-1.png" alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div> */}
        </>
    )
}

export default Solution