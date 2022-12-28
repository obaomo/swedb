import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify, API } from 'aws-amplify';
import { Amplify, Analytics } from "aws-amplify";

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { 
    Component1NavBar 
  } from './ui-components';
import {
  SongCreateform
} from ' ./ui-components';

import { 
  Component1Gallery 
} from './ui-components';

import { 
  Component1RSVP 
} from './ui-components';

import { 
  Component1Food 
} from './ui-components';


Amplify.configure(awsconfig);

<ThemeProvider theme={studioTheme}>

    <app />

</ThemeProvider>
