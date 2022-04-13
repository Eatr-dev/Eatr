import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { setSceneActionCreator, getRestaurantsActionCreator } from '../actions/actions.js';

import Header from '../components/Header.jsx';
import HomeScene from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavoritesScene from './FavoritesScene.jsx'


const MainContainer = () => {
  // *** look into useDispatch and useSelector
  const dispatch = useDispatch();
  const scene = useSelector(store => store.setScene.sceneState);
  // *** figure out the state of the store, is it home feed or favorites
    const handleSceneChange = (e) => {
      if (scene === 'feed' && e.target.id === 'back') dispatch(setSceneActionCreator('home'));
      else if (scene === 'feed' && e.target.id === 'favorites') dispatch(setSceneActionCreator('favorites'));
      else if (scene === 'favorites' && e.target.id === 'back') dispatch(setSceneActionCreator('feed'));
      else dispatch(setSceneActionCreator('feed'));
    }
    const handleFormSubmission = (e) => {
      e.preventDefault();
      const form = e.target.parentNode;
      const location = form.children[2].value;
      const category = form.children[6].value;
      dispatch(getRestaurantsActionCreator({term: category, location: location}));
      handleSceneChange(e);
    }
    const renderSwitch = () => {
      switch(scene) {
        case 'feed':
          return (
            <>
            < FeedScene />
            </>
          )
        case 'favorites':
          return (
            <>
            < FavoritesScene />
            </>
          )
        default:
          return (
            <>
            < HomeScene onClick={handleFormSubmission}/>
            </>
          );
      }
    }
    return (
      <main>
        < Header onClick={handleSceneChange}/>
        {renderSwitch()}
      </main>
    )
}
export default MainContainer;