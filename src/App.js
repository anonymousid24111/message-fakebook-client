import './App.css';
import React, { useRef, useEffect } from 'react'
import logo from './logo.svg'


function App() {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <div className="container-full">
      <div className="container-left">
        <div className="header-left" >
          <img src={logo} className="header-left__image" />
          <span className="header-left__headline">Chats</span>
          <button className="header-left__button">1</button>
          <button className="header-left__button">1</button>
          <button className="header-left__button">1</button>
        </div>
        <div className="search-box">
          <input type="text" className="search-box__input" />
        </div>
        <div className="list-conversation">
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <div className="conversation-block__image" >
              <img src={logo} alt="avatar-friend" className="conversation-block__avatar" />
              <span className="conversation-block__active"></span>
            </div>
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">f</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>
          <div className="conversation-block">
            <img src={logo} alt="avatar-friend" className="conversation-block__image" />
            <div className="conversation-block-content">
              <span className="conversation-block-content__headline">fsdawejdioawejiigweajoiawhigjewoifhauihg</span>
              <div className="conversation-block-content__body">
                <div className="conversation-block-content__message">kajewfaewufawoiegoiawheoifhawoi</div>
                <span>-</span>
                <span>1m</span>
              </div>
            </div>
            <icon className="conversation-block__icon"></icon>
          </div>

        </div>
      </div>
      <div className="container-right">
        <div className="header-left">
          <img src={logo} className="header-left__image" />
          <div className="header-left__headline">
            <div className="header-left__headline--title">Title</div>
            <div className="conversation-block-content__body">status</div>
          </div>
          <button className="header-left__button">1</button>
          <button className="header-left__button">1</button>
          <button className="header-left__button">1</button>
        </div>
        <div className="list-chat" ref={divRef}>
          <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
          <div className="list-chat__left">
            <div className="item-chat__left">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">mesajkfje kaejfww mawekf jjaiwejfoiawjefioj jaewifjiwaeojfoij</div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
            <div className="item-chat__left">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">mesajkfje kaejfww mawekf jjaiwejfoiawjefioj jaewifjiwaeojfoij</div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
            <div className="item-chat__right">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">
                <div className="item-chat__message">
                  hihih
                </div>
                <div className="item-chat__message">
                  hhaha
                </div>
              </div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
            <div className="item-chat__right">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">
                <div className="item-chat__message">
                  hihih
                </div>
                <div className="item-chat__message">
                  hhaha
                </div>
              </div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
            <div className="item-chat__right">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">
                <div className="item-chat__message">
                  hihih
                </div>
                <div className="item-chat__message">
                  hhaha
                </div>
              </div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
            <div className="item-chat__right">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">
                <div className="item-chat__message">
                  hihih
                </div>
                <div className="item-chat__message">
                  hhaha
                </div>
              </div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
            <div className="item-chat__left">
              <div className="list-chat__avatar">
                <img src={logo} alt="avatar-friend" className="item-chat__avatar" />
              </div>

              <div className="list-chat__message">
                <div className="item-chat__message">
                  hihih
                </div>
                <div className="item-chat__message">
                  hhaha
                </div>
              </div>
            </div>
            <div className="list-chat__time">Jan 17, 2021, 7:33 AM</div>
          </div>
        </div>
        <div className="footer-right">
          <img src={logo} alt="add" className="footer-right__icon" />
          <input type="text" name="message" className="footer-right__input search-box__input" />
          <img src={logo} alt="react" className="footer-right__icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
