import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import './App.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));




 const App = () => {
  
  
  
  return (
    <>
      <header>
        <Navigation />
      </header>
      
        <div>
       
        <Suspense fallback={<div>Loading page...</div>}>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
           <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
        </Suspense>
       
         
        </div>
        
      
  </>
   
  )
}

export default App;
