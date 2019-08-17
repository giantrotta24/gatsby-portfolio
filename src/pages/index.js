import React from 'react';

import Layout from '../components/Layout';
import Title from '../components/Title';
import Nav from '../components/Nav';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Tools';
import Signup from '../components/Signup';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Nav />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <Title />
      </div>
    </header>

    <About />
    <Projects />
    <Skills />
    <Signup />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
