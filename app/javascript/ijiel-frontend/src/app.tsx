import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Homepage from '@/pages/Homepage';
import Archives from '@/pages/Archives';
import Blogs from '@/pages/Blogs';
import Submissions from '@/pages/Submissions';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/about" element={<About />} />
      {/* Send all the other paths to notfound */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;