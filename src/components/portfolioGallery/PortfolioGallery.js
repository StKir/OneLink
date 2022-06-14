import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import github from '../../resouces/iconSteck/github_big.png'
import { iconForCards } from "../../resouces/steck-and-contacts";
import useSearchGithub from "../../resouces/useSearchGithub";
import "./portfolioGallery.scss";


const PortfolioGallery = (props) => {
  const {profile} = props.person
  const [margin, setMargin] = useState(20);
  const [repos, setRepos] = useState([]);
  const {getAllrepos} = useSearchGithub()

  const getGithubName = () => {
    if (profile) {
      return profile.github
    } else return 
  }


  useEffect(() => {
    const el = document.querySelector(".person_page-wrpapper");
    setMargin(getComputedStyle(el).marginRight);
  }, [])

  useEffect(() => {
    onRequest(getGithubName())
  }, [profile])

  const onRequest = (userName) => {
    getAllrepos(userName)
                        .then(onCharListLoaded)
  }

  const onCharListLoaded = (data) => {    
    setRepos(data);
  }
  console.log(repos);

      return (
        <div className="asd"
        style={margin ? ({paddingLeft: margin}) : 715}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide style={{width: 277}}>
              <div className="card_github">
                <div className="port-header">
                  <img src={github} alt="github" className="icon_in_card"/>
                  <span>React App</span>
                </div>
                <div className="card_icon_line">
                  <img src={iconForCards.html} alt="icon" />
                  <img src={iconForCards.sass} alt="icon" />
                  <img src={iconForCards.react} alt="icon" />
                </div>
                <div className="card-line"></div>
                <span className="card_name">{repos[4].description}</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
}
export default PortfolioGallery;
