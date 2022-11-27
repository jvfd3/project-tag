import React from 'react';
import '../../App.css';


// function About() {
//   return(
//     <h1 className='About'>
//       About
//     </h1>
//   );
// }

export default function About() {
  return(
    <>
      <h1 className='about'>
        About page
      </h1>
      <h2>
        Origin
      </h2>
      <p>
        It's actual origin was an idea that I had when I was searching for a mechanical keyboard to buy for which there wasn't good structured data from where I could search from. So I thought "what if I could structure it in a way that anyone could find any existing product given it's characteristics? You just filter more and more until you find the thing you want or discover that it doesn't exist... yet.".
        Then I used this idea as the project for the class "Paradigma Orientado a Objeto para Desenvolvimento de Software" ministered by Ausberto Silverio Castro Vera, Professor Ph.D. at Universidade Estadual do Norte Fluminense Darcy Ribeiro.
      </p>
      <br/>
      <h2>
        Purpose
      </h2>
      <p>
        The purpose of this project is to help people finging whichever thing that it wants to find, given a number of characteristics, I mean... TAGs.
      </p>
      <br/>
      <h2>
        Goal
      </h2>
      <p>
        The goal I'm aiming to achieve is an actual working website that can match different TAGs from different objects.
      </p>
    </>
  );
}


// export default class About {
//   render () {
//     return(
//       <h1 className='About'>
//         About
//       </h1>
//     );
//   }
// }