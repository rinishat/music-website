
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SideNavbar from './components/SideNavbar';
// import Navbar from './components/Navbar';
// import Home from './pages/Home' ;
// import Search from './pages/Search';
// import Library from './pages/Library';
// import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/LoginPage';

// import React from 'react';

// function App() {
//   return (
//     <BrowserRouter>
//     <LandingPage/>
//     <LoginPage/>
//       <div className="flex h-screen bg-black">
//         <SideNavbar />
//         <div className="flex-1 flex flex-col">
//           <Navbar />
//           <main className="flex-1 overflow-auto bg-gradient-to-br from-purple-900 via-black to-black">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/search" element={<Search />} />
//               <Route path="/library" element={<Library />} />
//               {/* <Route path="/playlist/:id" element={<Playlist />} />
//               <Route path="/liked-songs" element={<LikedSongs />} /> */}
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Full-screen routes (LandingPage, LoginPage) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Main app routes (with SideNavbar and Navbar visible) */}
        <Route
          path="/*"
          element={
            <div className="flex w-full h-full">
              <SideNavbar />
              <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 overflow-auto bg-gradient-to-br from-purple-900 via-black to-black">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/library" element={<Library />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
