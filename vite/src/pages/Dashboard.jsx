import React, { useState } from 'react';
import { AiOutlineLogin } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import Nav from '../components/Nav';
import ListCards from '../components/ListCards';
import Form from '../components/Form';

function Dashboard() {

  return (
    <>
   <Nav/>
   <ListCards/>
    </>
  );
}

export default Dashboard;
