import { createContext, useContext, useState } from 'react';

export const ControllerAPIValue = {
    host: 'localhost',
    port: '8000'
  }

export const ControllerContext = createContext();
