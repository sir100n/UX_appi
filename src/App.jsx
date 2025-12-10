import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Login from './pages/Login';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'search':
        return <Search />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ height: '100%' }}
      >
        {renderContent()}
      </motion.div>
    </Layout>
  );
}

export default App;
