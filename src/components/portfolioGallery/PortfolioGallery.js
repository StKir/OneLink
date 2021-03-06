import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import github from '../../resouces/iconSteck/github_big.png'
import { iconForCards } from "../../resouces/steck-and-contacts";
import useSearchGithub from "../../resouces/useSearchGithub";
import question from '../../resouces/img/question.png'

import "./portfolioGallery.scss";

const PortfolioGallery = (props) => {
  const {profile} = props.person
  const [margin, setMargin] = useState(500);
  const [repos, setRepos] = useState(false);
  const {getAllrepos} = useSearchGithub()

  const getGithubName = () => {
    if (profile) {
      return profile.github
    } else return false
  }


  useEffect(() => {
    const el = document.querySelector(".person_page-wrpapper");
    window.screen.width < 500 ? setMargin(getComputedStyle(el).paddingRight) : setMargin(getComputedStyle(el).marginRight);
    // setMargin(getComputedStyle(el).marginRight);
  }, [repos])

  useEffect(() => {
    if(getGithubName()){onRequest(getGithubName())}
  }, [profile])

  const onRequest = (userName) => {
    getAllrepos(userName)
                        .then(onCharListLoaded)
  }

  const onCharListLoaded = (data) => {    
    setRepos(data);
  }

  const rednerSwiperItems = (array) => {
    if (array) {
      const items = array.map((el) => {
        return (
            <SwiperSlide
             onClick={() => {window.location.href = el.url}}
             style={{width: 277}}
             key={el.id}>
              <div className="card_github">
                <div className="port-header">
                  <img src={github} alt="github" className="icon_in_card"/>
                  <span>
                    {el.name.length > 15 ? 
                      (el.name.slice(0,12) + '...') : 
                      el.name}
                  </span>
                </div>
                <div className="card_icon_line">
                  <img src={
                    el.language != null ? 
                      el.language.toLowerCase() in iconForCards ? 
                      (iconForCards[el.language.toLowerCase()]) : 
                      (question) : 
                      (question)} alt="icon" />
                </div>
                <div className="card-line"></div>
                <span className="card_name">
                  {el.description != null ? 
                    el.description.length < 80 ? 
                      (el.description) : 
                      (el.description.slice(0,77) + '...') : 
                    ('???????????????? ??????????????????????!')}
                  </span>
              </div>
            </SwiperSlide>
        )
      })
      return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="mySwiper"
            slidesOffsetBefore={Number(margin.slice(0,4))}
            >
        {items.reverse()}
        </Swiper>
      )
    }
  }

      const items = rednerSwiperItems(repos);
      return (
        <div className="asd"
        // style={margin ? ({paddingLeft: margin}) : 150}
        >
          {items}
        </div>
      );
}
export default PortfolioGallery;
