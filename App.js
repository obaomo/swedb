import '@aws-amplify/ui-react/styles.css';
import * as React from 'react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Analytics } from 'aws-amplify';

function App() {
  return <Button variation="primary">Hello world</Button>;
}

export default App;

Analytics.record({ name: 'albumVisit' });

Analytics.record({
  name: 'albumVisit',
  attributes: { genre: '', artist: ''}
});

Analytics.record({
  name: 'albumVisit',
  immediate: true
});