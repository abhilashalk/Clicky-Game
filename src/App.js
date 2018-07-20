// import React, { Component } from "react";
import React from "react";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard';
import cartoon from "./cartoon.json";


const App = () => (
  <div className="wrapper">
    <Navbar />
    <Jumbotron />
    <ImageCard image={cartoon} />
    <Footer />
  </div>
);
export default App;

// --------------------------------------------------------------------------------------------------------------------

// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     cartoon
//   };



//   // Map over this.state.friends and render a FriendCard component for each friend object
//   render() {
//     return (
//       <Navbar/>
//         <Jumbotron/>
//         {this.state.friends.map(friend => (
//           <FriendCard
//             removeFriend={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

//     export default App;
